// import React from 'react';
// import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer style={styles.footer}>
//       <div style={styles.content}>
//         <div style={styles.section}>
//           <h3 style={styles.logo}>Critixo</h3>
//           <p style={styles.text}>Pakistan's premium destination for book lovers. Read more, spend less. Your favorite bookstore online.</p> 
//         </div>
        
//         <div style={styles.section}>
//           <h4 style={{ marginBottom: '15px' }}>Contact Us</h4>
//           <p style={styles.text}><Mail size={16} color="#1A73E8" /> support@critixo.com</p>
//           <p style={styles.text}><Phone size={16} color="#1A73E8" /> +92 344 8665265</p>
//         </div>

//         <div style={styles.section}>
//           <h4 style={{ marginBottom: '15px' }}>Follow Us</h4>
//           <div style={styles.socials}>
//             {/* Facebook link added here */}
//             <a href="https://www.facebook.com/profile.php?id=61574169407534" target="_blank" rel="noopener noreferrer">
//               <Facebook style={styles.icon} />
//             </a>
//             <Instagram style={styles.icon} />
//             <Twitter style={styles.icon} />
//           </div>
//         </div>
//       </div>
//       <div style={styles.bottom}>
//         © 2025 Critixo Store. All Rights Reserved. Designed by Talha Sialvi
//       </div>
//     </footer>
//   );
// };

// const styles = {
//   footer: { 
//     background: '#FFFFFF', 
//     padding: '50px 5% 20px 5%', 
//     borderTop: '1px solid #ddd', 
//     marginTop: '50px',
//     color: '#333'
//   },
//   content: { display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px' },
//   section: { flex: '1', minWidth: '200px' },
//   logo: { color: '#1A73E8', marginBottom: '15px', fontSize: '22px' },
//   text: { 
//     color: '#444', 
//     fontSize: '14px', 
//     lineHeight: '1.6', 
//     display: 'flex', 
//     alignItems: 'center', 
//     gap: '10px', 
//     marginBottom: '10px' 
//   },
//   socials: { display: 'flex', gap: '15px', marginTop: '10px' },
//   icon: { cursor: 'pointer', color: '#1A73E8', transition: '0.3s' },
//   bottom: { 
//     textAlign: 'center', 
//     color: '#666', 
//     fontSize: '12px', 
//     marginTop: '40px', 
//     borderTop: '1px solid #ddd', 
//     paddingTop: '20px' 
//   }
// };

// export default Footer;
import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, Send, MapPin, ArrowRight } from 'lucide-react';

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
        {/* Section 1: Brand Info */}
        <div style={styles.section}>
          <h3 style={styles.logo}>Critixo</h3>
          <p style={styles.text}>
            Pakistan's premium destination for book lovers. Read more, spend less. 
            Your favorite bookstore online, bringing knowledge to your doorstep.
          </p>
          <div style={styles.socials}>
            <a href="https://www.facebook.com/profile.php?id=61574169407534" target="_blank" rel="noopener noreferrer" style={styles.iconWrapper}>
              <Facebook style={styles.icon} size={20} />
            </a>
            <div style={styles.iconWrapper}><Instagram style={styles.icon} size={20} /></div>
            <div style={styles.iconWrapper}><Twitter style={styles.icon} size={20} /></div>
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Quick Navigation</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}><ArrowRight size={14} color="#1A73E8" /> Home</li>
            <li style={styles.listItem}><ArrowRight size={14} color="#1A73E8" /> All Books</li>
            <li style={styles.listItem}><ArrowRight size={14} color="#1A73E8" /> Best Sellers</li>
            <li style={styles.listItem}><ArrowRight size={14} color="#1A73E8" /> Privacy Policy</li>
          </ul>
        </div>

        {/* Section 3: Contact & Address */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Contact Details</h4>
          <p style={styles.text}><Mail size={16} color="#1A73E8" /> support@critixo.com</p>
          <p style={styles.text}><Phone size={16} color="#1A73E8" /> +92 344 8665265</p>
          <p style={styles.text}><MapPin size={16} color="#1A73E8" /> Faisalabad, Punjab, Pakistan</p>
        </div>

        {/* Section 4: Feedback & Newsletter */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Send Us Feedback</h4>
          <form onSubmit={handleFeedback} style={styles.feedbackForm}>
            <input 
              type="text" 
              placeholder="Your feedback..." 
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.sendBtn}>
              <Send size={18} color="#FFFFFF" />
            </button>
          </form>
          <p style={{...styles.text, fontSize: '11px', marginTop: '10px', color: '#888'}}>
            We value your suggestions to improve our service.
          </p>
        </div>
      </div>

      <div style={styles.bottom}>
        <div style={styles.divider}></div>
        <p style={styles.copyright}>
          © {new Date().getFullYear()} <strong>Critixo Store</strong>. All Rights Reserved. 
          <span style={{display: 'block', marginTop: '5px'}}>Designed with ❤️ by Talha Sialvi</span>
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: { 
    background: '#FFFFFF', 
    padding: '70px 8% 30px 8%', 
    borderTop: '2px solid #F0F0F0', 
    marginTop: '60px',
    color: '#333',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
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
    color: '#333',
    fontSize: '18px',
    marginBottom: '20px',
    fontWeight: '600',
    position: 'relative'
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
    transition: '0.3s transform ease',
    // Hover effect is handled by CSS usually, but adding transition here
  },
  socials: { display: 'flex', gap: '15px', marginTop: '20px' },
  iconWrapper: {
    padding: '8px',
    borderRadius: '50%',
    background: '#F0F7FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.3s all ease',
    cursor: 'pointer'
  },
  icon: { color: '#1A73E8' },
  feedbackForm: {
    display: 'flex',
    alignItems: 'center',
    background: '#F8F9FA',
    borderRadius: '30px',
    padding: '5px 5px 5px 15px',
    border: '1px solid #E0E0E0'
  },
  input: {
    border: 'none',
    background: 'transparent',
    outline: 'none',
    fontSize: '14px',
    width: '100%',
    color: '#333'
  },
  sendBtn: {
    background: '#1A73E8',
    border: 'none',
    borderRadius: '50%',
    width: '35px',
    height: '35px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: '0.3s'
  },
  bottom: { 
    marginTop: '50px',
    textAlign: 'center'
  },
  divider: {
    height: '1px',
    background: 'linear-gradient(to right, transparent, #ddd, transparent)',
    marginBottom: '25px'
  },
  copyright: { 
    color: '#777', 
    fontSize: '13px',
    lineHeight: '1.5'
  }
};

export default Footer;
