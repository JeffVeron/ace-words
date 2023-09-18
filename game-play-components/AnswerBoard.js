import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import usePressedLetterStore from "../usePressedletterStore";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import ModalScreen from "../ModalScreen";

import { useNavigation } from "@react-navigation/native";

const answerBoardImage = require("../assets/game-images/board2-removebg-preview.png");
const letterBoardImage = require("../assets/game-images/letter-board.png");

const AnswerBoard = () => {
  const navigation = useNavigation();
  const { values, addToValues, removeLastValue , removeAndSaveLastValue ,slicedState,modifiedState } = usePressedLetterStore();
  const [stateValueLetters, setStateValueLetters] = useState([]);

  const handleRemoveLastValue = () => {
    /* removeLastValue();
    addLastRemovedValueBack () */
 //removeLastValue();
 //removeAndSaveLastValue()
 slicedState()
 //modifiedState()
  };

  useEffect(() => {
    setStateValueLetters(values);
  }, [values]);
 


  console.log("the copied state = " + stateValueLetters);
  console.log(values);

  return (
    <View
      style={{
        height: 100,
        width: "90%",
        marginBottom: 10,
        // display: 'flex',
        //flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        justifyContent: "center",
      }}
    >
      {stateValueLetters.map((letter, index) => (
        <ImageBackground
          style={{
            width: 50,
            height: 50,
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
            justifyContent: "center",
            //marginLeft: 50
          }}
          source={answerBoardImage}
          key={index}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            {letter}
          </Text>
        </ImageBackground>
      ))}

     {/*  <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <Pressable onPress={handleRemoveLastValue}>
          <Feather
            name="delete"
            size={34}
            color="red"
            style={{
              alignSelf: "center",
              justifySelf: "center",
              //justifyContent:'center',
              //  marginTop: 5,
              backgroundColor: "yellow",
              height: 40,
              width: 40,
              borderRadius: "50%",
              fontWeight: "bold",
            }}
          />
        </Pressable>
      </View> */}


      <Pressable
      style = {{
        position:'absolute',
        marginTop:'30%',
        alignSelf:'center'
      }}
       onPress={() => navigation.navigate("Modal")}>
        <AntDesign
          name="checkcircleo"
          size={34}
          color="white"
          style={{
            alignSelf: "center",
            justifySelf: "center",
            justifyContent: "center",
            marginTop: 5,
            borderRadius: "50%",
            fontWeight: "bold",
            backgroundColor: "green",
          }}
        />
        {/* <Text style = {{color: 'white' , fontWeight: 'bold'}} >Check Answer</Text> */}
      </Pressable>
    </View>
  );
};

export default AnswerBoard;

const styles = StyleSheet.create({
  answerBoard: {
    width: 80,
    height: 80,
    alignSelf: "center",
    alignContent: "center",
    justifySelf: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  answerBoardText: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    alignSelf: "center",
    justifySelf: "center",
    alignItems: "center",
  },
  answerLettersArea: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifySelf: "center",
    alignItems: "center",
  },
});
