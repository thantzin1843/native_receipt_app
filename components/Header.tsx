import React from 'react'
import { Image, StyleSheet, Text , View} from 'react-native'

type Props = {
    title: string,
    subTitle: string,
}

export default function Header({title,subTitle}:Props) {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <View>
        <Image source={{uri:"https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"}} style={{width:50,height:50,borderRadius:10}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
      color:"#fff",
      fontSize:20,
    },
    subTitle:{
      color:"#ffffffaa",
      fontSize:15,
      
    }
  })