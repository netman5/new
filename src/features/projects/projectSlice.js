/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = process.env.BASE_URL;

const initialState = {
  projects: [],
  project: {},
  loading: false,
  error: null,
};

export const getProjectItems = createAsyncThunk('projects/getProjectItems', async (args, thunkAPI) => {
  try {
    const response = await axios.get(`${baseUrl}/projects`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getSingleProject = createAsyncThunk('projects/getSingleProject', async (args, thunkAPI) => {
  try {
    const response = await axios.get(`${baseUrl}/projects/${args}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    displayProjects: (state, action) => {
      const { payload } = action;
      state.projects = [...payload];
    },

    getAproject: (state, action) => {
      state.project = { ...action.payload };
    },
  },

  extraReducers: {
    [getProjectItems.pending]: (state) => {
      state.loading = true;
    },

    [getProjectItems.fulfilled]: (state, action) => {
      state.loading = false;
      state.projects = action.payload;
    },

    [getProjectItems.rejected]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },

    [getSingleProject.pending]: (state) => {
      state.loading = true;
    },

    [getSingleProject.fulfilled]: (state, action) => {
      state.loading = false;
      state.project = { ...action.payload };
      console.log(state.project);
    },

    [getSingleProject.rejected]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
  },
});

export const { displayProjects } = projectSlice.actions;
export default projectSlice.reducer;
