import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { useFonts, Homenaje_400Regular } from "@expo-google-fonts/dev";

const BottomNavBar = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.navContainer}>
        <View style={styles.tabGroup}>
          <Entypo name="star" size={40} color="#C9184A" />
          <Text style={styles.tabText}>Quick View</Text>
        </View>
        <View style={styles.tabGroup}>
          <MaterialCommunityIcons name="chart-line-stacked" size={40} color="#5A1327" />  
          <Text style={styles.tabText}>Chart View</Text>
        </View>
        <View style={styles.tabGroup}>
          <Fontisto name="smiley" size={40} color="#5A1327" />
          <Text style={styles.tabText}>Help</Text>  
        </View>
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
  },
  tabGroup: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tabText: {
    paddingTop: 3,
    fontFamily: 'Homenaje_400Regular'
  }
});

export default BottomNavBar;