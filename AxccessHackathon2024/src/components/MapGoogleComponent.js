import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Pressable, FlatList, SafeAreaView, Linking } from 'react-native';

const MapGoogleComponent = () => {
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when the component mounts
    listOfStores();
  }, []);

  const gData = {
    "includedTypes": ["drugstore", "hospital", "pharmacy"],
    "maxResultCount": 10,
    "locationRestriction": {
      "circle": {
        "center": {
          "latitude": 32.9872443,
          "longitude": -96.7498549
        },
        "radius": 5000.0
      }
    }
  };

  const listOfStores = () => {
    fetch("https://places.googleapis.com/v1/places:searchNearby", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": "AIzaSyBsog_Etw22pFy-UiWtR7vVTSRWbM3Rmt8",
        "X-Goog-FieldMask": "places.displayName,places.formattedAddress,places.location"
      },
      body: JSON.stringify(gData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setResponseData(data.places); // Assuming 'places' is an array in your API response
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error('Error:', error.message);
        setLoading(false); // Set loading to false if there is an error
      });
  };

  // Function to handle press on item
  const handlePress = (item) => {
    const { location } = item;
    const url = `http://maps.apple.com/?q=${location.latitude},${location.longitude}`;
    Linking.openURL(url);
  };

  // Render item for FlatList
  const renderItem = ({ item }) => {
    // Generating a fake distance in minutes
    const distanceInMinutes = Math.floor(Math.random() * 30) + 1; // Random number between 1 and 30

    return (
      <Pressable onPress={() => handlePress(item)}>
        <View style={styles.item}>
          <Text style={styles.text}>{item.displayName.text}</Text>
          <Text style={styles.text}>{item.formattedAddress}</Text>
          <Text style={styles.distance}>{distanceInMinutes} minutes away</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={responseData}
            keyExtractor={(item) => item.displayName.text}
            renderItem={renderItem}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    backgroundColor: "#C9184A",
    marginBottom: 5,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center', // Centering the content horizontally
  },
  text: {
    textAlign: 'center', // Centering the text horizontally
    color: 'white'
  },
  distance: {
    textAlign: 'center', // Centering the distance text horizontally
    marginTop: 20, // Adding margin at the top for spacing
    color: 'white'
  },
  listContainer: {
    flex: 1, // Allowing the list container to take up all available space
    marginBottom: 5,
  },
});

export default MapGoogleComponent;