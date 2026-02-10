// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   movies: [],
//   loading: false,
//   error: null,
//   currentMovie: null,
//   searchQuery: ''
// };

// const movieSlice = createSlice({
//   name: 'movies',
//   initialState,
//   reducers: {
//     setMovies: (state, action) => {
//       state.movies = action.payload;
//       state.loading = false;
//     },
//     setLoading: (state, action) => {
//       state.loading = action.payload;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//       state.loading = false;
//     },
//     setCurrentMovie: (state, action) => {
//       state.currentMovie = action.payload;
//     },
//     setSearchQuery: (state, action) => {
//       state.searchQuery = action.payload;
//     }
//   }
// });

// export const { setMovies, setLoading, setError, setCurrentMovie, setSearchQuery } = movieSlice.actions;
// export default movieSlice.reducer;



// src/store/Slices/movieSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Replace this with your actual API endpoint
const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '1d6fc6f436488fb9cad1ee6440edd309'; // Replace with your actual API key

export const fetchMovies = createAsyncThunk(
  'movies/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${API_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchMovieDetails = createAsyncThunk(
  'movies/fetchDetails',
  async (movieId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${API_URL}/movie/${movieId}?api_key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch movie details');
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    items: [],
    currentMovie: null,
    searchQuery: '',
    loading: false,
    error: null
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    clearCurrentMovie: (state) => {
      state.currentMovie = null;
    }
  },
  extraReducers: (builder) => {
    // Fetch Movies
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

    // Fetch Movie Details
      .addCase(fetchMovieDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.currentMovie = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { setSearchQuery, clearCurrentMovie } = movieSlice.actions;
export default movieSlice;