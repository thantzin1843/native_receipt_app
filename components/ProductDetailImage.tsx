import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { Image, View } from 'react-native'

function ProductDetailImage({image}:string) {
  return (
    <View style={{height:"40%",width:"100%"}}>
        {/* Top Category and love section */}
          <View style={{display:'flex',flexDirection:'row',paddingHorizontal:20,justifyContent:'space-between',}}>
            <Link style={{color:'black'}} href="/">
              <Ionicons name="arrow-back" size={30}/>
            </Link>
            <Ionicons name="heart-circle" size={45} color="gray"/>
          </View>

        {/* Image Section */}
        <View style={{display:"flex",flex:1,justifyContent:'center',alignItems:"center"}}>
          <View style={{width:250,height:250,}}>
            <Image source={{uri:image}} style={{width:"100%",height:"100%",borderRadius:30}}/>
          </View>
        </View>
      </View>
  )
}

export default ProductDetailImage