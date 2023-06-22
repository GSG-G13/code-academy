import React, { useState, useEffect } from 'react';

interface Post {
  author: string;
  title: string;
  content: string;
  date: string;
}

const PostComponent: React.FC = () => {
  const [post, setPost] = useState({
    author: '',
    title: '',
    content: '',
    date: '',
  });

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await fetch('https://example.com/api/posts/123');
        const postData = await response.json();
        setPost({
          author: postData.author,
          title: postData.title,
          content: postData.content,
          date: postData.date,
        });
      } catch (error) {
        console.error('errrrrrrrrrrrrrrrrrrror', error);
      }
    };

    fetchPostData();
  }, []);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>Author: {post.author}</p>
      <p>Date: {post.date}</p>
      <div>{post.content}</div>
    </div>
  );
};

export default PostComponent;
