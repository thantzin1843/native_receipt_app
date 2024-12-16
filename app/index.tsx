import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { Button, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Login() {
  return (
    
      <ImageBackground source={{uri:"https://images.themodernproper.com/billowy-turkey/production/posts/2022/FruitSalad_Shot4_20.jpg?w=1200&q=82&auto=format&fit=crop&dm=1654019861&s=0f79489bdf4ecee2c0dcd15c19144b30"}} style={styles.bg}>
        <View style={styles.container}>
            <View style={styles.forward}>
              <Ionicons name="arrow-forward" size={30}  />
            </View>
            <Text style={{color:'white',fontSize:25}}>Please Sign In</Text>
            <View style={{marginVertical:20}}>
              <Text style={{color:'gray'}}>Email</Text>
              <TextInput
                keyboardType="email-address"
                autoCapitalize="none"
                textContentType="emailAddress"
                style={{borderBottomColor:'orange',borderBottomWidth:2,color:'white',fontSize:18,padding:5}}
              />
            </View>

            <View style={{marginVertical:20}}>
              <Text style={{color:'gray'}}>Password</Text>
              <TextInput
                keyboardType="email-address"
                autoCapitalize="none"
                textContentType="password"
                style={{borderBottomColor:'orange',borderBottomWidth:2,color:'white',fontSize:18,padding:5}}
              />
              <Text></Text>
            </View>
            <View style={{}}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign In
                  
                </Text>
                <Ionicons name='log-in' size={40} color='#212121'/>
              </TouchableOpacity>
            </View>
            <View style={{display:"flex",justifyContent:'space-between',flexDirection:'row',paddingVertical:20,}}>
              <Link href="/" style={{color:'white',textDecorationLine:'underline'}}>Forget Password ?</Link>
              <Link href="/(tabs)" style={{color:'white',textDecorationLine:'underline'}}>Sign up</Link>
            </View>


        </View>
      </ImageBackground>
  
  )
}

const styles = StyleSheet.create({
  bg:{
    flex:1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  container:{backgroundColor:'#212121',height:'50%',width:'100%',borderTopStartRadius:30,
    borderTopEndRadius:30,padding:30,
  },
  forward:{
    backgroundColor:'orange',
    borderRadius:40,
    width:80,height:80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 50,
    top: -30,
  },
  button:{
    backgroundColor:'orange',
    padding:10,
    borderRadius:5,
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
  },
  buttonText:{
    color:'#212121',
    textAlign: 'center',
    fontSize:18,
    marginEnd:20,
    fontWeight: 'bold',
  }
})