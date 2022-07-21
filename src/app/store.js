import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../features/projects/projectSlice';
import blogReducer from '../features/blogs/blogSlice';
import modalReducer from '../features/modal/modalSlice';

const store = configureStore({
  reducer: {
    projects: projectReducer,
    blogs: blogReducer,
    modal: modalReducer,
  },
});

export default store;
