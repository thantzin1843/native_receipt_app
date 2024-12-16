import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CategoryList from './CategoryList'

export default function Category() {
  return (
    <View>
        <View style={{marginVertical:20,}}>
            <Text style={styles.title}>Meal Category</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
      color:"#fff",
      fontSize:20,
    },

  })
