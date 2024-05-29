import React from 'react';
import { View, Text, Button, FlatList, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../redux/favoritesSlice';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.list);
  const characters = useSelector(state => state.characters.all);

  const handleRemove = (id) => {
    Alert.alert(
      "Remove Favorite",
      `Are you sure you want to remove this character from favorites?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Yes", onPress: () => dispatch(removeFavorite(id)) }
      ]
    );
  };

  return (
    <View>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => {
          const character = characters.find(char => char.id === item);
          return (
            <View>
              <Text>{character.name}</Text>
              <Button title="Remove" onPress={() => handleRemove(character.id)} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Favorites;
