// components/SingleBlog.tsx

"use client"
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { FaCalendar, FaUser, FaClock, } from 'react-icons/fa';

interface BlogPost {
  _id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  author: string;
  fullContent: string;
  additionalContent: string;
  tags: string[];
  category: string;
}

const SingleBlog: React.FC = () => {
    const params = useParams();
    const id = params.id; 
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://myportfolio-server.vercel.app/blog/${id}`)
        .then(response => response.json())
        .then(data => setPost(data))
        .catch(error => console.error('Error fetching blog post:', error));
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900 text-white p-8">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-blue-900 p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-700">
          {post.title}
        </h2>
        <div className="flex flex-wrap justify-between items-center text-gray-400 mb-4">
          <div className="flex items-center mr-4 mb-2">
            <FaCalendar className="mr-2" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center mr-4 mb-2">
            <FaClock className="mr-2" />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center mb-2">
            <FaUser className="mr-2" />
            <span>{post.author}</span>
          </div>
        </div>
        <p className="text-lg mb-6 text-gray-300">{post.description}</p>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2 text-blue-300">Article Content:</h3>
          <p className="text-base text-gray-300">{post.fullContent}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2 text-blue-300">In-Depth Analysis:</h3>
          <p className="text-base text-gray-300 whitespace-pre-line">{post.additionalContent}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2 text-blue-300">Related Topics:</h3>
          <div className="flex flex-wrap">
            {post.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="bg-blue-600 bg-opacity-50 text-sm px-3 py-1 rounded-full mr-2 mb-2">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <span className="text-purple-700 font-semibold">Category: {post.category}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
