import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';
import { add, remove } from './favoriteSlice';

interface FavoriteCountState {
  favoriteCount: number;
}

const initialState: FavoriteCountState = {
  favoriteCount: 0,
};

export const favoriteCountSlice = createSlice({
  name: 'favoriteCount',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(add, (state, _action) => {
      state.favoriteCount += 1;
    })
    .addCase(remove, (state, _action) => {
      state.favoriteCount -= 1;
    })
  }
});

export const selectFavoriteCount = (state: RootState) => state.favoriteCount.favoriteCount;
