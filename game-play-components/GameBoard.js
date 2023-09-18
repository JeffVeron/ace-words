import { View, Text ,StyleSheet , Pressable ,useWindowDimensions,ImageBackground } from 'react-native'
import React , {useEffect , useState  } from 'react'
import useWordStore from '../store';
import{easyWordList} from '../easyWordList'
import usePressedLetterStore from '../usePressedletterStore';
//const { uuid } = require('uuidv4');
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

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



const GameBoard = (/* {words} */) => {
  const navigation = useNavigation();
  const { values, addToValues, removeLastValue,slicedState,modifiedState } = usePressedLetterStore();
  const [shuffledLetters, setShuffledLetters] = useState([]);
  const [selectedWord, setSelectedWord] = useState([]);
  const pressedLetters = usePressedLetterStore();  
  const /* {words , easyWordStore}  */  easyWordStore = useWordStore(state => state.easyWordStore);
  const [modState , setModState] = useState([])
  const [buttonPressCount, setButtonPressCount] = useState(0);
 

  const handleRemoveLastValue = () => {
   // addLastRemovedValueBack ();
    setButtonPressCount(prevCount => prevCount + 1);
   
  };

   

    console.log('easy words : ' + easyWordList[9].word )
  // Select a random word from useWordStore and set it to selectedWord
  useEffect(() => {

    /* const randomIndex = Math.floor(Math.random() * words.length);
    setSelectedWord(words[randomIndex]);  */
    
    
     // Shuffle the letters of the selected word
    /*  const lettersArray = words[randomIndex].split(''); */
    const lettersArray = easyWordList[400].word.split('')
     const shuffledArray = shuffleArray(lettersArray);
     setShuffledLetters(shuffledArray);
      
 
    // console.log('Selected word:', words[randomIndex]);
    console.log('Selected word:', easyWordList[400]);
     
  }, [easyWordStore]);

  
  const handleLetterPress = index => {
    // Update the usePressedLetterStore when a letter is pressed
    //pressedLetters.addToValues(letter);

    const letter = shuffledLetters[index];
    pressedLetters.addToValues(letter);

    // Remove the clicked letter from shuffledLetters
    const updatedShuffledLetters = shuffledLetters.filter((_, i) => i !== index);
    setShuffledLetters(updatedShuffledLetters);
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
      height : 'auto' ,
      minHeight:300,
      width: 'auto',
      minWidth:'80%',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
     }}

>
      {shuffledLetters.map((letter, index) => (
        <Pressable
          onPress={ () => handleLetterPress(index)}
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

     {/*  <Pressable onPress={() => {handleRemoveLastValue()}}>
          <Feather
            name="delete"
            size={34}
            color="red"
            style={{
              alignSelf: "center",
              justifySelf: "center",
              backgroundColor: "yellow",
              height: 40,
              width: 40,
              borderRadius: "50%",
              fontWeight: "bold",
            }}
          />
        </Pressable> */}

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
    textShadow:'4 4 5 black ',
   /*  textShadowColor: 'black',
    textShadowOffset: {width : 4 , height : 4 },
    textShadowRadius : 5   */
  },
  letterImage : {
    width: 200,
    height: 100,
    margintBottom: '10%'
  }

})