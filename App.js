import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { useWindowuseWindowDimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./SplashScreen";
import Home from "./Home";
import Easy from "./game-difficulty-level/Easy";
import Normal from "./game-difficulty-level/Normal";
import Hard from "./game-difficulty-level/Hard";
import Extreme from "./game-difficulty-level/Extreme";
import Variety from "./game-difficulty-level/Variety";

import Daily from "./game-options/Daily";
import Help from "./game-options/Help";
import Settings from "./game-options/Settings";
import Shop from "./game-options/Shop";
import { FontAwesome } from "@expo/vector-icons";
import BeginnerScreen from "./skillLevels/BeginnerScreen";
import MediumScreen from "./skillLevels/MediumScreen";
import AdvancedScreen from "./skillLevels/AdvancedScreen";
import TalentedScreen from "./skillLevels/TalentedScreen";
import SkillfulScreen from "./skillLevels/SkillfulScreen";
import VeteranScreen from "./skillLevels/VeteranScreen";
import ExpertScreen from "./skillLevels/VeteranScreen";
import MasterScreen from "./skillLevels/MasterScreen";
import DetailScreen from "./DetailScreen";
import EasyLevel1 from "./game-levels/EasyLevel1";
import EasyLevel2 from "./game-levels/EasyLevel2";
import EasyLevel3 from "./game-levels/EasyLevel3";
import EasyLevel4 from "./game-levels/EasyLevel4";
import EasyLevel5 from "./game-levels/EasyLevel5";
import EasyLevel6 from "./game-levels/EasyLevel6";
import EasyLevel7 from "./game-levels/EasyLevel7";
import EasyLevel8 from "./game-levels/EasyLevel8";
import EasyLevel9 from "./game-levels/EasyLevel10";
import EasyLevel10 from "./game-levels/EasyLevel10";
import EasyLevel11 from "./game-levels/EasyLevel11";
import EasyLevel12 from "./game-levels/EasyLevel12";
import EasyLevel13 from "./game-levels/EasyLevel13";
import EasyLevel14 from "./game-levels/EasyLevel14";
import EasyLevel15 from "./game-levels/EasyLevel15";
import EasyLevel16 from "./game-levels/EasyLevel16";
import EasyLevel17 from "./game-levels/EasyLevel17";
import EasyLevel18 from "./game-levels/EasyLevel18";
import EasyLevel19 from "./game-levels/EasyLevel19";
import EasyLevel20 from "./game-levels/EasyLevel20";
import EasyLevel21 from "./game-levels/EasyLevel21";
import EasyLevel22 from "./game-levels/EasyLevel22";
import EasyLevel23 from "./game-levels/EasyLevel23";
import EasyLevel24 from "./game-levels/EasyLevel24";
import EasyLevel25 from "./game-levels/EasyLevel25";
import ModalScreen from "./ModalScreen";

//import * as Sentry from 'sentry-expo';
//import { ErrorBoundary } from '@sentry/react-native';
//import * as Sentry from "@sentry/react";


// SENTRY TOKEN =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
/* Sentry.init({
  dsn: 'https://cfd702a865ab822c572a62690cd1cf79@o4505890008596480.ingest.sentry.io/4505890013380608',
  enableInExpoDevelopment: true,
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
}); */

const Stack = createNativeStackNavigator();

const App = () => {
  const { height, width } = useWindowDimensions();

  const BackIcon = () => {
    return <FontAwesome name="arrow-circle-left" size={24} color="white" />;
  };

 /*  try{ */
  return (
    
     
      <View
      style={{
        flex: 1,
        //backgroundColor: "black",
        alignItems: "center",
        alignSelf: "center",
        justifySelf: "center",
        justifyContent: "center",
        height: height,
        width: width,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
            cardStyle: { flex: 1 },
          }}
        >
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />

          <Stack.Screen name="Easy" component={Easy} />

          <Stack.Screen name="Normal" component={Normal} />

          <Stack.Screen name="Hard" component={Hard} />
          <Stack.Screen name="Extreme" component={Extreme} />

          <Stack.Screen name="Variety" component={Variety} />

          <Stack.Screen
            name="Daily"
            component={Daily}
            options={{ headerShown: true }}
          />
          
          <Stack.Screen
            name="Help"
             component = {Help}
            options={{ headerShown: true }}
          />

          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: true }}
          />

          <Stack.Screen
            name="Shop"
            component={Shop}
            options={{ headerShown: true }}
          />

          {/* the navigation to the skillLevel components */}

          <Stack.Screen name="BEGINNER" component={BeginnerScreen} />
          <Stack.Screen name="MEDIUM" component={MediumScreen} />
          <Stack.Screen name="ADVANCED" component={AdvancedScreen} />
          <Stack.Screen name="TALENTED" component={TalentedScreen} />
          <Stack.Screen name="SKILLFUL" component={SkillfulScreen} />
          <Stack.Screen name="VETERAN" component={VeteranScreen} />
          <Stack.Screen name="EXPERT" component={ExpertScreen} />
          <Stack.Screen name="MASTER" component={MasterScreen} />

          <Stack.Screen name="DetailScreen" component={DetailScreen} />

          {/* create the levels of each difficulty */}
          <Stack.Screen name="Easy_Level_1" component={EasyLevel1} />
          <Stack.Screen
            name="Modal"
            component={ModalScreen}
            options={{ presentation: "transparentModal" }}
          />
          <Stack.Screen name="Easy_Level_2" component={EasyLevel2} />
          {/* <Stack.Screen name="Easy_Level_2" component={EasyLevel2} />
          <Stack.Screen name="Easy_Level_2" component={EasyLevel2} /> */}

          <Stack.Screen name="Easy_Level_3" component={EasyLevel3} />
          <Stack.Screen name="Easy_Level_4" component={EasyLevel4} />
          <Stack.Screen name="Easy_Level_5" component={EasyLevel5} />
          <Stack.Screen name="Easy_Level_6" component={EasyLevel6} />
          <Stack.Screen name="Easy_Level_7" component={EasyLevel7} />
          <Stack.Screen name="Easy_Level_8" component={EasyLevel8} />
          <Stack.Screen name="Easy_Level_9" component={EasyLevel9} />
          <Stack.Screen name="Easy_Level_10" component={EasyLevel10} />
          <Stack.Screen name="Easy_Level_11" component={EasyLevel11} />
          <Stack.Screen name="Easy_Level_12" component={EasyLevel12} />
          <Stack.Screen name="Easy_Level_13" component={EasyLevel13} />
          <Stack.Screen name="Easy_Level_14" component={EasyLevel14} />
          <Stack.Screen name="Easy_Level_15" component={EasyLevel15} />
          <Stack.Screen name="Easy_Level_16" component={EasyLevel16} />
          <Stack.Screen name="Easy_Level_17" component={EasyLevel17} />
          <Stack.Screen name="Easy_Level_18" component={EasyLevel18} />
          <Stack.Screen name="Easy_Level_19" component={EasyLevel19} />
          <Stack.Screen name="Easy_Level_20" component={EasyLevel20} />
          <Stack.Screen name="Easy_Level_21" component={EasyLevel21} />
          <Stack.Screen name="Easy_Level_22" component={EasyLevel22} />
          <Stack.Screen name="Easy_Level_23" component={EasyLevel23} />
          <Stack.Screen name="Easy_Level_24" component={EasyLevel24} />
          <Stack.Screen name="Easy_Level_25" component={EasyLevel25} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
      

   

  );
/* } catch (error) {
  Sentry.Native.captureException(error);
} */
};

 
export default App;