import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisodes } from '../redux/episodesSlice';
import Pagination from './Pagination';

const EpisodesList = ({ navigation }) => {
  const dispatch = useDispatch();
  const episodes = useSelector(state => state.episodes.list);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchEpisodes(page));
  }, [page]);

  return (
    <View>
      <FlatList
        data={episodes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('EpisodeDetail', { episode: item })}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Pagination page={page} setPage={setPage} />
    </View>
  );
};

export default EpisodesList;
