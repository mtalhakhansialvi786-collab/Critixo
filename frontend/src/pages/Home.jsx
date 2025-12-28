import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ShoppingCart, Languages, Star } from 'lucide-react';

const Home = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);
  const [visibleCount, setVisibleCount] = useState(15); 

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // TABDEELI: localhost ko live backend link se replace kiya hai
        const res = await axios.get('https://critixo-mik3.vercel.app/api/books/all');
        setBooks(res.data);
      } catch (err) {
        console.log("Books load nahi ho sakin");
      }
    };
    fetchBooks();
  }, []);

  // Filter Logic
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Load More Function
  const showMoreBooks = () => {
    setVisibleCount(prev => prev + 15);
  };

  const handleBuy = (bookTitle) => {
    const message = encodeURIComponent(`Assalam o Alaikum, mujhe ye book chahiye: ${bookTitle}`);
    window.open(`https://wa.me/923000000000?text=${message}`, '_blank');
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <header style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to <span style={{color: '#ff4d4d'}}>Critixo</span></h1>
        <p style={styles.heroSub}>Pakistan's Most Premium Book Store</p>
      </header>

      {/* Books Grid */}
      <div style={styles.grid}>
        {filteredBooks.slice(0, visibleCount).map((book) => (
          <div key={book._id} className="glow-button" style={styles.card}>
            <div style={styles.imageContainer}>
              <img src={book.image} alt={book.title} style={styles.image} />
              <span style={styles.langBadge}>{book.language}</span>
            </div>
            
            <div style={styles.details}>
              <h3 style={styles.bookTitle}>{book.title}</h3>
              <div style={styles.rating}>
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#f9cb28" color="#f9cb28" />)}
                <span style={{marginLeft: '5px', fontSize: '12px', color: '#888'}}>(4.5)</span>
              </div>
              <p style={styles.price}>Rs. {book.price}</p>
              
              <button onClick={() => handleBuy(book.title)} style={styles.buyBtn}>
                <ShoppingCart size={18} /> Buy via WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredBooks.length && (
        <button onClick={showMoreBooks} className="load-more">
          Load More Books
        </button>
      )}
    </div>
  );
};

const styles = {
  container: { padding: '100px 5% 50px 5%', minHeight: '100vh' },
  hero: { textAlign: 'center', marginBottom: '50px' },
  heroTitle: { fontSize: '3rem', fontWeight: '800', letterSpacing: '-1px' },
  heroSub: { color: '#888', marginTop: '10px', fontSize: '1.2rem' },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
    gap: '30px' 
  },
  card: { 
    background: '#1a1a1a', 
    borderRadius: '15px', 
    overflow: 'hidden', 
    border: '1px solid #333',
    transition: '0.3s'
  },
  imageContainer: { position: 'relative', height: '320px', overflow: 'hidden' },
  image: { width: '100%', height: '100%', objectFit: 'cover', transition: '0.5s' },
  langBadge: { 
    position: 'absolute', top: '10px', left: '10px', 
    background: 'rgba(255, 77, 77, 0.9)', color: 'white', 
    padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' 
  },
  details: { padding: '20px' },
  bookTitle: { fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '8px' },
  rating: { display: 'flex', alignItems: 'center', marginBottom: '10px' },
  price: { fontSize: '1.3rem', color: '#ff4d4d', fontWeight: 'bold', marginBottom: '15px' },
  buyBtn: { 
    width: '100%', padding: '12px', borderRadius: '8px', border: 'none',
    background: 'linear-gradient(45deg, #25D366, #128C7E)', color: 'white',
    fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', 
    justifyContent: 'center', gap: '10px' 
  }
};

export default Home;
