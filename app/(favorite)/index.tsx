import { StyleSheet, Text } from "react-native";

const Favorite = () => {
  return (
    <Text style={styles.title}>Here all are my favorite pokemons!</Text>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  title: {
    margin: 16,
    fontSize: 20
  },
});
