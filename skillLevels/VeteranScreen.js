import { View, Text , StyleSheet ,Dimensions  } from 'react-native'
import React from 'react'
import HeaderNavigation from '../game-difficulty-level/HeaderNavigation'
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


export default function VeteranScreen ({navigation}){
  return (
    <View style = {styles.container}>
      <HeaderNavigation Level = "Expert" />
      <Text>VeteranScreen</Text>
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