import { View, Text, StyleSheet ,Dimensions } from 'react-native'
import React from 'react'
import useWordStore from '../store';


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const EasyLevel2 = () => {
  const words = useWordStore((state) => state.words);
 


// Define a function to determine the difficulty of a word
function getWordDifficulty(word) {
  const vowelCount = word.replace(/[^aeiou]/gi, "").length;
  const consonantCount = word.length - vowelCount;

  if (vowelCount >= 3) {
      return "easy";
  } else if (vowelCount === 2 && consonantCount === 2) {
      return "moderate";
  } else {
      return "challenging";
  }
}

// Sort the array based on difficulty
words.sort((a, b) => {
  const difficultyA = getWordDifficulty(a);
  const difficultyB = getWordDifficulty(b);

  if (difficultyA === difficultyB) {
      return a.localeCompare(b); // Sort alphabetically if difficulty is the same
  } else if (difficultyA === "easy") {
      return -1; // 'a' is easier than 'b'
  } else if (difficultyB === "easy") {
      return 1; // 'b' is easier than 'a'
  } else if (difficultyA === "moderate") {
      return -1; // 'a' is easier than 'b'
  } else {
      return 1; // 'b' is easier than 'a'
  }
});


function getRandomWordFromArray(wordArray) {
  const randomIndex = Math.floor(Math.random() * wordArray.length);
  return wordArray[randomIndex];
}

const randomWord = getRandomWordFromArray(words);
 
console.log(randomWord)
const charactersArray = randomWord.split("");

console.log(charactersArray);
console.log(charactersArray[2]);

//console.log(words);

  return (
    <View style= { styles.container}>
      <Text>one word from the list</Text>
      <Text style= {{ color : 'white'}}>{words}</Text>
      <Text>show</Text>
    </View>
  )
}

export default EasyLevel2
const styles = StyleSheet.create({
  container : {
    baorderWidth: 1,
    borderColor: "red",
    backgroundColor: "brown",
    left: 0,
    flex: 1,
    width: windowWidth,
    height: 650 /* windowHeight */,
    alignSelf: "center",
    justifySelf: "center",
  }
})