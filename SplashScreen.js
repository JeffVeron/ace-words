import React, { useEffect } from 'react';
import { View, Image, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { Audio } from 'expo-av';
import { useNavigation } from '@react-navigation/native';


 
const imageSource = require('./assets/appName.png');
const soundSource = require('./assets/game-sounds/mixkit-quick-win-video-game-notification-269.wav');

const SplashScreen = () => {
  const scale = useSharedValue(1);
  const navigation = useNavigation();

  useEffect(() => {
    // Play the sound during the splash screen animation
    playSound();

    scale.value = withTiming(2, { duration: 2000 }, () => {
      runOnJS(navigateToHomeScreen)();
    });
  }, [scale]);

  const playSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(soundSource);
      await sound.playAsync();
    } catch (error) {
      console.log('Error playing sound:', error);
    }
  };

  const navigateToHomeScreen = () => {
    navigation.navigate('Home');
  };

  const imageStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={imageStyle}>
        <View
          style={{
            //position: 'absolute',
            flex: 4,
            paddingTop: 200,
            width: 'auto',
            height: 'auto',
            backgroundColor: 'black',
            alignContent: 'center',
            justifyContent: 'center',
            alignSelf: 'center'
          }}
        >
          <Image
            source={imageSource}
            style={{
              width: 100, height: 100, alignContent: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              marginLeft: 0
            }}
            resizeMode={'contain'}
          />
        </View>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
