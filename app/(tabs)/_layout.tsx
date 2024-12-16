import { Ionicons } from '@expo/vector-icons'
import { Tabs, useSegments } from 'expo-router'
import React from 'react'

export default function Tablayout() {
  const segments = useSegments();
  const currentRoute = segments.join('/');
  // alert(currentRoute);
  let hidden = {}
  if(currentRoute == "(tabs)/(products)/product/[id]"){
    hidden = {
      display:'none'
    }
  }
  return (
    <Tabs
      screenOptions={{
        tabBarStyle:[hidden,{
          height:70,
          backgroundColor:"#1C1C1C",
          borderColor:"#212121",
          paddingTop:20,
          
      }],
      tabBarLabelStyle:{
        fontSize:12,
        fontWeight:"bold",
        color:'orange',
      },

      }}
    >
        <Tabs.Screen name="(products)" options={{
            headerShown:false,
            tabBarLabel:"",
            tabBarIcon:({focused, color})=><Ionicons name={focused ? 'home-sharp' :'home-outline'} color="orange"  size={30}/>
        }}/>
       
    </Tabs>
  )
}
