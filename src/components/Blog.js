import React from 'react';
import { blogPosts } from '../data/blogData';

function Blog() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📖 Blog</h1>
      <p style={styles.subtitle}>Insights, reflections, and spiritual teachings.</p>

      <div style={styles.grid}>
        {blogPosts.map((post) => (
          <div key={post.id} style={styles.card}>
            <div style={styles.cardImage}>{post.image}</div>
            <span style={styles.category}>{post.category}</span>
            <h3 style={styles.cardTitle}>{post.title}</h3>
            <p style={styles.cardDate}>{post.date}</p>
            <p style={styles.cardExcerpt}>{post.excerpt}</p>
            <button style={styles.readBtn}>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '4rem 2rem',
    background: '#F5EEF8',
    minHeight: '80vh',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '3rem',
    color: '#5B2A8C',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  card: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '20px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    textAlign: 'left',
  },
  cardImage: {
    fontSize: '3rem',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  category: {
    fontSize: '0.8rem',
    color: '#5B2A8C',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '0.5rem',
    display: 'block',
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: '#5B2A8C',
    marginBottom: '0.5rem',
  },
  cardDate: {
    fontSize: '0.9rem',
    color: '#999',
    marginBottom: '1rem',
  },
  cardExcerpt: {
    fontSize: '1rem',
    color: '#444',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  },
  readBtn: {
    background: '#5B2A8C',
    color: '#fff',
    padding: '0.5rem 1.5rem',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default Blog;