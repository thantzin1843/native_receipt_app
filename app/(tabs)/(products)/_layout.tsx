import { Ionicons } from '@expo/vector-icons'
import { Stack } from 'expo-router'
import React from 'react'

export default function Productlayout() {
  return (
    <Stack
      screenOptions={{
       
      }}
    >
        <Stack.Screen name="index" options={{
            headerShown:false,
        }}/>
        <Stack.Screen name="product/[id]" options={{
            headerShown:false,
        }}/>
    </Stack>
  )
}
