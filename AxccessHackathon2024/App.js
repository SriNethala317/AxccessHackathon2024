import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import BottomNavBar from './src/components/BottomNavBar';
import CallPoliceButton from './src/components/CallPoliceButton';

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <CallPoliceButton />
      <BottomNavBar />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFB3C1',
  },
})

export default App;
