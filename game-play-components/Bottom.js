import { View, 
  Text ,
  StyleSheet ,
  Dimensions , 
   Pressable , 
   Image,
   ImageBackground } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get("window").width;
const Bottom = ( ) => {

  const navigation = useNavigation();

  return (
    <View>
         {/* the footer  */}
        <View
          style={{
            marginTop: 770,
            marginRight : 4,
            height: 'auto',
            padding: 10,
            width: /* windowWidth 380 */ windowWidth,
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
  )
}

export default Bottom

const styles = StyleSheet.create({
  footerItem: {

    height: 40,
    width: 50,
    alignItems: 'center'
    // marginRight: 10,

  },
  footerText: {
    color: 'white',
    fontSize: 'large',
    fontWeight: 'bold',
    fontStyle: 'italic',
    paddingRight: 5
  }
})