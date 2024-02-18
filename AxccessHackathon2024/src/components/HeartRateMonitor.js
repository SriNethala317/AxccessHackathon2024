import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

const HeartRateMonitor = () => {
  const [heartRate, setHeartRate] = useState(0);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);

  const generateRandomHeartRate = (previousHeartRate) => {
    // Calculate the next heart rate based on the previous heart rate
    // Add a random deviation to the previous heart rate to make it erratic
    const minDeviation = -5;
    const maxDeviation = 5;
    const deviation = Math.floor(Math.random() * (maxDeviation - minDeviation + 1)) + minDeviation;
    const nextHeartRate = previousHeartRate + deviation;

    // Ensure the heart rate stays within the range of 60 to 100 BPM
    return Math.min(Math.max(nextHeartRate, 60), 100);
  };

  useEffect(() => {
    let intervalId;
    // Start monitoring when isMonitoring is true
    if (isMonitoring) {
      // Interval to update heart rate every 2 seconds (for demonstration)
      intervalId = setInterval(() => {
        setHeartRate(previousHeartRate => generateRandomHeartRate(previousHeartRate));
      }, 2000);

      // Stop monitoring after 30 seconds
      setTimeout(() => {
        stopMonitoring();
      }, 30000);
    } else {
      // Clear interval when monitoring is stopped
      clearInterval(intervalId);
      setHeartRate(0); // Reset heart rate
    }

    // Clean up function to clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [isMonitoring]);

  const startMonitoring = () => {
    setIsMonitoring(true);
  };

  const stopMonitoring = () => {
    setIsMonitoring(false);
  };

  const handleCameraStream = (data) => {
    // Process camera data here if needed
  };

  const toggleCameraType = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={cameraType}
        ref={cameraRef}
        onBarCodeScanned={handleCameraStream}
      />
      <View style={styles.statsContainer}>
        <Text style={styles.heartRateText}>{heartRate} BPM</Text>
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={toggleCameraType}
        >
          <Ionicons name="camera-reverse" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={isMonitoring ? stopMonitoring : startMonitoring}
      >
        <Text style={styles.buttonText}>{isMonitoring ? 'Stop' : 'Start'} Monitoring</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  camera: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
  },
  statsContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartRateText: {
    fontSize: 40,
    color: 'white',
    marginLeft: 10,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  toggleButton: {
    marginLeft: 10,
  },
});

export default HeartRateMonitor;
