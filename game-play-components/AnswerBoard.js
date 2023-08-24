import { View, Text , StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

const answerBoardImage =  require('../assets/game-images/board2-removebg-preview.png');
const letterBoardImage = require('../assets/game-images/letter-board.png');

const AnswerBoard = () => {
  return (
    
<View  style ={styles.answerLettersArea}  >
<ImageBackground
          source={answerBoardImage}
          style={ styles.answerBoard}

          resizeMode= 'cover'
        >
  
  <Text style =  {styles.answerBoardText}>A</Text>

          </ImageBackground>


  
          <ImageBackground
          source={answerBoardImage}
          style={ styles.answerBoard}

          resizeMode= 'cover'
        >
  
  <Text style =  {styles.answerBoardText}>B</Text>

          </ImageBackground>

         {/*  /// */}
          <ImageBackground
          source={answerBoardImage}
          style={ styles.answerBoard}

          resizeMode= 'cover'
        >
  
  <Text style =  {styles.answerBoardText}>A</Text>

          </ImageBackground>
          {/* /// */}
          <ImageBackground
          source={answerBoardImage}
          style={ styles.answerBoard}

          resizeMode= 'cover'
        >
  
  <Text style =  {styles.answerBoardText}>A</Text>

          </ImageBackground>

</View>
  )
}

export default AnswerBoard

const styles =  StyleSheet.create({
    
  answerBoard:{

    width: 80,
    height: 80,             
    alignSelf: 'center',
    alignContent:'center',
    justifySelf: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  answerBoardText : {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifySelf: 'center',
    alignItems:'center',
  },
  answerLettersArea :{
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    justifySelf: 'center',
    alignItems:'center',
  }
})