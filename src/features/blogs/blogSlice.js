/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const username = '@olaishola';
const url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/';

const initialState = {
  blogs: [],
  loading: false,
  error: null,
};

export const getBlogs = createAsyncThunk('blogs/getBlogs', async (args, thunkAPI) => {
  try {
    const response = await axios.get(`${url}/${username}`);
    return response.data;
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
      console.log(state.blogs);
    },

    [getBlogs.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default blogSlice.reducer;
