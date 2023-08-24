import { View, Text,  StyleSheet , Dimensions } from 'react-native'
import React from 'react'
import HeaderNavigation from './HeaderNavigation'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


export default function Variety(){
  return (
    <View  style = {styles.container}>
       <HeaderNavigation Level="Variety" />
      <Text>Variety</Text>
    </View>
  )
}

//export default Variety


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
