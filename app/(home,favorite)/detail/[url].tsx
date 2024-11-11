import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DetailRow from '@/components/DetailRow';
import { Pokemon, usePokemonDetail } from '@/hooks/pokemonHooks';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useAppDispatch, useAppSelector } from '@/redux';
import { add, remove, selectFavorites } from '@/redux/favoriteSlice';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

type DetailParam = { url: string }

const Detail = () => {
  const { url } = useLocalSearchParams<DetailParam>();

  const { isLoading, error, detail } = usePokemonDetail(url);
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);
  const isFavorite = favorites.filter(f => f.url === url).length === 1;
  const pokemon: Pokemon = { name: detail?.name ?? "", url }

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                isFavorite ? dispatch(remove(pokemon)) : dispatch(add(pokemon))
              }
            >
              {isFavorite ? (
                <TabBarIcon name='heart' />
              ) : (
                <TabBarIcon name='heart-outline' />
              )}
            </TouchableOpacity>
          ),
          title: 'Detail',
        }}
      />
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : error ? (
        <Text>Error</Text>
      ) : detail && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            style={{
              height: Dimensions.get('screen').width,
              width: Dimensions.get('screen').width,
            }}
            source={{
              uri: detail.sprites.front_default,
            }}
          />
          <View style={styles.typeContainer}>
            {detail.types
              .map(type => type.type)
              .map(type => (
                <View
                  style={[
                    styles.typePill,
                  ]}
                  key={type.url}
                >
                  <Text>
                    {type.name}
                  </Text>
                </View>
              ))}
          </View>
          <View style={styles.container}>
            <View style={styles.separator} />
            <DetailRow title="Name" description={detail.name} />
            <View style={styles.separator} />
            <DetailRow title="Species" description={detail.species.name} />
            <View style={styles.separator} />
            <DetailRow title="Height" description={`${detail.height}`} />
            <View style={styles.separator} />
            <DetailRow title="Weight" description={`${detail.weight}`} />
            <View style={styles.separator} />
            <DetailRow
              title="BaseExperience"
              description={`${detail.base_experience}`}
            />
            <View style={styles.separator} />
            <Text
              style={styles.abilityTitle}
            >
              Abilities
            </Text>
            {detail.abilities.map(ability => (
              <View style={styles.abilityRow} key={ability.ability.url}>
                <Text
                  style={styles.abilityText}
                >
                  ○ {ability.ability.name}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default Detail;

const styles = StyleSheet.create({
  header: {
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#bbb',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerDark: {
    borderColor: '#fff',
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
  },
  headerTextDark: {
    color: 'white',
  },
  arrow: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  container: {
    padding: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#333',
    marginHorizontal: -8,
  },
  separatorDark: {
    backgroundColor: 'white',
  },
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  typePill: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 2,
    paddingHorizontal: 8,
    margin: 4,
  },
  typePillDark: {
    borderColor: 'white',
  },
  typePillTextDark: {
    color: 'white',
  },
  abilityTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  abilityTitleDark: {
    color: 'white',
  },
  abilityRow: {
    marginVertical: 4,
  },
  abilityText: {
    fontSize: 16,
    textTransform: 'capitalize',
  },
  abilityTextDark: {
    color: 'white',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
