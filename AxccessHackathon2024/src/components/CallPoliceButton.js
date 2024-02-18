import React from "react";
import { SafeAreaView, Pressable, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";

const clickPoliceButton = () => {
        // The phone number you want to dial
        const phoneNumber = '8482035522'; // Replace with the desired phone number

        // Use Linking to open the phone's dialer
        Linking.openURL(`tel:${phoneNumber}`);
}

const CallPoliceButton = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <Pressable style={styles.callButton} onPress={clickPoliceButton}>
                <Text style={styles.innerText}>CALL 911</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center"
    },
    callButton: {
        backgroundColor: '#590D22',
        alignItems: 'center',
        borderRadius: 70,
        width: 300,
        height: 200,
        justifyContent: 'center',
        textAlign: 'center',
    },
    innerText: {
        color:'#fff',
        fontWeight: "bold",
        fontSize: 60,
    }
})

export default CallPoliceButton;