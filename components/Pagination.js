import React from 'react';
import { View, Button } from 'react-native';

const Pagination = ({ page, setPage }) => {
  return (
    <View>
      <Button title="Previous" onPress={() => setPage(page > 1 ? page - 1 : 1)} disabled={page === 1} />
      <Button title="Next" onPress={() => setPage(page + 1)} />
    </View>
  );
};

export default Pagination;
