import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView,StatusBar, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const { width } = Dimensions.get('window');

const Login = () => (
<View  style={{flex:1, backgroundColor:"red", alignItems: "center", justifyContent : "center"}}>
 <Text >Login ---  </Text>
</View>
);


const SignUp = () => (
  <View   style={{flex:1, backgroundColor:"red", alignItems: "center", justifyContent : "center"}}>
    <Text>SignUp --- </Text>
  </View>
);


export default function CarLoan() {


 const handleButtonPress = (buttonName) => {
    alert(`Button ${buttonName} clicked!`);
  };

  const Tab = createMaterialTopTabNavigator();

  return (
   <SafeAreaView style={styles.container}>

  <StatusBar   barStyle="light-content"   backgroundColor="#3b3a38"/>
    <Tab.Navigator>
        <Tab.Screen name="Login" component={Login}/>
        <Tab.Screen name="SignUp" component={SignUp}/>
    </Tab.Navigator>
 </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
     flexGrow: 1,
        backgroundColor: 'black',
    },

      titleContainer: {
        width: '100%',
        padding: 20,
        alignItems: 'left',
        backgroundColor: '#3b3a38',
        borderBottomColor: 'white',
      },

       section: {
          marginBottom: 16,
        },
        sectionTitle: {
          color: 'white',
          fontSize: 22,
          fontWeight: 'bold',
          marginBottom: 16,
          textAlign: 'center'
        },
      title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },

     scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingHorizontal: 10,

                paddingTop: 10
      },

     TopScrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
      },
    button: {
      flexDirection: 'row',
      backgroundColor: '#3b3a38',
      padding: 10,
      margin: 2,
      borderRadius: 8,
      alignItems: 'center',
      borderWidth: 0.6
    },
    innerText: {
      color: '#bcbec2',
      fontSize: 18,
      backgroundColor: '#4168a6',
      fontWeight: 'bold',
      marginRight: 15,
      borderWidth: 0.0,
      textAlign: 'center',
      width: 60,
     // borderColor: 'white', // Border color
      padding: 5,
      borderRadius: 8,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
//      fontWeight: 'bold',
    },
});
