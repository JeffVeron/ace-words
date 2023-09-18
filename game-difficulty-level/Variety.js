import { View, Text,  StyleSheet , useWindowDimensions } from 'react-native'
import React , {useState} from 'react'
import HeaderNavigation from './HeaderNavigation'

 

export default function Variety(){
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <View  style = {{ backgroundColor: "brown",
    marginTop: 4 ,
    left:0 ,
   width: windowWidth,  
   height: windowHeight,  
   alignSelf: "center",  
   justifySelf: "center"}}>
       <HeaderNavigation Level="Variety" />
      <Text>Variety</Text>
    </View>
  )
}

//export default Variety


const styles = StyleSheet.create({
   
  text: {
    color: "white",
  },
});
