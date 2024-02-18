import React from "react";
import { SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";

const clickPoliceButton = () => {
    console.log('Pressed');
}

const CallPoliceButton = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <TouchableOpacity style={styles.callButton} onPress={clickPoliceButton}>
                <Text>Call 911</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: '95',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    callButton: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: 'blue',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default CallPoliceButton;