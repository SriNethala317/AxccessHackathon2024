import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import BottomNavBar from './src/components/BottomNavBar';
import CallPoliceButton from './src/components/CallPoliceButton';
import React from 'react';

function Screen1() {
  return (
    <View style={styles.wrapper}>
      <Text>Screen 1</Text>
    </View>
  );
}

function Screen2() {
  return (
    <View style={styles.wrapper}>
      <Text>Screen 2</Text>
    </View>
  );
}

function Screen3() {
  return (
    <View style={styles.wrapper}>
      <Text>Screen 3</Text>
    </View>
  );
}

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Screen1" component={Screen1} />
        <Tab.Screen name="Screen2" component={Screen2} />
        <Tab.Screen name="Screen3" component={Screen3} />
      </Tab.Navigator>
    </NavigationContainer>
  );


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFB3C1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
