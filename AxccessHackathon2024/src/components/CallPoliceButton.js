import React from "react";
import { SafeAreaView, Pressable, Text, StyleSheet } from "react-native";

const clickPoliceButton = () => {
    console.log('Pressed');
}

const CallPoliceButton = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <Pressable style={styles.callButton} onPress={clickPoliceButton}>
                <Text>Call 911</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    callButton: {
        backgroundColor: '#590D22',
        alignItems: 'center',
        paddingTop: 60,
        paddingBottom: 60,
        borderRadius: 70,
        marginHorizontal: 30

    },
})

export default CallPoliceButton;