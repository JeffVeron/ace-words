import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const headerImage = require("../assets/game-images/bar.jpg");
const { height, width } = Dimensions.get("window");

const HeaderNavigation = (props) => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.header}>
        <ImageBackground
          source={headerImage}
          resizeMode="cover"
          style={{
            display:'flex',
            height: "100%",
            alignSelf: 'center',
            alignContent: 'center',
            justifyContent:'center',
             width:width,
            flex:1,
            flexDirection:'row'
            //backgroundColor: "green",
          }}
        >
          <FontAwesome
            onPress={() => navigation.goBack()}
            name="arrow-circle-left"
            size={40}
            color="white"
            style={styles.headerArrow}
          />
          <Text style={styles.headerText}>{props.Level}</Text>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "white",
    backgroundColor: "red",
    height: 80,
    flex:1,
    width:'100%',
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    justifySelf: 'center',
    marginBottom: 0 
  },
  headerText: {
     marginLeft: "40%",
    marginRight: "20%",
    color: "white",

    fontWeight: "bold",
    fontSize: 30,
    marginTop: "5%",
    marginBottom: "5%",
  },
  headerArrow: {
    //marginRight: 120,
    marginTop: "7%",
    marginLeft: 15,
  },
});

export default HeaderNavigation;
