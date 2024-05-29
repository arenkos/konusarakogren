import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacterDetail, toggleFavorite } from '../redux/charactersSlice';

const CharacterDetail = ({ route }) => {
  const { url } = route.params;
  const dispatch = useDispatch();
  const character = useSelector(state => state.characters.detail);
  const isFavorite = useSelector(state => state.favorites.list).includes(character.id);

  useEffect(() => {
    dispatch(fetchCharacterDetail(url));
  }, [url]);

  return (
    <View>
      <Text>{character.name}</Text>
      <Text>{character.status}</Text>
      <Text>{character.species}</Text>
      <Button title={isFavorite ? "Remove from Favorites" : "Add to Favorites"} onPress={() => dispatch(toggleFavorite(character.id))} />
    </View>
  );
};

export default CharacterDetail;
