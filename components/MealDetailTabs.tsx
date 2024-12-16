import React from 'react'
import { FlatList, Pressable, Text } from 'react-native'

type Props ={
  activeTab: string,
  setActiveTab: (tab: string) => void,
}
export default function MealDetailTabs({activeTab,setActiveTab}:Props) {
  return (
    <FlatList
        style={{height:50,marginTop:20}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={['Ingredients','Instructions','Youtube','Area']}
          renderItem={({item})=>(
            <Pressable onPress={()=>setActiveTab(item)} style={item == activeTab ? {marginEnd:50,} : {marginEnd:30}}>
              <Text style={item==activeTab ? {color:'#ffffff',fontSize:18}: {color:"#ffffff77",fontSize:15}}>{item}</Text>
            </Pressable>
          )}
          contentContainerStyle={{ paddingVertical: 0 }}
        />
  )
}
