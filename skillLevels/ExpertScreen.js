import { View, Text ,Dimensions , StyleSheet } from 'react-native'
import React from 'react'
import HeaderNavigation from '../game-difficulty-level/HeaderNavigation'
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


export default function ExpertScreen ({navigation}){
  return (
    <View  style = {styles.container}>
       <HeaderNavigation Level = "Expert "/>
      <Text>ExpertScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    baorderWidth: 1,
    borderColor : 'red',
    backgroundColor: 'brown',
    left: 0,
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    alignSelf: "center",
    justifySelf: "center",
  }
})

 