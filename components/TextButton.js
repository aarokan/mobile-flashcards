import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { white, purple } from '../utils/colors'

export default function TextButton({ children, onPress }) {
    return (
        <TouchableOpacity
            style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn} 
            onPress={onPress}>
            <Text style={styles.submitBtnText}>{ children }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iosSubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
    },
    androidSubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 2,
        height: 45,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitBtnText: {
        textAlign: 'center',
        color: white,
        fontSize: 22,
        
    }
})