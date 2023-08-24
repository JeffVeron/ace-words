import { View, Text, Button , ImageBackground , StyleSheet} from 'react-native'
import React , { useEffect }from 'react'
import useScoreStore from '../useScoreStore';

const letterBoardImage = require("../assets/game-images/letter-board.png");
const scoreBoardImage =  require("../assets/game-images/board2-removebg-preview.png")


const ScoreBoard = () => {

  const { score, updateScore, loadPersistedState } = useScoreStore();
  
  useEffect(() => {
    loadPersistedState(); // Load persisted score when the component mounts
  }, []);

  const handleScoreIncrement = () => {
    updateScore(score + 1);
  };


  return (
    <View>
     
<ImageBackground
source= {scoreBoardImage}
resizeMode="stretch"
style = {styles.scoreBoardImage }
>
  <View
  style= {styles.scoreBoardView}
  >
  <Text
  style = { styles.scoreBoardText}
  >Score : </Text>
  <Text
  style= { styles.scoreBoardText}
  >{score}</Text>
</View>
</ImageBackground>

<Button title="Increment Score" onPress={handleScoreIncrement} />
    </View>
  )
}

export default ScoreBoard

const styles = StyleSheet.create({
    scoreBoardImage : {
        marginTop : 20,
        width : '80%',
        height : 70,
        alignSelf:'center',
        alignContent: 'center',
        justifyContent: 'center',
        justifySelf: 'center'
    },
    scoreBoardView : {
        alignSelf:'center',
     flexDirection: 'row',
     justifyContent: 'space-between',
     justifySelf: 'center'
    },
    scoreBoardText :{
        
            color: /* '#352F44' */'red',
           fontWeight: 'bold',
           fontSize:25,
         alignSelf: 'center',
         textAlign : 'center',
         marginRight: 5,
         textShadowColor: ' rgba(10, 10, 255, 0.7)' ,
         textShadowOffset: { width: 0, height: 0 },
         textShadowRadius: 10,
        
    }
})