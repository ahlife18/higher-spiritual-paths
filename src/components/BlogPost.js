import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div style={styles.notFound}>Post not found.</div>;
  }

  return (
    <div style={styles.container}>
      <Link to="/blog" style={styles.backBtn}>← Back to Blog</Link>
      <div style={styles.card}>
        <div style={styles.heroImage}>{post.image}</div>
        <span style={styles.category}>{post.category}</span>
        <h1 style={styles.title}>{post.title}</h1>
        <p style={styles.date}>{post.date}</p>
        <div style={styles.content}>
          <p>{post.excerpt}</p>
          <p>
            This is the full article content. In the future, we can store the
            full text in the blogData.js file, or even fetch it from a database.
            For now, we've expanded on the excerpt to show you how a full blog
            post would look.
          </p>
          <p>
            The journey of self-discovery is not about finding answers—it is
            about learning to sit with the questions. At Higher Spiritual Paths,
            we honor this process.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '3rem 2rem',
    background: '#F5EEF8',
    minHeight: '80vh',
    fontFamily: 'Arial, sans-serif',
  },
  notFound: {
    textAlign: 'center',
    padding: '4rem',
    fontSize: '1.5rem',
    color: '#888',
  },
  backBtn: {
    display: 'inline-block',
    marginBottom: '2rem',
    color: '#5B2A8C',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  card: {
    maxWidth: '800px',
    margin: '0 auto',
    background: '#fff',
    padding: '3rem',
    borderRadius: '24px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
  },
  heroImage: {
    fontSize: '4rem',
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  category: {
    display: 'block',
    textAlign: 'center',
    color: '#5B2A8C',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '0.85rem',
    marginBottom: '0.5rem',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    color: '#5B2A8C',
    marginBottom: '0.5rem',
  },
  date: {
    textAlign: 'center',
    color: '#999',
    fontSize: '0.9rem',
    marginBottom: '2rem',
  },
  content: {
    lineHeight: '1.8',
    fontSize: '1.05rem',
    color: '#333',
  },
};

export default BlogPost;