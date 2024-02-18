import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const BottomNavBar = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.navContainer}>
        <Entypo name="star" size={40} color="#C9184A" />
        <MaterialCommunityIcons name="chart-line-stacked" size={40} color="#5A1327" />
        <Fontisto name="smiley" size={40} color="#5A1327" />

        
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  navContainer: {
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF0F3',
    borderRadius: 40,
    marginHorizontal: 10,
    marginBottom: 10,
  }
});

export default BottomNavBar;