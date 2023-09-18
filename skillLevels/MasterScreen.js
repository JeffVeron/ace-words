import { View, Text , StyleSheet ,useWindowDimensions  } from 'react-native'
import React from 'react'
import HeaderNavigation from '../game-difficulty-level/HeaderNavigation'


export default function MasterScreen({navigation}){
  
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <View  style = { {
      borderWidth: 1,
      borderColor : 'red',
      backgroundColor: 'brown',
      left: 0,
      flex: 1,
      width: windowWidth,
      height: windowHeight,
      alignSelf: "center",
      justifySelf: "center",
    }}>
      <HeaderNavigation Level = "Master"/>
      <Text>MasterScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  
})
