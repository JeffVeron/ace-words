import { View, Text, StyleSheet , Dimensions } from 'react-native'
import React from 'react'
import HeaderNavigation from '../game-difficulty-level/HeaderNavigation'
import EasyLevelsContainer from '../game-levels/EasyLevelsContainer';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;




export default function BeginnerScreen({navigation})  {
  return (
    <View  style = { styles.container}>
      <HeaderNavigation Level="Beginner" />
      <EasyLevelsContainer/>
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
