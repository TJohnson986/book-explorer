import { createSlice } from '@reduxjs/toolkit';

export const favoriteBooksSlice = createSlice({
  name: 'favoriteBooks',
  initialState: {
    favoriteBooks: [] as string[],
  },
  reducers: {
    increment: (state, id) => {
      if (!state.favoriteBooks.includes(id.payload)) {
        state.favoriteBooks.push(id.payload);
        return;
      }
    },
    decrement: (state, id) => {
      state.favoriteBooks = state.favoriteBooks.filter(
        bookId => bookId !== id.payload,
      );
    },
  },
});

export const { increment, decrement } = favoriteBooksSlice.actions;

export default favoriteBooksSlice.reducer;
