/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = process.env.REACT_APP_MEDIUM_URL;

const initialState = {
  blogs: [],
  loading: false,
  error: null,
};

export const getBlogs = createAsyncThunk('blogs/getBlogs', async (args, thunkAPI) => {
  try {
    const response = await axios.get(`${url}/${process.env.REACT_APP_MEDIUM_USERNAME}`);
    return response.data.items;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: {
    [getBlogs.pending]: (state) => {
      state.loading = true;
    },

    [getBlogs.fulfilled]: (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
    },

    [getBlogs.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default blogSlice.reducer;
