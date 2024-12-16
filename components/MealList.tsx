import React from 'react'
import { Text, View } from 'react-native'
import Meal from './Meal'
import { FlatList } from 'react-native'
import { MealItem } from '@/app/(tabs)/(products)'


type Props = {
  meals:MealItem[],
  selectedCategory:string
}
export default function MealList({meals,selectedCategory}:Props) {
  return (
     <View style={{marginTop:30}}>
        <Text style={{color:"white", fontSize:15,marginBottom:10}}>Meals with <Text style={{color:'orange',fontSize:20}}>{selectedCategory}</Text></Text>

          <FlatList 
            data={meals}
            renderItem={({item})=>(
              <Meal thumb={item.strMealThumb} name={item.strMeal} id={item.idMeal}/>
            )}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            contentContainerStyle={{ paddingBottom:350 }}
            showsVerticalScrollIndicator={false}
          />

    </View>
  )
}
