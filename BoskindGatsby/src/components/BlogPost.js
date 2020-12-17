import React from 'react';
import PortableText from '@sanity/block-content-to-react';

export default function BlogPost({ blog }) {
  console.log(blog.body);
  return (
    <div>
      <p>
        {blog.title}
        {blog.title}
        {/* <PortableText blocks={blog} /> */}
      </p>
    </div>
  );
}
