import Category from "@/components/Category";
import CategoryList from "@/components/CategoryList";
import Header from "@/components/Header";
import Meal from "@/components/Meal";
import MealList from "@/components/MealList";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {  StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export interface MealItem {
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
}

export default function Index() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("Beef");
    const [meals, setMeals] = useState<MealItem[]>([]);

    useEffect(() => {
    // Fetch categories from    the API
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  
  // When a category is selected, fetch meals and update selectedCategory state
  const fetchMeals = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`);
      const data = await response.json();
      setMeals(data.meals);
      // console.log(data.meals[0].strMeal);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };
  useEffect(()=>{
    fetchMeals();
  },[selectedCategory])


  return (
    <SafeAreaView
      style={styles.container}
    >
      {/* header */}
      <Header title="Hey, Thant Zin " subTitle="Ready to cook something?"/>
      {/* Category */}
      <View>
        <Category/>
        <CategoryList categories={categories} setSelectedCategory={setSelectedCategory} 
        selectedCategory={selectedCategory}/>
      </View>
      {/* Meal section */}
      <View>
        <MealList meals={meals} selectedCategory={selectedCategory}/>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#212121",
    padding:20,
  },

  text:{
    color:"#fff"
  }
})