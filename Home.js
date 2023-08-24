import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
  Text, 
  View, 
  Image, 
  ImageBackground ,
  Dimensions ,
  Pressable
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
 import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Easy from './game-difficulty-level/Easy' 

const Stack = createNativeStackNavigator();

export default function Home({navigation}) {

  const logo = require('./assets/appName.png');
  const playImage = require('./assets/game-images/arrow.jpg');
  const difficultyBackgroundImage = require('./assets/game-images/a.jpg');
  const varietyImage = require('./assets/game-images/board.jpg');
  const background = require('./assets/game-images/black-back.jpg')


  const { height, width } = Dimensions.get('window');

  return (
    <ImageBackground
    source={background}
    resizeMode='cover'
    style={{
     height :height,
      width: width, 
      flex: 1,
      display: 'flex',
      alignSelf: 'center'
    }}
  >
    <View style={styles.container} >
      {/* <StatusBar style="auto" /> */}
    
        <Image
          source={logo}
          style={{
            width: 300,
            marginTop: 20,
            margintBottom: 20,
            height: 120,

          }}
          //resizeMode="cover"
          resizeMode={'contain'}
        />

        <ImageBackground
          source={playImage}
          style={{
            width: 150,
            height: 50,
            margintBottom: '10%'
          }}

          resizeMode={'contain'}
        >
          <Text style={{
            color: 'yellow',
            fontSize: 'large',
            fontWeight: 'bold',
            alignSelf: 'center',
            justifySelf: 'center',
            marginTop: '10%'
          }}  > Play</Text>
        </ImageBackground>

        <View
          style={styles.difficultyContainerStyles}
        >

          <Pressable
          onPress={() => navigation.navigate('Easy')}
          >
          <ImageBackground
            source={difficultyBackgroundImage}
            style={[styles.difficultyLevelCard, { marginRight: 15 }]}
            resizeMode="cover"
            

          >
            <Text style={styles.centeredText}>Easy</Text>
          </ImageBackground>
          </Pressable>



 <Pressable
          onPress={() => navigation.navigate('Normal')}
          >
          <ImageBackground
            source={difficultyBackgroundImage}
            style={styles.difficultyLevelCard}
            resizeMode="cover"

          >
            <Text style={styles.centeredText}>Normal</Text>
          </ImageBackground>
</Pressable>
        </View>




        <View
          style={styles.difficultyContainerStyles}
        >
           <Pressable
          onPress={() => navigation.navigate('Hard')}
          >
          <ImageBackground
            source={difficultyBackgroundImage}
            style={[styles.difficultyLevelCard, { marginRight: 15 }]}
            resizeMode="cover"
          //resizeMode={'contain'}
          >
            <Text style={styles.centeredText}>Hard</Text>
          </ImageBackground>
          </Pressable>


          <Pressable
          onPress={() => navigation.navigate('Extreme')}
          >
          <ImageBackground
            source={difficultyBackgroundImage}
            style={styles.difficultyLevelCard}
            resizeMode="cover"

          >
            <Text style={styles.centeredText}>Extreme</Text>
          </ImageBackground>
          </Pressable>
        </View>

        <Pressable
          onPress={() => navigation.navigate('Variety')}
          >
        <ImageBackground
          source={varietyImage}
          style={{
            marginTop: 10,
            width: 200,
            height: 80,
          }}
          resizeMode='cover'
        >
          <Text style={{
            alignItems: 'center',
            alignSelf: 'center',
            color: 'yellow',
            marginTop: '15%',
            fontSize: 25,
            fontWeight: "bold"
          }
          }>Variety</Text>
        </ImageBackground>
        </Pressable>

        {/* the footer  */}
        <View
          style={{
            height: 'auto',
            width: 380,
            marginTop: 10,
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            color: 'white',
            fontWeight: 'bold',

          }}
        >

            <Pressable
          onPress={() => navigation.navigate('Settings')}
          >
          <View
            style={styles.footerItem}
          >
            <Ionicons name="ios-settings" size={30} color="yellow" />
            <Text
              style={styles.footerText}
            >Settings</Text>
          </View>
</Pressable>

  <Pressable
          onPress={() => navigation.navigate('Shop')}
          > 
          <View
            style={styles.footerItem}
          >
            <Feather name="shopping-bag" size={30} color="yellow" />
            <Text
              style={styles.footerText}
            >Shop</Text>
          </View>
          </Pressable>

  <Pressable
          onPress={() => navigation.navigate('Variety')}
          > 
          <View
            style={styles.footerItem}
          >
            <Entypo name="help-with-circle" size={30} color="yellow" />
            <Text
              style={styles.footerText}
            >Help</Text>
          </View>
</Pressable>

  <Pressable
          onPress={() => navigation.navigate('Variety')}
          > 
          <View
            style={styles.footerItem}
          >
            <MaterialCommunityIcons name="weather-night" size={30} color="yellow" />
            <Text
              style={styles.footerText}
            >Daily</Text>
          </View>
          </Pressable>

        </View>
     
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'blue',
     flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredText: {
    alignItems: 'center',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    width: 'auto',
    height: 'auto',
    color: 'yellow',
    marginTop: '35%',
    fontSize: 25,
    fontWeight: "bold"
  },

  difficultyContainerStyles: {
    display: 'flex',
    flexDirection: 'row',
    // marginTop: 15,
    width: 350,
    height: 150
  },
  difficultyLevelCard: {
    marginTop: 10,
    width: 160,
    height: 130,
    margin: 5,
    marginBottom: 10,

  },
  footerItem: {

    height: 40,
    width: 50,
    alignItems: 'center'
    // marginRight: 10,

  },
  footerText: {
    color: 'yellow',
    fontSize: 'large',
    fontWeight: 'bold',
    fontStyle: 'italic'
  }

});