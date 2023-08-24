import { View, Text ,StyleSheet , Pressable ,Dimensions,ImageBackground } from 'react-native'
import React , {useEffect , useState  } from 'react'
import useWordStore from '../store';
import usePressedLetterStore from '../usePressedletterStore';
//const { uuid } = require('uuidv4');



const gameBoardImage = require('../assets/game-images/board4.png');
const answerBoardImage =  require('../assets/game-images/board2-removebg-preview.png');
const letterBoardImage = require('../assets/game-images/letter-board.png');


function getRandomWordFromArray(wordArray) {
  const randomIndex = Math.floor(Math.random() * wordArray.length);
  return wordArray[randomIndex];
}



// Function to shuffle an array using Fisher-Yates algorithm
const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const GameBoard = () => {
 
  const [selectedWord, setSelectedWord] = useState('');
  const [shuffledLetters, setShuffledLetters] = useState([]);
  const pressedLetters = usePressedLetterStore();  //state => state.values
  const words = useWordStore(state => state.words);

  // Select a random word from useWordStore and set it to selectedWord
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setSelectedWord(words[randomIndex]);
    
    //console.log(selectedWord)
     // Shuffle the letters of the selected word
     const lettersArray = words[randomIndex].split('');
     const shuffledArray = shuffleArray(lettersArray);
     setShuffledLetters(shuffledArray);
   

     console.log('Selected word:', words[randomIndex]);
  }, [words]);

  const handleLetterPress = letter => {
    // Update the usePressedLetterStore when a letter is pressed
   pressedLetters.addToValues(letter);
    console.log(letter);
  };

    
  return (
    <View 
     style={{ 
      padding: 10 ,
       color: 'white', 
       flexDirection: 'row'
       
       }} >
        <ImageBackground
     source ={gameBoardImage}
     style = {{
      height : 300 ,
      width: 400,
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
     }}

>
      {shuffledLetters.map((letter, index) => (
        <Pressable
          onPress={() => handleLetterPress(letter)}
          style={{ padding: 10 }}
          key={index}
        >
          <ImageBackground
          source= {letterBoardImage}
          resizeMode ={'stretch'}
          style= {{
            marginTop:15,
            height:100 , 
            width: 100,
            alignSelf:'center',
            justifySelf:'center',
            justifyContent: 'center'
          }}
          >
          <Text 
          style= {{
            color: 'white',
            fontWeight: 'bold',
            alignSelf:'center',
            justifySelf:'center',
            fontSize: 55,
            textShadowColor: 'black',
            textShadowOffset: {width : 4 , height : 4 },
            textShadowRadius : 10 

          }}
          >{letter}</Text>
          </ImageBackground>
        </Pressable>
      ))}

      </ImageBackground>
    </View>
  )
}

export default GameBoard

const styles = StyleSheet.create({
  gameBoard: {
   
    width: 350,
    height: 350,
    marginBottom: 40,
    alignSelf: 'center',
    alignContent:'center',
    justifySelf: 'center',
    justifyContent: 'center'
  },
  letterArrangements:{
 
    height: '90%',
    width : '95%',
     alignSelf: 'center',
     alignContent:'center',
    justifySelf: 'center',
    justifyContent: 'center',
    display : 'flex',
    flexDirection: 'column',
    gap : 10,
    //marginLeft: 30
  },
  firstRow2X2 :{
    flexDirection : 'row',
    alignSelf: 'center',
    alignContent:'center',
   justifySelf: 'center',
   justifyContent: 'center',
  } ,

  secondRow2X2 : {
    flexDirection : 'row',
    alignSelf: 'center',
    alignContent:'center',
   justifySelf: 'center',
   justifyContent: 'center',
  },
  letterStyle : {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifySelf: 'center',
    alignItems:'center',
    marginTop: '10%',
    textShadowColor: 'black',
    textShadowOffset: {width : 4 , height : 4 },
    textShadowRadius : 5  
  },
  letterImage : {
    width: 200,
    height: 100,
    margintBottom: '10%'
  }

})