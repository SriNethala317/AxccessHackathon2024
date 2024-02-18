import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapGoogleComponent from './src/components/MapGoogleComponent';
import { Ionicons } from '@expo/vector-icons';
import CallPoliceButton from './src/components/CallPoliceButton';
import BreathTaps from './src/components/BreathTaps';
import HeartRateMonitor from './src/components/HeartRateMonitor';

function Identify({ navigation }) {
  const [taskCompleted, setTaskCompleted] = useState(false);

  const handleTaskCompletion = () => {
    setTaskCompleted(true);
    // If you want to switch immediately after the task is completed
    // navigation.navigate('BreathTaps');
  };

  return (
    <View style={styles.navContainer}>
      {taskCompleted && <Text>Task Completed!</Text>}
      <CallPoliceButton onPress={handleTaskCompletion} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#C9184A',
          inactiveTintColor: 'gray',
          activeBackgroundColor: 'black',
          style: {
            backgroundColor: '#FFB3C1',
          },
          labelStyle: {
            fontWeight: 'bold',
            fontSize: 16,
          },
          tabStyle: {
            justifyContent: 'center',
          },
        }}
      >
        <Tab.Screen
          name="Identify"
          component={Identify}
          options={{
            headerShown: false,
            tabBarLabel: 'Identify',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="BreathTaps"
          component={BreathTaps}
          options={{
            headerShown: false,
            tabBarLabel: 'Breath Taps',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="HeartRateMonitor"
          component={HeartRateMonitor}
          options={{
            headerShown: false,
            tabBarLabel: 'Heart Rate Monitor',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="pulse-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C9184A',
  },
});
