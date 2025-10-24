import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: 'Grand Annual Function: Celebrating Excellence',
      date: 'Mar 17, 2024',
      image: '/image/SE1.jpeg',
      excerpt: 'Grand Annual Function with Chief Guest: Suresh Kumar Sharma, Former Member of the Bihar Legislative Assembly',
      content: 'Our annual function was a grand success with participation from students, parents, and distinguished guests. The event showcased the talents and achievements of our students throughout the year.',
      author: 'School Administration'
    },
    {
      id: 2,
      title: 'Inspiring Innovation: Annual Science Exhibition',
      date: 'Feb 28, 2024',
      image: '/image/SE2.png',
      excerpt: 'Students showcase innovative science projects and creative solutions',
      content: 'The annual science exhibition was a platform for our students to demonstrate their scientific knowledge and creativity. Various projects were displayed covering topics from physics, chemistry, and biology.',
      author: 'Science Department'
    },
    {
      id: 3,
      title: 'Farewell Class 10: Wishing Bright Futures',
      date: 'Mar 15, 2023',
      image: '/image/SE3.png',
      excerpt: 'Celebrating achievements and cherished memories of our graduating class',
      content: 'We bid farewell to our Class 10 students with a memorable event filled with emotions, celebrations, and best wishes for their bright future ahead.',
      author: 'School Administration'
    }
  ];

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="blog-hero-content"
          >
            <h1>School Blog</h1>
            <p>Latest News and Updates from CPPS</p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="blog-section">
        <div className="container">
          <div className="row">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="col-lg-4 col-md-6 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="blog-card">
                  <div className="blog-image-wrapper">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="blog-image"
                      onError={(e) => {
                        e.target.src = '/image/PG1.jpeg';
                      }}
                    />
                    <div className="blog-date-badge">
                      <i className="fas fa-calendar-alt me-2"></i>
                      {post.date}
                    </div>
                  </div>
                  <div className="blog-content">
                    <h5 className="blog-title">{post.title}</h5>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <div className="blog-footer">
                      <small className="text-muted">
                        <i className="fas fa-user me-2"></i>
                        {post.author}
                      </small>
                      <button
                        className="btn btn-link-new"
                        onClick={() => setSelectedBlog(post)}
                      >
                        Read More <i className="fas fa-arrow-right ms-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Detail Modal */}
      {selectedBlog && (
        <motion.div
          className="blog-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedBlog(null)}
        >
          <motion.div
            className="blog-modal"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedBlog(null)}
            >
              <i className="fas fa-times"></i>
            </button>
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="modal-image"
              onError={(e) => {
                e.target.src = '/image/PG1.jpeg';
              }}
            />
            <div className="modal-content">
              <h2>{selectedBlog.title}</h2>
              <div className="modal-meta">
                <span>
                  <i className="fas fa-calendar-alt me-2"></i>
                  {selectedBlog.date}
                </span>
                <span>
                  <i className="fas fa-user me-2"></i>
                  {selectedBlog.author}
                </span>
              </div>
              <p>{selectedBlog.content}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Blog;

