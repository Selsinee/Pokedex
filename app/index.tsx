import FloatingActionButton from "@/components/FloatingActionButton";
import HomeRow from "@/components/HomeRow";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

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
          <HomeRow item={item}/>
        )}
      />
      <FloatingActionButton onPress={addPokemon}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
})