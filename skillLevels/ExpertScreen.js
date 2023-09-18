import { View, Text ,useWindowDimensions , StyleSheet } from 'react-native'
import React from 'react'
import HeaderNavigation from '../game-difficulty-level/HeaderNavigation'
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;


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
      borderWidth: 1,
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

 