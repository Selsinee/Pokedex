import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IFABProps{
    onPress: () => void;
}

const FloatingActionButton = ({ onPress}: IFABProps) => {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
        <Text style={styles.fabText}>+</Text>
    </TouchableOpacity>
  )
}

export default FloatingActionButton

const styles = StyleSheet.create({
    fab: { 
        position: 'absolute', 
        right: 16, 
        bottom: 16, 
        backgroundColor: 'red', 
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
      fabText: { 
        fontSize: 30, 
        color: 'white'
    }
})