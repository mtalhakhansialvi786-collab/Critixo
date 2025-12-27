import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ShoppingCart, ArrowLeft, Star, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/books/all');
        const foundBook = res.data.find(b => b._id === id);
        setBook(foundBook);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchBook();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return <div style={styles.loader}>Loading Details...</div>;
  if (!book) return <div style={styles.loader}>Book Not Found!</div>;

  return (
    <div style={styles.container}>
      <button onClick={() => navigate(-1)} style={styles.backBtn}>
        <ArrowLeft size={18} /> Back to Library
      </button>

      <div style={styles.contentWrapper}>
        <div style={styles.imageSection}>
          <img src={book.image} alt={book.title} style={styles.mainImg} />
        </div>

        <div style={styles.detailsSection}>
          <span style={styles.catTag}>{book.category}</span>
          <h1 style={styles.title}>{book.title}</h1>
          <h2 style={styles.price}>Rs. {book.price}</h2>
          
          <div style={styles.descBox}>
            <h4 style={{marginBottom: '10px', color: '#333'}}>Overview</h4>
            <p style={styles.descText}>{book.description}</p>
          </div>

          <div style={styles.trustRow}>
            <div style={styles.trustItem}><Truck size={18}/> Home Delivery</div>
            <div style={styles.trustItem}><ShieldCheck size={18}/> Original Quality</div>
          </div>

          <button 
            onClick={() => window.open(`https://wa.me/923000000000?text=Salam Critixo! I want to buy: ${book.title}`, '_blank')} 
            style={styles.buyBtn}
          >
            <ShoppingCart size={20} /> Order via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '140px 8% 60px 8%', background: '#fcfcfc', minHeight: '100vh' },
  backBtn: { display: 'flex', alignItems: 'center', gap: '8px', border: 'none', background: 'transparent', color: '#0056b3', fontWeight: 'bold', cursor: 'pointer', marginBottom: '30px' },
  contentWrapper: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' },
  imageSection: { background: 'white', padding: '20px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' },
  mainImg: { width: '100%', borderRadius: '10px', objectFit: 'contain' },
  detailsSection: { padding: '10px 0' },
  catTag: { background: '#eef2ff', color: '#0056b3', padding: '5px 15px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' },
  title: { fontSize: '32px', fontWeight: '900', color: '#1a1a1a', margin: '15px 0' },
  price: { fontSize: '28px', fontWeight: '800', color: '#0056b3', marginBottom: '25px' },
  descText: { color: '#555', lineHeight: '1.7', fontSize: '15px', marginBottom: '30px' },
  trustRow: { display: 'flex', gap: '20px', marginBottom: '30px', borderTop: '1px solid #eee', paddingTop: '20px' },
  trustItem: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600' },
  buyBtn: { width: '100%', padding: '18px', background: '#0056b3', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'center', gap: '12px' },
  loader: { textAlign: 'center', marginTop: '200px', fontWeight: 'bold' }
};

export default BookDetails;