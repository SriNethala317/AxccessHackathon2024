import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import BottomNavBar from './src/components/BottomNavBar';

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
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
