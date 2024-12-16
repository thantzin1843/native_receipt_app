import IngredientList from '@/components/IngredientList'
import MealAdditionalInfo from '@/components/MealAdditionalInfo'
import MealDetailTabs from '@/components/MealDetailTabs'
import MealInstruction from '@/components/MealInstruction'
import ProductDetailImage from '@/components/ProductDetailImage'
import { useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import WebView from 'react-native-webview'
import YoutubeIframe from 'react-native-youtube-iframe'


export default function ProductById() {
    const {id} = useLocalSearchParams();
    const [meal, setMeal] = useState(null);
    const [activeTab, setActiveTab] = useState("Ingredients");

    const [playing, setPlaying]  = useState(false);

    const fetchMealById  = async(id:number) =>{
     try{
      const response  = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      setMeal(data.meals[0]);
     }catch(err){
      console.log(err)
     }
    }
    useEffect(()=>{
      fetchMealById(Number(id));
    },[])
    
    if (!meal) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push({ ingredient, measure });
      }
    }
// youtube video section
function getYouTubeVideoID(url:string) {
  const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}
const videoID = getYouTubeVideoID(meal?.strYoutube);
// alert(videoID)
    const renderActiveTab = () => {
      switch (activeTab) {
        case "Ingredients":
          return (
            <IngredientList ingredients={ingredients}/>
          )
        case "Instructions":
          return (
            <ScrollView showsVerticalScrollIndicator={false}>
              <MealInstruction instructions={meal != null ? meal.strInstructions : "No instructions"}/>
            </ScrollView>
          );
        case "Youtube":
          return (
          
              <WebView
                source={{ uri: `https://www.youtube.com/embed/${videoID}?rel=0&loop=0&controls=1&modestbranding=0&autohide=1` }}
                style={{ flex:1,width:400,marginBottom:20 ,}}
              />
        
          );
        case "Area":
          return <MealAdditionalInfo area={meal?.strArea}/>;
        default:
          return <Text>Select a tab</Text>;
      }
    };

    // Function to extract video ID from the URL
 
  return (
    <SafeAreaView style={{flex:1,paddingTop:30}}>
      <ProductDetailImage image={meal.strMealThumb}/>
      <View style={styles.container}>
        <View style={{width:100,height:5,backgroundColor:'gray',marginBottom:30,marginTop:10}}></View>
        <Text style={{color:'orange',textAlign:'center',fontSize:20}}>{meal?.strMeal}</Text>

        <View style={{height:50,width:"100%",marginBottom:10}}>
        <MealDetailTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        </View>
        
        
        {renderActiveTab()}

        
        
        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    height:"60%",width:"100%",backgroundColor:'#212121',borderTopRightRadius:50,borderTopLeftRadius:50,
    display:'flex',flexDirection:'column',alignItems:'center',paddingHorizontal:50
  },
  topRow:{display:'flex',flexDirection:'row',justifyContent:'space-between',width:"100%",marginTop:20},
  whiteText:{color:'white',fontSize:15},
  grayText:{color:'gray',fontSize:12},

  ingredientItem: {
    width:"100%",
    flexDirection: 'row',
    justifyContent:'space-between',
    // backgroundColor:'#ffffff33',
    alignItems: 'center',
    marginVertical: 5,
    borderBottomColor:'gray',
    borderBottomWidth:1,
  },
  ingredientImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  ingredientText: {
    fontSize: 16,
    color:'white'
  },

  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webView: {
    width: '100%',
    height: 250,
  },
})