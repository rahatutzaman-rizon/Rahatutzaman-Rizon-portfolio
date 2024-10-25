"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaSearch, FaCalendar, FaUser, FaClock, FaTags } from 'react-icons/fa';
import Link from 'next/link';

interface BlogPost {
  _id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  category: string;
}

const BlogCard: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    fetch('https://myportfolio-server.vercel.app/blog')
      .then((response) => response.json())
      .then((data) => setBlogPosts(data))
      .catch((error) => console.error('Error fetching blog posts:', error));
  }, []);

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900 text-white">
      <header className="bg-black bg-opacity-50 py-8 px-4 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-4">
            Rizons Tech Universe Blogs
          </h1>
          <p className="text-xl text-center text-gray-300">
            Exploring the Frontiers of Web Development, DevOps, and Data Management
          </p>
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                className="w-full py-3 px-4 pr-10 rounded-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              <Link href={`/blog/${post._id}`}>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-blue-300">{post.title}</h2>
                  <p className="text-lg mb-4 text-gray-300">{post.description}</p>
                  <div className="flex justify-between items-center text-gray-400 mb-4">
                    <div className="flex items-center">
                      <FaCalendar className="mr-2" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400 mb-4">
                    <FaUser className="mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center">
                    <FaTags className="text-blue-400 mr-2" />
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-blue-800 bg-opacity-50 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-purple-400">{post.category}</span>
                    <FaArrowRight className="text-blue-400 text-2xl" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.section>
      </main>
    </div>
  );
};

export default BlogCard;
