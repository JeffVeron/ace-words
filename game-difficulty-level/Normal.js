import { View, Text , StyleSheet , useWindowDimensions } from 'react-native'
import React from 'react'
import HeaderNavigation from './HeaderNavigation'
import SkillLevelComponent from '../SkillLevelComponent';



export default  function Normal () {

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  
  

  return (
    <View style = {{backgroundColor: "brown",
    marginTop: 4 ,
    left:0 ,
   width: windowWidth,  
   height: windowHeight,  
   alignSelf: "center",  
   justifySelf: "center",}}>
       <HeaderNavigation Level="Normal" />
     <SkillLevelComponent/>
    </View>
  )
}

//export default Normal

const styles = StyleSheet.create({
  
  text: {
    color: "white",
  },
});
