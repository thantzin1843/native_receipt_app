import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'

type Props = {
  categories: Array<{idCategory: string, strCategory: string, strCategoryThumb: string}>,
  setSelectedCategory: (name:string) => void,
  selectedCategory:string,
 
}
export default function CategoryList({categories,setSelectedCategory,selectedCategory}:Props) {
  const active = {
    backgroundColor: "orange",
    color:"black",
  }
  return (
    <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.idCategory}
        renderItem={({item})=>(
            <Pressable
            onPress={()=>{
              setSelectedCategory(item.strCategory);

            }}
            style={
                [{marginHorizontal:10,backgroundColor:"#ffffff11", 
                    paddingHorizontal:10,borderRadius:5,
                    flexDirection:'row',alignItems:'center',justifyContent:'space-around'},item.strCategory==selectedCategory?active:{}]
            }>
                <View style={{width:50,height:50,borderRadius:10}}>
                    <Image source={{uri:item.strCategoryThumb}} style={{width:"100%",height:"100%",}} resizeMode="contain"/>
                </View>
                <Text style={[{color:'white',marginLeft:10,}]}>{item.strCategory}</Text>
            </Pressable>
        )}
    />
  )
}
