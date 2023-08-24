import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import React ,{useEffect , useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { useScrollToTop } from '@react-navigation/native';

const EasyLevelsContainer = (/* {navigation} */) => {
  const navigation = useNavigation();

  const scrollViewRef = useRef(null);

  //useScrollToTop(ref);
  useEffect(() => {
    scrollViewRef.current.scrollTo({ x: 0, y: 40, animated: true });
  }, []);

  return (
    <View style = {styles.mainContainer }>
      <ScrollView
      ref={scrollViewRef}
      /*  initialScrollIndex={1}
       bounces = 'true'
        snapToAlignment={"start"}
        pagingEnabled = { true } */
        //ref={ref}
        //scrollTo ={{x: 0, y: 0, animated: true}}
        contentContainerStyle={{
          flex: 1,
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          marginBottom: 10,
          width: 400,
          
        }}
      >
        <View style = {styles.scrollContainer}>
        <Pressable onPress={()=>navigation.navigate("Easy_Level_1")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 1</Text>
          </View>
        </Pressable>

        <Pressable
         onPress={() => navigation.navigate("Easy_Level_2")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 2</Text>
          </View>
        </Pressable>

        <Pressable
         onPress={() => navigation.navigate("Easy_Level_3")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 3</Text>
          </View>
        </Pressable>

        <Pressable
         onPress={() => navigation.navigate("Easy_Level_4")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 4</Text>
          </View>
        </Pressable>

        <Pressable
         onPress={() => navigation.navigate("Easy_Level_5")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 5</Text>
          </View>
        </Pressable>

        <Pressable
         onPress={() => navigation.navigate("Easy_Level_6")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 6</Text>
          </View>
        </Pressable>

        <Pressable
         onPress={() => navigation.navigate("Easy_Level_7")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 7</Text>
          </View>
        </Pressable>

        <Pressable
         onPress={() => navigation.navigate("Easy_Level_8")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 8</Text>
          </View>
        </Pressable>

        <Pressable
         onPress={() => navigation.navigate("Easy_Level_9")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 9</Text>
          </View>
        </Pressable>

        <Pressable
         onPress={() => navigation.navigate("Easy_Level_10")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 10</Text>
          </View>
        </Pressable>

        <Pressable
         onPress={() => navigation.navigate("Easy_Level_11")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 11</Text>
          </View>
        </Pressable>

        <Pressable
         onPress={() => navigation.navigate("Easy_Level_12")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 12</Text>
          </View>
        </Pressable>

        <Pressable
         onPress={() => navigation.navigate("Easy_Level_13")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 13</Text>
          </View>
        </Pressable>

        <Pressable
         onPress={() => navigation.navigate("Easy_Level_14")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 14</Text>
          </View>
        </Pressable>

        <Pressable
         onPress={() => navigation.navigate("Easy_Level_15")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 15</Text>
          </View>
        </Pressable>

        <Pressable
         onPress={() => navigation.navigate("Easy_Level_16")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 16</Text>
          </View>
        </Pressable>

        <Pressable
         onPress={() => navigation.navigate("Easy_Level_17")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 17</Text>
          </View>
        </Pressable>

        <Pressable
         onPress={() => navigation.navigate("Easy_Level_18")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 18</Text>
          </View>
        </Pressable>

        <Pressable
         onPress={() => navigation.navigate("Easy_Level_19")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 19</Text>
          </View>
        </Pressable>

        <Pressable
         onPress={() => navigation.navigate("Easy_Level_20")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 20</Text>
          </View>
        </Pressable>

        <Pressable
         onPress={() => navigation.navigate("Easy_Level_21")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 21</Text>
          </View>
        </Pressable>

        <Pressable
         onPress={() => navigation.navigate("Easy_Level_22")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 22</Text>
          </View>
        </Pressable>

        <Pressable
         onPress={() => navigation.navigate("Easy_Level_23")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 23</Text>
          </View>
        </Pressable>

        <Pressable
         onPress={() => navigation.navigate("Easy_Level_24")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 24</Text>
          </View>
        </Pressable>

        <Pressable
         onPress={() => navigation.navigate("Easy_Level_25")}>
          <View style={styles.chocolateBar}>
            <Text style={styles.itemText}>Level 25</Text>
          </View>
        </Pressable>

        </View>

      </ScrollView>
    </View>
  );
};

export default EasyLevelsContainer;


const styles = StyleSheet.create({
    itemContainer: {
       // height: 70,
       // flex:1,
       // justifyContent: 'center',
        //alignContent: 'flex-start',
       // alignItems: 'center',
        //borderBottomWidth: 1,
       // borderColor: '#ccc',
       // marginBottom: 40 ,
         marginTop:20,
        marginBottom: 10 , 
      },
      scrollContainer : {
        backgrooundColor : 'blue',
        height: '60%'
      },
      chocolateBar: {
        marginTop:20,
        marginBottom: 10 , 
       // marginVertical: 5 ,
        backgroundColor: '#8B4513', // Chocolate brown color
        padding: 10,
        width: '100%',
       // borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 8,
        borderTopColor: '#D2691E', // Lighter shade for the top border
        borderLeftWidth: 4,
        borderLeftColor: '#D2693D',
        borderBottomWidth: 8,
        borderBottomColor: '#D2491E',
        borderRightWidth: 4,
        borderRightColor: '#D2791E',
        boxshadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color
        boxshadowOffset: { width: 0, height: 6 }, // Shadow offset
        boxshadowOpacity: 0.8, // Shadow opacity
        boxshadowRadius: 10, // Shadow radius
        elevation: 15, // Android shadow
        //flex:1
        gap :20,
       // marginTop:0
      },
      itemText: {
        fontSize: 20,
        color: 'white',
        fontWeight:'bold'
      },
      mainContainer :{
        height: '80%',
        flex:1,
        alignContent: 'flex-start',
        flexBasis: 'auto',
        //backgroundColor: 'red'
        marginTop: 30
      }
    });