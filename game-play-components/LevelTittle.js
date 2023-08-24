import { View, Text ,StyleSheet  } from 'react-native'
import React from 'react'

const LevelTittle = () => {
  return (
    <View style = {styles.levelTitle}>
        <Text style = { styles.levelTitleText}>Easy</Text>
        < Text style = { styles.levelTitleText} >Level 1</Text>
       </View>
  )
}

export default LevelTittle

const styles = StyleSheet.create({
    levelTitle:{
        display:'flex',
        flexDirection : 'row',
        height : 50,
        width: '90%',
        alignSelf: 'center',
        justifySelf:'center',
        alignContent: 'center',
        justifyContent:'center',
        gap: 80,
        marginTop: 20
     },
     levelTitleText:{
       color: '#B2BEB5',
       fontSize: 35 , 
       fontWeight: 'bold'
     },
})