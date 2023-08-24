import { View, Text,StyleSheet , Dimensions } from 'react-native'
import React from 'react'
import HeaderNavigation from './HeaderNavigation';
import SkillLevelComponent from '../SkillLevelComponent';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Extreme({navigatio}) {
  return (
    <View  style={styles.container} >
      <HeaderNavigation
  Level="Extreme"
  />
      <SkillLevelComponent/>
    </View>
  )
}const styles = StyleSheet.create({
  container: {
    backgroundColor: "brown",
     marginTop: 4 ,
     left:0 ,
    width: windowWidth,  
    height: windowHeight,  
    alignSelf: "center",  
    justifySelf: "center",
  },
  text: {
    color: "white",
  },
});



