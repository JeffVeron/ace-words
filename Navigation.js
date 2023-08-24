/* // Navigation.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BeginnerScreen from "./skillLevels/BeginnerScreen";
import MediumScreen from "./skillLevels/MediumScreen";
import AdvancedScreen from './skillLevels/AdvancedScreen'
import TalentedScreen from './skillLevels/TalentedScreen'
import SkillfulScreen from './skillLevels/SkillfulScreen'
import VeteranScreen from './skillLevels/VeteranScreen'
import ExpertScreen from './skillLevels/VeteranScreen'
import MasterScreen from './skillLevels/MasterScreen'


// Import other screen components

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       {/*  <Stack.Screen name="BEGINNER" component={BeginnerScreen} /> */
       /* <Stack.Screen name="MEDIUM" component={MediumScreen} />
        <Stack.Screen name="ADVANCED" component={AdvancedScreen} />
        <Stack.Screen name="TALENTED" component={TalentedScreen} />
        <Stack.Screen name="SKILLFUL" component={SkillfulScreen} />
        <Stack.Screen name="VETERAN" component={VeteranScreen} />
        <Stack.Screen name="EXPERT" component={ExpertScreen} />
        <Stack.Screen name="MASTER" component={MasterScreen} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
 */