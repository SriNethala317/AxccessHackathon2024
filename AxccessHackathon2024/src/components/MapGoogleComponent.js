import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Pressable, FlatList, SafeAreaView } from 'react-native';

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
        "X-Goog-FieldMask": "places.displayName,places.formattedAddress"
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

  // Render item for FlatList
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.displayName.text}</Text>
      <Text>{item.formattedAddress}</Text>
    </View>
  );

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
    backgroundColor: "#F8305F",
    marginBottom: 5,
    borderRadius: 10
  },
  listContainer: {
    
  }

});

export default MapGoogleComponent;
