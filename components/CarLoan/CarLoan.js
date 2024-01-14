import React, { useState, useRef, useEffect  } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {

            StyleSheet, Dimensions,
            ScrollView,StatusBar,
            SafeAreaView, TextInput, Text
        }
from 'react-native';
import styles from './css/styles';
import INPUT from './Input.js';
import REPORT from './Report.js';
import GRAPH from './Graph.js';

const { width } = Dimensions.get('window');

export default function HomeLoan() {

  const Tab = createMaterialTopTabNavigator();
  return (

 <SafeAreaView style={styles.container}>
  <StatusBar   barStyle="light-content"   backgroundColor="#3b3a38"/>


 <Tab.Navigator
 screenOptions={{
    tabBarStyle: { backgroundColor: '#3b3a38' },
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: '#8a8a87'

  }}
                    >

    <Tab.Screen name="INPUT" component={INPUT}
    />
    <Tab.Screen name="REPORT" component={REPORT}/>
    <Tab.Screen name="GRAPH" component={GRAPH}/>
    </Tab.Navigator>
       </SafeAreaView>
  );
}

