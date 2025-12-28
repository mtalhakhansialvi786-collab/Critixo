import React, { useState } from 'react';

const BookCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const myNumber = "923448665265"; // Aapka number

  const handleAction = (type) => {
    // WhatsApp par message bhejne ke liye text tyar karna
    const message = `Assalam-o-Alaikum, mujhe ye book chahiye: *${book.title}*\nPrice: ${book.price}\nLanguage: ${book.language}`;
    
    if (type === 'message') {
      window.open(`https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`, "_blank");
    } else {
      window.open(`tel:+${myNumber}`, "_self");
    }
    setShowModal(false);
  };

  return (
    <div style={styles.card}>
      <img src={book.image} alt={book.title} style={styles.img} />
      <div style={{padding: '10px'}}>
        <h3 style={styles.title}>{book.title}</h3>
        <p style={styles.lang}>Language: {book.language}</p>
        <p style={styles.price}>Rs. {book.price}</p>
        
        <button onClick={() => setShowModal(true)} style={styles.buyBtn}>
          Buy Now
        </button>
      </div>

      {/* WhatsApp Modal Popup */}
      {showModal && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h4 style={{color: 'black'}}>Order: {book.title}</h4>
            <p style={{color: '#666', fontSize: '14px'}}>Aap is book ke liye kaise rabta karna chahte hain?</p>
            <div style={styles.btnGroup}>
              <button onClick={() => handleAction('message')} style={styles.waBtn}>💬 Direct Message</button>
              <button onClick={() => handleAction('call')} style={styles.callBtn}>📞 Call Now</button>
            </div>
            <button onClick={() => setShowModal(false)} style={styles.closeBtn}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  card: { border: '1px solid #ddd', borderRadius: '12px', textAlign: 'center', width: '260px', background: '#f1efe2', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' },
  img: { width: '100%', height: '280px', objectFit: 'cover' },
  title: { fontSize: '18px', margin: '10px 0', color: '#333' },
  lang: { color: '#777', fontSize: '14px' },
  price: { fontWeight: 'bold', color: '#1A73E8', fontSize: '20px', margin: '10px 0' },
  buyBtn: { background: '#1A73E8', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', width: '100%', fontWeight: 'bold' },
  overlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
  modal: { background: '#f1efe2', padding: '25px', borderRadius: '15px', textAlign: 'center', width: '320px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' },
  btnGroup: { display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' },
  waBtn: { background: '#1A73E8', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' },
  callBtn: { background: '#3498db', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' },
  closeBtn: { marginTop: '15px', background: 'none', border: 'none', color: '#888', cursor: 'pointer', textDecoration: 'underline' }
};

export default BookCard;
