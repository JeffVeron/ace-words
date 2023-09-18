import { View, Text,StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import HeaderNavigation from './HeaderNavigation'
import SkillLevelComponent from '../SkillLevelComponent';
 
export default function Hard(){
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  
  return (
    <View style={{ backgroundColor: "brown",
    marginTop: 4 ,
    left:0 ,
   width: windowWidth,  
   height: windowHeight,  
   alignSelf: "center",  
   justifySelf: "center"}}  >
       <HeaderNavigation Level="Hard" />
      <SkillLevelComponent/>
    </View>
  )
}

//export default Hard

const styles = StyleSheet.create({
  
  text: {
    color: "white",
  },
});
