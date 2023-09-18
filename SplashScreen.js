import React, { useEffect } from 'react';
import { View, Image, useWindowDimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { Audio } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
//import * as Sentry from "@sentry/react-native";
//import { ErrorBoundary} from "@sentry/react-native";

 
/* Sentry.init({
  dsn: 'https://cfd702a865ab822c572a62690cd1cf79@o4505890008596480.ingest.sentry.io/4505890013380608',
  enableInExpoDevelopment: true,
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});
 */
const imageSource = require('./assets/appName.png');
//const soundSource = require('./assets/game-sounds/mixkit-quick-win-video-game-notification-269.wav');

const SplashScreen = () => {
  const { height, width } = useWindowDimensions()
  const scale = useSharedValue(1);
  const navigation = useNavigation();

  useEffect(() => {
    // Play the sound during the splash screen animation
    //playSound();  //not ready yet

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
      transform: `scale(${scale.value})`,
    };
  });
/* try { */
  return (
    
      
    <View style={{ flex: 1 }}>
      <Animated.View style={imageStyle}>
        <View
          style={{
           
            flex: 4,
            paddingTop: 200,
            width: width,
            height: height,
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
/* } catch (error) {
  Sentry.Native.captureException(error);
} */
};

export default SplashScreen;
