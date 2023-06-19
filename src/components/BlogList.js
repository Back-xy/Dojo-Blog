import React from 'react';
import { Link } from 'react-router-dom';

function BlogList({ blogs, title }) {
  return (
    <div>
      <h2>{title}</h2>
      {Object.values(blogs)
        .reverse()
        .map((blog) => (
          <div className='blog-preview' key={blog.id}>
            <Link to={`blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>written by {blog.author}</p>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default BlogList;
