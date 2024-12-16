import React from 'react'
import { Text } from 'react-native'

export default function MealInstruction({instructions}:string) {
  return (
    <Text style={{color:'#ffffffaa',lineHeight:25}}>
          {instructions}
    </Text>
  )
}
