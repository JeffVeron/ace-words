import { 
    View, 
    Text, 
    StyleSheet,
    Pressable, 
    ScrollView ,
    StatusBar
  } from 'react-native'
//import { NavigationContainer } from "@react-navigation/native";
import React from 'react'
import SkillLevelsData from "./SkillLevels";
//import Animated, { Easing, withTiming ,useSharedValue, useAnimatedStyle } from "react-native-reanimated";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

 

const SkillLevelComponent = (/* {navigation} */) => {
    //const translateY = useSharedValue(0);
    const navigation = useNavigation();

    
 
  return (

    
    <View style  = {styles.mainContainer} >
     <StatusBar translucent backgroundColor="transparent" />
    <ScrollView
    contentOffset={{ y: 0 }}
    contentContainerStyle={{ flex: 1, 
      justifyContent: 'center',
       alignItems: 'center',
        height: '100%', 
        marginBottom: 10 , 
        width : 400 ,
      }}
    >


     {/* Beginner */} 
     <Pressable
     key = '1'
   onPress={() => navigation.navigate('BEGINNER')}
    >
    <View style = {styles.chocolateBar}>
      <Text style={styles.itemText} >BEGINNER</Text>
    </View>
    </Pressable>
  
  { /*  medium  */}

    <Pressable
     key = '2'
    onPress={() => navigation.navigate("MEDIUM")}>
    <View style = {styles.chocolateBar} >
      <Text style={styles.itemText} >MEDIUM</Text>
    </View>

    </Pressable>


    {/* advanced  */}

    <Pressable
     key = '3'
    onPress={() => navigation.navigate("ADVANCED")}>
    <View style = {styles.chocolateBar} >
      <Text style={styles.itemText} >ADVANCED</Text>
    </View>

    </Pressable>

 { /*  talented */}

    <Pressable
     key = '4'
    onPress={() => navigation.navigate("TALENTED")}>
    <View style = {styles.chocolateBar} >
      <Text style={styles.itemText} >TALENTED</Text>
    </View>

    </Pressable>

    {/* skillful */}

    <Pressable
     key = '5'
    onPress={() => navigation.navigate("SKILLFUL")}>
    <View style = {styles.chocolateBar}>
      <Text style={styles.itemText} >SKILLFUL</Text>
    </View>

    </Pressable>


   {/*  veteran  */}

    <Pressable
     key = '6'
    onPress={() => navigation.navigate("VETERAN")}>
    <View style = {styles.chocolateBar} >
      <Text style={styles.itemText} >VETERAN</Text>
    </View>

    </Pressable>

    {/* expert */}

    <Pressable
     key = '7'
    onPress={() => navigation.navigate("EXPERT")}>
    <View style = {styles.chocolateBar} >
      <Text style={styles.itemText} >EXPERT </Text>
    </View>

    </Pressable> 

 {/*    master */}

    <Pressable
     key = '8'
    onPress={() => navigation.navigate("MASTER")}>
    <View style = {styles.chocolateBar}>
      <Text style={styles.itemText} >MASTER</Text>
    </View>

    </Pressable>

    </ScrollView>
    </View>
  )
};


 


export default SkillLevelComponent
 

const styles = StyleSheet.create({
    itemContainer: {
        height: 70,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        //borderBottomWidth: 1,
        //borderColor: '#ccc',
        marginBottom: 40 ,
      },
      chocolateBar: {
     //marginTop:20,
      //  marginBottom: 30 ,
      //gap: 1,
      marginVertical: 5 ,
        backgroundColor: '#8B4513', // Chocolate brown color
        padding: 10,
        width: '100%',
       // borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 8,
        borderTopColor: '#D2691E', // Lighter shade for the top border
        borderLeftWidth: 4,
        borderLeftColor: '#D2693D',
        borderBottomWidth: 8,
        borderBottomColor: '#D2491E',
        borderRightWidth: 4,
        borderRightColor: '#D2791E',
        boxshadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color
        boxshadowOffset: { width: 0, height: 6 }, // Shadow offset
        boxshadowOpacity: 0.8, // Shadow opacity
        boxshadowRadius: 10, // Shadow radius
        elevation: 15, // Android shadow
      },
      itemText: {
        fontSize: 20,
        color: 'white',
        fontWeight:'bold'
      },
      mainContainer :{
        height: '80%',
        flex:1,
        flexWrap: 'wrap' ,
        //backgroundColor: 'red'
       // marginTop: 30,
        borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'solid',
    //paddingTop:80
      }
    });
    


 