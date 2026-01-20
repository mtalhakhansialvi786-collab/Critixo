import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ShoppingCart, Star, Sparkles, ArrowDown } from 'lucide-react';
import BookCard from '../components/BookCard';

const Home = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);
  const [visibleCount, setVisibleCount] = useState(15);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get('https://critixo-mik3.vercel.app/api/books/all');
        setBooks(res.data);
        setLoading(false);
      } catch (err) {
        console.log("Books load nahi ho sakin");
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showMoreBooks = () => {
    setVisibleCount(prev => prev + 15);
  };

  return (
    <div style={styles.container}>
      {/* --- PREMIUM HERO SECTION --- */}
      <header style={styles.hero}>
        <div style={styles.heroBadge}>
          <Sparkles size={16} color="#1A73E8" />
          <span>New Collection 2026</span>
        </div>
        <h1 style={styles.heroTitle}>
          Discover Your Next <br />
          <span style={styles.heroHighlight}>Great Adventure</span>
        </h1>
        <p style={styles.heroSub}>
          Explore thousands of books at <span style={{fontWeight: '700', color: '#333'}}>Critixo</span>, 
          where every page turns into a new story.
        </p>
        <div style={styles.scrollIndicator}>
          <ArrowDown size={20} color="#1A73E8" />
        </div>
      </header>

      {/* --- BOOKS GRID --- */}
      {loading ? (
        <div style={styles.loaderContainer}>
          <div className="spinner"></div>
          <p>Loading the library...</p>
        </div>
      ) : (
        <>
          <div style={styles.grid}>
            {filteredBooks.slice(0, visibleCount).map((book, index) => (
              <div 
                key={book._id} 
                style={{
                  animation: `fadeInUp 0.6s ease forwards ${index * 0.1}s`,
                  opacity: 0
                }}
              >
                {/* Yahan hum wahi BookCard use kar rahe hain jo humne pehle beautify kiya tha */}
                <BookCard book={book} />
              </div>
            ))}
          </div>

          {/* --- LOAD MORE SECTION --- */}
          {visibleCount < filteredBooks.length && (
            <div style={styles.loadMoreWrapper}>
              <button onClick={showMoreBooks} style={styles.loadMoreBtn}>
                Explore More Books
              </button>
            </div>
          )}
        </>
      )}

      {/* CSS Animations (Injected as Style Tag) */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #1A73E8;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: { 
    padding: '120px 5% 50px 5%', 
    minHeight: '100vh', 
    background: '#FFFFFF', // Clean White Background
    backgroundImage: 'radial-gradient(#1A73E805 2px, transparent 2px)',
    backgroundSize: '30px 30px' // Subtle dot pattern for professional look
  },
  hero: { 
    textAlign: 'center', 
    marginBottom: '80px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  heroBadge: {
    background: '#E8F0FE',
    color: '#1A73E8',
    padding: '8px 16px',
    borderRadius: '50px',
    fontSize: '13px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '20px',
    animation: 'fadeInUp 0.8s ease'
  },
  heroTitle: { 
    fontSize: '3.5rem', 
    fontWeight: '900', 
    lineHeight: '1.1',
    color: '#1e293b',
    margin: '0 0 20px 0',
    animation: 'fadeInUp 1s ease'
  },
  heroHighlight: {
    color: '#1A73E8',
    background: 'linear-gradient(120deg, #1A73E8 0%, #0d47a1 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  heroSub: { 
    color: '#64748b', 
    fontSize: '1.2rem', 
    maxWidth: '600px',
    animation: 'fadeInUp 1.2s ease'
  },
  scrollIndicator: {
    marginTop: '40px',
    animation: 'bounce 2s infinite',
    background: '#f1f4f9',
    padding: '10px',
    borderRadius: '50%'
  },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
    gap: '40px',
    justifyItems: 'center'
  },
  loaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px'
  },
  loadMoreWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '60px'
  },
  loadMoreBtn: {
    background: '#FFFFFF',
    color: '#1A73E8',
    border: '2px solid #1A73E8',
    padding: '14px 40px',
    borderRadius: '50px',
    fontWeight: '800',
    fontSize: '16px',
    cursor: 'pointer',
    transition: '0.3s all ease',
    boxShadow: '0 4px 15px rgba(26, 115, 232, 0.1)',
    '&:hover': {
      background: '#1A73E8',
      color: '#fff'
    }
  }
};

export default Home;
