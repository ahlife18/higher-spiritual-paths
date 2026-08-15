import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

function Blog() {
  // Take the first post as the featured one
  const featured = blogPosts[0];
  const others = blogPosts.slice(1);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📖 Blog</h1>
      <p style={styles.subtitle}>Insights, reflections, and spiritual teachings.</p>

      {/* FEATURED POST */}
      <div style={styles.featuredContainer}>
        <Link to={`/blog/${featured.id}`} style={styles.featuredLink}>
          <div style={styles.featuredCard}>
            <div style={styles.featuredImage}>{featured.image}</div>
            <div style={styles.featuredContent}>
              <span style={styles.category}>{featured.category}</span>
              <h2 style={styles.featuredTitle}>{featured.title}</h2>
              <p style={styles.featuredExcerpt}>{featured.excerpt}</p>
              <span style={styles.readMore}>Read Full Article →</span>
            </div>
          </div>
        </Link>
      </div>

      {/* GRID POSTS */}
      <div style={styles.grid}>
        {others.map((post) => (
          <div key={post.id} style={styles.card}>
            <div style={styles.cardImage}>{post.image}</div>
            <span style={styles.category}>{post.category}</span>
            <Link to={`/blog/${post.id}`} style={styles.cardTitleLink}>
              <h3 style={styles.cardTitle}>{post.title}</h3>
            </Link>
            <p style={styles.cardDate}>{post.date}</p>
            <p style={styles.cardExcerpt}>{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} style={styles.readBtn}>
              Read More
            </Link>
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
  featuredContainer: {
    maxWidth: '900px',
    margin: '0 auto 3rem',
  },
  featuredLink: {
    textDecoration: 'none',
  },
  featuredCard: {
    background: '#fff',
    borderRadius: '24px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    transition: 'transform 0.3s',
  },
  featuredImage: {
    flex: '1 1 200px',
    fontSize: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#F5EEF8',
    padding: '2rem',
  },
  featuredContent: {
    flex: '2 1 300px',
    padding: '2rem',
    textAlign: 'left',
  },
  featuredTitle: {
    fontSize: '2rem',
    color: '#5B2A8C',
    margin: '0.5rem 0',
  },
  featuredExcerpt: {
    color: '#444',
    lineHeight: '1.6',
    marginBottom: '1rem',
  },
  readMore: {
    color: '#5B2A8C',
    fontWeight: 'bold',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
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
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  category: {
    fontSize: '0.75rem',
    color: '#5B2A8C',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    display: 'block',
    marginBottom: '0.5rem',
  },
  cardTitleLink: {
    textDecoration: 'none',
  },
  cardTitle: {
    fontSize: '1.3rem',
    color: '#5B2A8C',
    marginBottom: '0.5rem',
  },
  cardDate: {
    fontSize: '0.85rem',
    color: '#999',
    marginBottom: '1rem',
  },
  cardExcerpt: {
    fontSize: '0.95rem',
    color: '#444',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  },
  readBtn: {
    display: 'inline-block',
    background: '#5B2A8C',
    color: '#fff',
    padding: '0.5rem 1.5rem',
    borderRadius: '20px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '0.9rem',
  },
};

export default Blog;