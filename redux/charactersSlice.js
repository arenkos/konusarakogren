import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCharacterDetail = createAsyncThunk('characters/fetchCharacterDetail', async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    all: [],
    detail: {},
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.all.some(char => char.id === id)) {
        state.all = state.all.map(char => char.id === id ? { ...char, favorite: !char.favorite } : char);
      } else {
        state.all.push({ id, favorite: true });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacterDetail.fulfilled, (state, action) => {
        state.detail = action.payload;
        if (!state.all.some(char => char.id === action.payload.id)) {
          state.all.push(action.payload);
        }
      });
  },
});

export const { toggleFavorite } = charactersSlice.actions;
export default charactersSlice.reducer;
