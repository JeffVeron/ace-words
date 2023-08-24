import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import React from "react";
//import { FontAwesome } from "@expo/vector-icons";
import HeaderNavigation from "./HeaderNavigation";
import SkillLevelsData from "../SkillLevels";
import Animated, {
  Easing,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import SkillLevelData from "../SkillLevels";
import allwords from "../words";
import { theWords } from "../theWords";
/* import Navigation from "../Navigation"; */
import SkillLevelComponent from "../SkillLevelComponent";



import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Easy({navigation}) {
  // Filter elements with three letters
  const words3 = theWords.filter((item) => item.length === 3);

  const words5 = theWords.filter((item) => item.length === 14);

  console.log(words5);
  console.log(words5[300]);

  return (
    <View style={styles.container}>
      <HeaderNavigation Level="Easy" />
      <SkillLevelComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "brown",
    marginTop: 4,
    left: 0,
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    alignSelf: "center",
    justifySelf: "center",
  },
  text: {
    color: "white",
  },
});
