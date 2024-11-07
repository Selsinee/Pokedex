import { Pokemon, usePokemonSprite } from '@/hooks/pokemonHooks'
import React from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'

interface IHomeRowProps {
    item: Pokemon
}

const HomeRow = ({ item }: IHomeRowProps) => {
    const { error, isLoading, sprite} = usePokemonSprite(item.url)

    return (
        <View style={styles.card} key={item.name}>
            {
                isLoading ? (
                    <ActivityIndicator style={styles.tinyLogo}/>
                ) : error ? (
                    <Text>Error</Text>
                ) : sprite && (
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: sprite
                        }}
                    />
                )
            }
            
        <Text style={styles.cardText}>{item.name}</Text>
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