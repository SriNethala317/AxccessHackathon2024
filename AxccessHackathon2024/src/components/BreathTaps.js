import React, { useState, useEffect } from "react";
import { SafeAreaView, Pressable, Text, StyleSheet } from "react-native";

const BreathTaps = () => {
    const [clickCounter, setClickCounter] = useState(0);
    const [timer, setTimer] = useState(30);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    useEffect(() => {
        let interval;

        if (isTimerRunning && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsTimerRunning(false);
        }

        return () => clearInterval(interval);
    }, [timer, isTimerRunning]);

    const handleTap = () => {
        setClickCounter(clickCounter + 1);
    };

    const toggleTimer = () => {
        if (isTimerRunning) {
            setIsTimerRunning(false);
            setTimer(30);
        } else {
            setIsTimerRunning(true);
        }
    };

    const calculateBPM = () => {
        const totalTimeElapsed = 30 - timer; // Total time elapsed in seconds
        const bpm = Math.round((clickCounter * 60) / totalTimeElapsed); // Calculate BPM
        return bpm;
    };

    return (
        <SafeAreaView style={styles.wrapper}>
            <Text style={styles.time}>Time Remaining: {timer} seconds</Text>
            <Pressable style={styles.counterButton} onPress={handleTap} disabled={!isTimerRunning}>
                <Text style={styles.innerText}>TAP!</Text>
            </Pressable>
            <Text style={styles.counterText}>Breaths Counted: {clickCounter}</Text>
            <Pressable style={styles.timerControlButton} onPress={toggleTimer}>
                <Text style={styles.timerText}>{isTimerRunning ? 'Stop Timer' : 'Start/Restart Timer'}</Text>
            </Pressable>
            {!isTimerRunning && timer === 0 && (
                <Text style={styles.bpmText}>Breaths Per Minute: {calculateBPM()}</Text>
            )}
            <Text style={styles.instructions}>Instructions: Tap the button as many times as the person takes a breath within 30 seconds.</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFB3C1"
    },
    counterButton: {
        backgroundColor: '#F8305F',
        alignItems: 'center',
        borderRadius: 100,
        width: 200,
        height: 200,
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 20,
    },
    innerText: {
        color:'#fff',
        userSelect:'none',
        fontWeight: 'bold',
    },
    counterText: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        userSelect:'none'
    },
    timerControlButton: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#000',
        borderRadius: 5,
        borderRadius: 10,
    },
    instructions: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30,
    },
    time:{
        fontWeight: 'bold',
        fontSize: 30,
    },

    timerText:{
        color: '#fff',
        fontWeight: 'bold',
    },

    bpmText: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
    }
});

export default BreathTaps;
