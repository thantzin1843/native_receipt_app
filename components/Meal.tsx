import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

type Props = {
    thumb : string,
    name : string,
    id:number
}

const RatedStars = ({ count }: { count: number }) => {
    return (
      <>
        {Array.from({ length: count }, (_, index) => (
          <Ionicons key={index} name="star" size={20} color="orange" />
        ))}
      </>
    );
  };
  
  const RemainingStars = ({ count }: { count: number }) => {
    return (
      <>
        {Array.from({ length: count }, (_, index) => (
          <Ionicons key={index} name="star-outline" size={20} color="orange" />
        ))}
      </>
    );
  };

export default function Meal({thumb,name,id}:Props) {
    const [starCount, setStarCount] = useState(1);
    const totalStars = 5; // Total number of stars
  
    useEffect(() => {
      const randomStars = Math.floor(Math.random() * totalStars) + 1;
      setStarCount(randomStars);
    }, []);
  
    const remainingStars = totalStars - starCount;

  return (
   
    <View style={styles.card}>
        <View style={{width:100,height:100,position:'absolute',top:-40,}}>
            <Image source={{uri:`${thumb}`}} style={{width:"100%",height:"100%",borderRadius:50}}/>
        </View>

        <View style={{marginTop:60}}>
          {/* <Link href={`/product/${1}`}> */}
            <Link href={`/product/${id}`} style={[{color:"white",fontSize:15}]} numberOfLines={2}>{name}</Link>
          {/* </Link> */}
        <View style={{display:"flex",flexDirection:"row", justifyContent:"space-between",marginVertical:10}}>
            <RatedStars count={starCount} />
            <RemainingStars count={remainingStars} />
        </View>

        <View style={{backgroundColor:'orange',marginTop:5,padding:5,borderRadius:20,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <Ionicons name="time-outline" size={20} color="white"/>
            <Text style={{color:"white",textAlign:'center',marginStart:5}}> 
                
                12 Mins</Text>
            {/* <Text style={{color:"white",textAlign:'center',backgroundColor:'black',marginTop:5,padding:5,borderRadius:20,}}>Easy</Text> */}
        </View>
       
        </View>
    </View>

  )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:"#ffffff11",
        width:"48%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        padding: 20,
        borderRadius:30,
        position:"relative",
        marginTop:60,
    },
    
})