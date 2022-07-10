import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../features/projects/projectSlice';
import blogReducer from '../features/blogs/blogSlice';

const store = configureStore({
  reducer: {
    projects: projectReducer,
    blogs: blogReducer,
  },
});

export default store;
