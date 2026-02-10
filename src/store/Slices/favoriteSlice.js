// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   favorites: JSON.parse(localStorage.getItem('favorites')) || [],
// };

// const favoriteSlice = createSlice({
//   name: 'favorites',
//   initialState,
//   reducers: {
//     addToFavorites: (state, action) => {
//       const movie = action.payload;
//       if (!state.favorites.some(fav => fav.id === movie.id)) {
//         state.favorites.push(movie);
//         localStorage.setItem('favorites', JSON.stringify(state.favorites));
//       }
//     },
//     removeFromFavorites: (state, action) => {
//       const movieId = action.payload;
//       state.favorites = state.favorites.filter(movie => movie.id !== movieId);
//       localStorage.setItem('favorites', JSON.stringify(state.favorites));
//     },
//     clearFavorites: (state) => {
//       state.favorites = [];
//       localStorage.removeItem('favorites');
//     },
//   },
// });

// export const { addToFavorites, removeFromFavorites, clearFavorites } = favoriteSlice.actions;
// export default favoriteSlice.reducer;



// src/store/Slices/favoriteSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// In favoriteSlice.js
export const loadFavorites = createAsyncThunk(
  'favorites/load',
  async () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites;
  }
);

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {
    addToFavorites: (state, action) => {
      const movie = action.payload;
      if (!state.items.some(fav => fav.id === movie.id)) {
        state.items.push(movie);
        localStorage.setItem('favorites', JSON.stringify(state.items));
      }
    },
    removeFromFavorites: (state, action) => {
      const movieId = action.payload;
      state.items = state.items.filter(movie => movie.id !== movieId);
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
    clearFavorites: (state) => {
      state.items = [];
      localStorage.removeItem('favorites');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadFavorites.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadFavorites.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(loadFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { addToFavorites, removeFromFavorites, clearFavorites } = favoriteSlice.actions;
export default favoriteSlice;