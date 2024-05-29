import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveFavoritesToStorage = async (favorites) => {
  try {
    await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  } catch (e) {
    console.error(e);
  }
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    list: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      if (state.list.length < 10 && !state.list.includes(action.payload)) {
        state.list.push(action.payload);
        saveFavoritesToStorage(state.list);
      }
    },
    removeFavorite: (state, action) => {
      state.list = state.list.filter(id => id !== action.payload);
      saveFavoritesToStorage(state.list);
    },
    loadFavorites: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addFavorite, removeFavorite, loadFavorites } = favoritesSlice.actions;
export const loadFavoritesFromStorage = () => async (dispatch) => {
  try {
    const favorites = await AsyncStorage.getItem('favorites');
    if (favorites !== null) {
      dispatch(loadFavorites(JSON.parse(favorites)));
    }
  } catch (e) {
    console.error(e);
  }
};

export default favoritesSlice.reducer;
