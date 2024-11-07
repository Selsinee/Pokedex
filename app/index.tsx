import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [data, setData] = useState([
    'bulbasaur',
    'ivysaur',
    'venusaur',
    'charmander',
    'charmeleon',
    'charizard',
    'squirtle',
    'wartortle',
    'blastoise',
    'caterpie',
    'metapod',
  ])

  const addPokemon = () => {
    setData((prev) => [...prev, 'raticate'])
  }
  
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.card} key={item}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <Text style={styles.cardText}>{item}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.fab} onPress={addPokemon}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
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
