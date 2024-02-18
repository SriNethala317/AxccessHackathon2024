import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapComponent from './src/components/mapComponent';
import { Ionicons } from '@expo/vector-icons';
import BottomNavBar from './src/components/BottomNavBar';
import CallPoliceButton from './src/components/CallPoliceButton';


// Define your screen components
function Identify() {
  return (
    <View style={styles.navContainer}>
      <CallPoliceButton />
    </View>
  );
}

function Info() {
  return (
    <View style={styles.navContainer}>
      <Text>Info</Text>
    </View>
  );
}

function Pharmacy() {
  return (
    <View style={styles.navContainer}>
      <Text>Pharmacy</Text>
    </View>
  );
}

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

// Main App component
export default function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ 
        headerShown: false
      }}
      >
    <Tab.Screen
    name="Identify"
    component={Identify}
    options={{
      tabBarLabel:"Identify",
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="search-outline" size={size} color={color} />
      ),
    }}
  />
        <Tab.Screen 
        name="Info" component={Info} 
        options={
          {
            tabBarLabel:"Info",
            tabBarIcon: ({color, size}) => (
              <Ionicons name="information-outline" size={size} color={color} />
            ),
          }
        }
        />
        <Tab.Screen name="Pharmacy" component={Pharmacy} 
        options={
          {
           tabBarLabel:"Pharmacy",
           tabBarIcon: ({color, size}) => (
            <Ionicons name="locate-outline" size={size} color={color} />
           ), 
          }
        }
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flex: 1,
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    backgroundColor: '#FFB3C1',
  },
});
