import HomeRow from "@/components/HomeRow";
import { useAppSelector } from "@/redux";
import { selectFavorites } from "@/redux/favoriteSlice";
import { FlatList, StyleSheet, Text } from "react-native";

const Favorite = () => {
  const favorites = useAppSelector(selectFavorites);
  return (
    <>
      <Text style={styles.title}>Here all are my favorite pokemons!</Text>
        <FlatList
          data={favorites}
          renderItem={({ item }) => (
            <HomeRow item={item}/>
          )}
        />
    </>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  title: {
    margin: 16,
    fontSize: 20
  },
});
