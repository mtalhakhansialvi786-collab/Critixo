import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, Send, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedback = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setFeedback("");
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        
        {/* Section 1: Brand & About */}
        <div style={styles.section}>
          <h3 style={styles.logo}>Critixo</h3>
          <p style={styles.text}>
            Pakistan's premium destination for book lovers. Read more, spend less. 
            Your favorite bookstore online, delivering knowledge across the nation.
          </p>
          <div style={styles.socials}>
            <a href="https://www.facebook.com/profile.php?id=61574169407534" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <Facebook style={styles.icon} size={20} />
            </a>
            <a href="#" style={styles.iconLink}><Instagram style={styles.icon} size={20} /></a>
            <a href="#" style={styles.iconLink}><Twitter style={styles.icon} size={20} /></a>
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}><ExternalLink size={14} /> Shop Books</li>
            <li style={styles.listItem}><ExternalLink size={14} /> Best Sellers</li>
            <li style={styles.listItem}><ExternalLink size={14} /> Privacy Policy</li>
            <li style={styles.listItem}><ExternalLink size={14} /> Terms of Service</li>
          </ul>
        </div>

        {/* Section 3: Contact Info */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Contact Us</h4>
          <p style={styles.text}><Mail size={16} color="#1A73E8" /> support@critixo.com</p>
          <p style={styles.text}><Phone size={16} color="#1A73E8" /> +92 344 8665265</p>
          <p style={styles.text}><MapPin size={16} color="#1A73E8" /> Lahore, Pakistan</p>
        </div>

        {/* Section 4: Feedback & Newsletter */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Share Feedback</h4>
          <form onSubmit={handleFeedback} style={styles.feedbackForm}>
            <input 
              type="text" 
              placeholder="Your thoughts..." 
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.sendBtn}>
              <Send size={16} />
            </button>
          </form>
          <p style={{fontSize: '11px', color: '#888', marginTop: '10px'}}>
            We value your suggestions to improve our store.
          </p>
        </div>
      </div>

      <div style={styles.bottom}>
        <p>© 2025 <span style={{fontWeight: 'bold', color: '#1A73E8'}}>Critixo Store</span>. All Rights Reserved.</p>
        <p style={{fontSize: '11px', marginTop: '5px'}}>Designed with ❤️ by Talha Sialvi</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: { 
    background: '#FFFFFF', 
    padding: '70px 8% 30px 8%', 
    borderTop: '4px solid #1A73E8', // Professional blue accent
    marginTop: '50px',
    color: '#333',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
  },
  content: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    flexWrap: 'wrap', 
    gap: '40px' 
  },
  section: { 
    flex: '1', 
    minWidth: '220px',
    marginBottom: '20px'
  },
  logo: { 
    color: '#1A73E8', 
    marginBottom: '20px', 
    fontSize: '28px', 
    fontWeight: 'bold',
    letterSpacing: '1px'
  },
  heading: {
    color: '#222',
    fontSize: '18px',
    marginBottom: '25px',
    position: 'relative',
    paddingBottom: '8px',
    borderBottom: '2px solid #f0f0f0'
  },
  text: { 
    color: '#555', 
    fontSize: '14px', 
    lineHeight: '1.8', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '12px', 
    marginBottom: '12px' 
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  listItem: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '10px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: '0.3s transform',
    ":hover": { transform: 'translateX(5px)', color: '#1A73E8' } // Logical representation
  },
  socials: { display: 'flex', gap: '20px', marginTop: '20px' },
  iconLink: {
    textDecoration: 'none',
    transition: '0.3s'
  },
  icon: { 
    cursor: 'pointer', 
    color: '#1A73E8', 
    transition: '0.3s transform',
  },
  feedbackForm: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f4f7fa',
    padding: '5px 10px',
    borderRadius: '25px',
    border: '1px solid #e1e4e8'
  },
  input: {
    border: 'none',
    background: 'none',
    padding: '8px',
    outline: 'none',
    fontSize: '13px',
    flex: 1
  },
  sendBtn: {
    background: '#1A73E8',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: '0.3s'
  },
  bottom: { 
    textAlign: 'center', 
    color: '#777', 
    fontSize: '13px', 
    marginTop: '50px', 
    borderTop: '1px solid #eee', 
    paddingTop: '30px' 
  }
};

export default Footer;
