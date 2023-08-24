import { View, Text,StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import HeaderNavigation from './HeaderNavigation'
import SkillLevelComponent from '../SkillLevelComponent';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Hard(){
  return (
    <View style={styles.container}  >
       <HeaderNavigation Level="Hard" />
      <SkillLevelComponent/>
    </View>
  )
}

//export default Hard

const styles = StyleSheet.create({
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
