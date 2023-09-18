import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import HeaderNavigation from "../game-difficulty-level/HeaderNavigation";
import GameBoard from "../game-play-components/GameBoard";
import Bottom from "../game-play-components/Bottom";
import LevelTittle from "../game-play-components/LevelTittle";
import AnswerBoard from "../game-play-components/AnswerBoard";
import ScoreBoard from "../game-play-components/ScoreBoard";

const gameBoardImage = require("../assets/game-images/board4.png");
const answerBoardImage = require("../assets/game-images/board2-removebg-preview.png");
const letterBoardImage = require("../assets/game-images/letter-board.png");
const scoreBoardImage =  require("../assets/game-images/board2-removebg-preview.png")

const EasyLevel1 = () => {
  
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return (
    <View style={{
      borderWidth: 1,
      borderColor: "red",
      backgroundColor: "brown",
      left: 0,
      flex: 1,
      width: windowWidth,
      height: 650 /* windowHeight */,
      alignSelf: "center",
      justifySelf: "center",
    }}>
      <HeaderNavigation Level="Easy 1" />
 
{/* 
<ImageBackground
source= {scoreBoardImage}
resizeMode="stretch"
style = {{
  marginTop : 20,
  width : '80%',
  height : 70,
  alignSelf:'center',
  alignContent: 'center',
  justifyContent: 'center',
  justifySelf: 'center'
}}
>
  <View
  style= {{
     
     alignSelf:'center',
     flexDirection: 'row',
     justifyContent: 'space-between',
     justifySelf: 'center'
  }}
  >
  <Text
  style = {{
     color: '#352F44',
      fontWeight: 'bold',
      fontSize:25,
    alignSelf:'center',
     flexDirection: 'row' , 
    justifySelf: 'center',
     textShadowColor: '  rgba(10, 10, 255, 0.7) ',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  }}
  >Score : </Text>
  <Text
  style= {{
       color: 'red',
      fontWeight: 'bold',
      fontSize:25,
    alignSelf: 'center',
    textAlign : 'center',
    marginRight: 5,
    textShadowColor: ' rgba(10, 10, 255, 0.7)' ,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  }}
  >5000</Text>
</View>
</ImageBackground> */}

<ScoreBoard/>
      <LevelTittle />
 
      <GameBoard />
      <AnswerBoard />

      <Bottom />
    </View>
  );
};

export default EasyLevel1;

const styles = StyleSheet.create({
   
  levelTitle: {
    display: "flex",
    flexDirection: "row",
    height: 50,
    width: "90%",
    alignSelf: "center",
    justifySelf: "center",
    alignContent: "center",
    justifyContent: "center",
    gap: 80,
    marginTop: 20,
  },
  levelTitleText: {
    color: "#B2BEB5",
    fontSize: 35,
    fontWeight: "bold",
  },
  gameBoard: {
    width: 350,
    height: 350,

    alignSelf: "center",
    alignContent: "center",
    justifySelf: "center",
    justifyContent: "center",
  },
  letterArrangements: {
    height: "90%",
    width: "95%",
    alignSelf: "center",
    alignContent: "center",
    justifySelf: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    gap: 20,
    //marginLeft: 30
  },
  firstRow2X2: {
    flexDirection: "row",
    alignSelf: "center",
    alignContent: "center",
    justifySelf: "center",
    justifyContent: "center",
  },

  secondRow2X2: {
    flexDirection: "row",
    alignSelf: "center",
    alignContent: "center",
    justifySelf: "center",
    justifyContent: "center",
  },
  letterStyle: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    alignSelf: "center",
    justifySelf: "center",
    alignItems: "center",
    marginTop: "10%",
    textShadowColor: "black",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 5,
  },
  answerBoard: {
    width: 80,
    height: 80,
    alignSelf: "center",
    alignContent: "center",
    justifySelf: "center",
    justifyContent: "center",
    marginBottom: 80,
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
