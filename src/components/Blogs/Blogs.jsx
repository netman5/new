import React from 'react';

const Blogs = () => {
  const holder = 'hello blogs';
  // const blogs = [];

  // const blogLists = blogs.length > 6 ? 6 : blogs.length;

  return (
    <div className="blog_container">
      <div className="blog_container__top">
        <h3>Recent posts</h3>
        <div className="blog_container__items">
          {holder}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
