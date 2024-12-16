import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'

export default function IngredientList({ingredients}:any) {
  return (
    <FlatList
        data={ingredients}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.ingredientItem}>
            <View>
            <Image
              source={{ uri: `https://www.themealdb.com/images/ingredients/${item.ingredient}.png` }}
              style={styles.ingredientImage}
            />
            <Text style={styles.ingredientText}>
               {item.ingredient}
            </Text>
            </View>
            <Text style={styles.ingredientText}>
              {item.measure}
            </Text>
          </View>
        )}
      />
  )
}
const styles = StyleSheet.create({

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
  
  })