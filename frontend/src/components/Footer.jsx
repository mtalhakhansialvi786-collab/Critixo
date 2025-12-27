import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <div style={styles.section}>
          <h3 style={styles.logo}>CRITIXO</h3>
          <p style={styles.text}>Pakistan's premium destination for book lovers. Quality and authenticity guaranteed.</p>
        </div>
        
        <div style={styles.section}>
          <h4>Contact Us</h4>
          <p style={styles.text}><Mail size={16} /> support@critixo.com</p>
          <p style={styles.text}><Phone size={16} /> +92 300 0000000</p>
        </div>

        <div style={styles.section}>
          <h4>Follow Us</h4>
          <div style={styles.socials}>
            <Facebook style={styles.icon} />
            <Instagram style={styles.icon} />
            <Twitter style={styles.icon} />
          </div>
        </div>
      </div>
      <div style={styles.bottom}>
        © 2025 Critixo Store. All Rights Reserved. Designed by Mr-Pro.
      </div>
    </footer>
  );
};

const styles = {
  footer: { background: '#0a0a0a', padding: '50px 5% 20px 5%', borderTop: '1px solid #222', marginTop: '50px' },
  content: { display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px' },
  section: { flex: '1', minWidth: '200px' },
  logo: { color: '#ff4d4d', marginBottom: '15px', fontSize: '22px' },
  text: { color: '#888', fontSize: '14px', lineHeight: '1.6', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' },
  socials: { display: 'flex', gap: '15px', marginTop: '10px' },
  icon: { cursor: 'pointer', color: '#ff4d4d', transition: '0.3s' },
  bottom: { textAlign: 'center', color: '#444', fontSize: '12px', marginTop: '40px', borderTop: '1px solid #222', paddingTop: '20px' }
};

export default Footer;