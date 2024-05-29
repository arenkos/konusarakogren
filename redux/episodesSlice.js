import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchEpisodes = createAsyncThunk('episodes/fetchEpisodes', async (page) => {
  const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`);
  const data = await response.json();
  return data.results;
});

export const fetchEpisodeDetail = createAsyncThunk('episodes/fetchEpisodeDetail', async (id) => {
  const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
  const data = await response.json();
  return data;
});

const episodesSlice = createSlice({
  name: 'episodes',
  initialState: {
    list: [],
    detail: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(fetchEpisodeDetail.fulfilled, (state, action) => {
        state.detail = action.payload;
      });
  },
});

export default episodesSlice.reducer;
