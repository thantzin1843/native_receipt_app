import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function MealAdditionalInfo({area}:string) {
  return (
        <View>
            <View style={styles.topRow}>
          <View style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#ffffff22',paddingVertical:5,paddingHorizontal:20,borderRadius:5}}>
            <View><Ionicons name="time-outline" size={25} color="orange"/></View>
            <Text style={styles.whiteText}>30Mins</Text>
            <Text style={styles.grayText}>Cooking</Text>
          </View>
          <View style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#ffffff22',paddingVertical:5,paddingHorizontal:20,borderRadius:5}}>
            <View><Ionicons name="star-outline" size={25} color="orange"/></View>
            <Text style={styles.whiteText}>Rating</Text>
            <Text style={styles.grayText}>4.5</Text>
          </View>
          <View style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#ffffff22',paddingVertical:5,paddingHorizontal:20,borderRadius:5}}>
            <View><Ionicons name="flame-outline" size={25} color="orange" /></View>
            <Text style={styles.whiteText}>Easy Lvl</Text>
            <Text style={styles.grayText}>Recipes</Text>
          </View>
        </View> 

        <View style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:30,backgroundColor:'#ffffff22',paddingVertical:5,paddingHorizontal:20,borderRadius:5}}>
            <View><Ionicons name="flag-outline" size={25} color="orange"/></View>
            <Text style={styles.whiteText}>Area</Text>
            <Text style={styles.grayText}>{area}</Text>
        </View>
        </View>
  )
}
const styles = StyleSheet.create({
    topRow:{display:'flex',flexDirection:'row',justifyContent:'space-between',width:"100%",marginTop:20},
    whiteText:{color:'white',fontSize:15},
    grayText:{color:'gray',fontSize:12},
  
    
    
  })