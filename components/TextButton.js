import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { purple, gray } from '../utils/colors'

export default function TextButton({ children, onPress, style = {} }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.btn, style]}>{ children }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        textAlign: 'center',
        color: purple,
        backgroundColor: gray,
    }
})