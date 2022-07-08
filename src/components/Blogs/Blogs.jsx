import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../../features/blogs/blogSlice';

const Blogs = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(getBlogs());
  });

  // const blogLists = blogs.length > 6 ? 6 : blogs.length;

  return (
    <div className="blog_container">
      <div className="blog_container__top">
        <h3>Recent posts</h3>
        <div className="blog_container__items">
          {blogs.slice(0, 1).map((blog) => (
            <div className="blog_container__item" key={blog.id}>
              <div className="blog_container__item__image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog_container__item__content">
                <h4>{blog.title}</h4>
                <p>{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
