import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

interface IHomeRowProps {
    item: string
}

const HomeRow = ({ item }: IHomeRowProps) => {
  return (
    <View style={styles.card} key={item}>
        <Image
            style={styles.tinyLogo}
            source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
        />
    <Text style={styles.cardText}>{item}</Text>
    </View>
  )
}

export default HomeRow

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        margin: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardText: {
        textTransform: 'capitalize',
        marginLeft: 16,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
})