import { configureStore } from '@reduxjs/toolkit';
import episodesReducer from './episodesSlice';
import charactersReducer from './charactersSlice';
import favoritesReducer from './favoritesSlice';

export const store = configureStore({
  reducer: {
    episodes: episodesReducer,
    characters: charactersReducer,
    favorites: favoritesReducer,
  },
});
