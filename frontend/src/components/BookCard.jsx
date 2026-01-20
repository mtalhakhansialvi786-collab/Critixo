import React, { useState } from 'react';
import { MessageCircle, Phone, ShoppingCart, X } from 'lucide-react';

const BookCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const myNumber = "923448665265";

  const handleAction = (type) => {
    const message = `Hello! I want to buy: *${book.title}*\nPrice: ${book.price}\nLanguage: ${book.language}`;
    
    if (type === 'message') {
      window.open(`https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`, "_blank");
    } else {
      window.open(`tel:+${myNumber}`, "_self");
    }
    setShowModal(false);
  };

  return (
    <div 
      style={{
        ...styles.card,
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 15px 35px rgba(0,0,0,0.15)' : '0 4px 15px rgba(0,0,0,0.05)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* --- IMAGE SECTION --- */}
      <div style={styles.imageContainer}>
        <img 
          src={book.image} 
          alt={book.title} 
          style={{
            ...styles.img,
            transform: isHovered ? 'scale(1.08)' : 'scale(1)'
          }} 
        />
        <div style={styles.badge}>{book.language}</div>
      </div>

      {/* --- DETAILS SECTION --- */}
      <div style={styles.content}>
        <h3 style={styles.title}>{book.title}</h3>
        <div style={styles.priceContainer}>
          <span style={styles.currency}>Rs.</span>
          <span style={styles.priceValue}>{book.price}</span>
        </div>
        
        <button 
          onClick={() => setShowModal(true)} 
          style={{
            ...styles.buyBtn,
            background: isHovered ? '#0D47A1' : '#1A73E8'
          }}
        >
          <ShoppingCart size={18} style={{marginRight: '8px'}} />
          Buy Now
        </button>
      </div>

      {/* --- MODERN MODAL --- */}
      {showModal && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <div style={styles.modalHeader}>
              <h4 style={styles.modalTitle}>Order Details</h4>
              <button onClick={() => setShowModal(false)} style={styles.closeIcon}>
                <X size={20} />
              </button>
            </div>
            
            <div style={styles.modalBody}>
              <p style={{margin: '0 0 10px 0', fontWeight: '600'}}>{book.title}</p>
              <p style={{color: '#666', fontSize: '14px'}}>How would you like to proceed?</p>
              
              <div style={styles.btnGroup}>
                <button onClick={() => handleAction('message')} style={styles.waBtn}>
                  <MessageCircle size={20} /> WhatsApp Message
                </button>
                <button onClick={() => handleAction('call')} style={styles.callBtn}>
                  <Phone size={20} /> Direct Call
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  card: { 
    width: '260px', 
    background: '#ffffff', 
    borderRadius: '20px', 
    overflow: 'hidden', 
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    border: '1px solid #eee',
    position: 'relative',
    margin: '15px'
  },
  imageContainer: {
    height: '300px',
    overflow: 'hidden',
    position: 'relative'
  },
  img: { 
    width: '100%', 
    height: '100%', 
    objectFit: 'cover',
    transition: 'transform 0.6s ease'
  },
  badge: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    background: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(5px)',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#1A73E8',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  content: {
    padding: '18px',
    textAlign: 'left'
  },
  title: { 
    fontSize: '17px', 
    fontWeight: '700',
    margin: '0 0 8px 0', 
    color: '#2c3e50',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  priceContainer: {
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'baseline',
    gap: '4px'
  },
  currency: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#1A73E8'
  },
  priceValue: { 
    fontSize: '22px', 
    fontWeight: '800', 
    color: '#1A73E8' 
  },
  buyBtn: { 
    color: 'white', 
    border: 'none', 
    padding: '12px', 
    borderRadius: '12px', 
    cursor: 'pointer', 
    width: '100%', 
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.3s'
  },
  overlay: { 
    position: 'fixed', 
    top: 0, 
    left: 0, 
    width: '100%', 
    height: '100%', 
    background: 'rgba(0,0,0,0.6)', 
    backdropFilter: 'blur(4px)',
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    zIndex: 2000 
  },
  modal: { 
    background: '#ffffff', 
    borderRadius: '24px', 
    width: '340px', 
    boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
    overflow: 'hidden'
  },
  modalHeader: {
    padding: '20px',
    background: '#f8f9fa',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #eee'
  },
  modalTitle: { margin: 0, fontSize: '18px', color: '#333' },
  closeIcon: { background: 'none', border: 'none', cursor: 'pointer', color: '#888' },
  modalBody: { padding: '25px', textAlign: 'center' },
  btnGroup: { display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' },
  waBtn: { 
    background: '#25D366', 
    color: 'white', 
    border: 'none', 
    padding: '14px', 
    borderRadius: '12px', 
    cursor: 'pointer', 
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
  },
  callBtn: { 
    background: '#1A73E8', 
    color: 'white', 
    border: 'none', 
    padding: '14px', 
    borderRadius: '12px', 
    cursor: 'pointer', 
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
  },
};

export default BookCard;
