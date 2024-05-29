import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisodeDetail } from '../redux/episodesSlice';

const EpisodeDetail = ({ route, navigation }) => {
  const { episode } = route.params;
  const dispatch = useDispatch();
  const details = useSelector(state => state.episodes.detail);

  useEffect(() => {
    dispatch(fetchEpisodeDetail(episode.id));
  }, [episode.id]);

  return (
    <View>
      <Text>{details.name}</Text>
      <Text>{details.air_date}</Text>
      <Text>{details.episode}</Text>
      <FlatList
        data={details.characters}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('CharacterDetail', { url: item })}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default EpisodeDetail;
