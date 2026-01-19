import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, Send, MapPin, CheckCircle, BookOpen, Truck, ShieldCheck, Heart, Award } from 'lucide-react';

const Footer = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedback = (e) => {
    e.preventDefault();
    alert("Shukriya! Your professional feedback has been received.");
    setFeedback("");
  };

  return (
    <footer style={styles.footer}>
      {/* --- TOP ROW: BRAND IDENTITY --- */}
      <div style={styles.content}>
        <div style={styles.brandSection}>
          <h2 style={styles.logo}>Critixo</h2>
          <p style={styles.mainDescription}>
            Critixo is not just a bookstore; it’s a community for those who believe that books can change the world. 
            From the bustling streets of Karachi to the heights of Gilgit, we deliver knowledge and imagination 
            to every corner of Pakistan. Our mission is to make reading affordable and accessible for every student, 
            professional, and dreamer.
          </p>
          <div style={styles.socials}>
            <a href="https://www.facebook.com/profile.php?id=61574169407534" target="_blank" rel="noopener noreferrer" style={styles.iconWrapper}>
              <Facebook style={styles.icon} size={22} />
            </a>
            <div style={styles.iconWrapper}><Instagram style={styles.icon} size={22} /></div>
            <div style={styles.iconWrapper}><Twitter style={styles.icon} size={22} /></div>
          </div>
        </div>
      </div>

      <div style={styles.hr} />

      {/* --- MIDDLE ROW: SERVICES & VALUES (Long Section) --- */}
      <div style={styles.gridContent}>
        <div style={styles.section}>
          <h4 style={styles.heading}>Why Choose Us?</h4>
          <div style={styles.animatedLink}><CheckCircle size={16} /> Original Quality Books</div>
          <div style={styles.animatedLink}><Truck size={16} /> Fast Delivery Nationwide</div>
          <div style={styles.animatedLink}><ShieldCheck size={16} /> Secure Payment Methods</div>
          <div style={styles.animatedLink}><Heart size={16} /> 24/7 Customer Support</div>
          <div style={styles.animatedLink}><Award size={16} /> Best Price Guarantee</div>
        </div>

        <div style={styles.section}>
          <h4 style={styles.heading}>Our Categories</h4>
          <div style={styles.animatedLink}>Urdu Literature</div>
          <div style={styles.animatedLink}>English Fiction</div>
          <div style={styles.animatedLink}>Islamic History</div>
          <div style={styles.animatedLink}>CSS & Competitive Exams</div>
          <div style={styles.animatedLink}>Self-Help & Growth</div>
          <div style={styles.animatedLink}>Children's Corner</div>
        </div>

        <div style={styles.section}>
          <h4 style={styles.heading}>Contact Support</h4>
          <p style={styles.text}><Mail size={16} color="#1A73E8" /> support@critixo.com</p>
          <p style={styles.text}><Phone size={16} color="#1A73E8" /> +92 344 8665265</p>
          <p style={styles.text}><MapPin size={16} color="#1A73E8" /> Head Office: Faisalabad, Punjab</p>
          <p style={styles.text}><BookOpen size={16} color="#1A73E8" /> Mon - Sat: 9AM - 9PM</p>
        </div>
      </div>

      <div style={styles.hr} />

      {/* --- FEEDBACK & NEWSLETTER (The Long Part) --- */}
      <div style={styles.feedbackContainer}>
        <div style={styles.feedbackTextCenter}>
          <h3 style={styles.headingCenter}>Share Your Experience</h3>
          <p style={styles.subText}>Aapka feedback hamari behtri ke liye bhot zaroori hai. Please apna qeemti mashwara niche darj karein.</p>
        </div>
        <form onSubmit={handleFeedback} style={styles.megaForm}>
          <textarea 
            placeholder="Write your detailed feedback here..." 
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            style={styles.textarea}
            required
          />
          <button type="submit" style={styles.longBtn}>
            Submit Feedback <Send size={18} style={{marginLeft: '10px'}} />
          </button>
        </form>
      </div>

      {/* --- BOTTOM EXTRA LONG SECTION --- */}
      <div style={styles.extraDetails}>
        <div style={styles.divider}></div>
        <div style={styles.bottomFlex}>
          <div style={styles.bottomInfoCard}>
            <h5 style={styles.smallHeading}>Eco-Friendly Packaging</h5>
            <p style={styles.miniText}>Hum plastic ka istemal kam se kam karte hain taake mahol ko mehfooz rakha ja sakay.</p>
          </div>
          <div style={styles.bottomInfoCard}>
            <h5 style={styles.smallHeading}>Student Discounts</h5>
            <p style={styles.miniText}>Har mahinay hum talaba ke liye makhsoos kitabon par 20% tak discount dete hain.</p>
          </div>
        </div>

        <div style={styles.copyrightSection}>
          <p style={styles.copyrightText}>
            © {new Date().getFullYear()} <strong>Critixo Store Pakistan</strong>. 
            Registered under National Book Foundation guidelines. 
            All Rights Reserved.
          </p>
          <p style={styles.designer}>Crafted with Precision by <strong>Talha Sialvi</strong></p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: { 
    background: '#FFFFFF', 
    padding: '100px 8% 50px 8%', 
    borderTop: '5px solid #1A73E8', 
    marginTop: '80px',
    color: '#333',
    fontFamily: "'Inter', 'Segoe UI', sans-serif"
  },
  content: { marginBottom: '50px' },
  brandSection: { maxWidth: '800px' },
  logo: { color: '#1A73E8', fontSize: '40px', fontWeight: '800', marginBottom: '20px' },
  mainDescription: { fontSize: '16px', lineHeight: '1.8', color: '#555', marginBottom: '30px' },
  gridContent: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    flexWrap: 'wrap', 
    gap: '50px',
    padding: '40px 0'
  },
  section: { flex: '1', minWidth: '250px' },
  heading: { fontSize: '20px', fontWeight: '700', marginBottom: '25px', color: '#111' },
  text: { display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: '#444', marginBottom: '15px' },
  animatedLink: {
    fontSize: '15px',
    color: '#555',
    marginBottom: '15px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    borderLeft: '0px solid #1A73E8',
    paddingLeft: '0px'
    // Animation logic: When you hover in real CSS, it would slide right. 
    // In React style, we keep it ready for transition.
  },
  socials: { display: 'flex', gap: '20px' },
  iconWrapper: {
    padding: '12px',
    borderRadius: '12px',
    background: '#F0F7FF',
    color: '#1A73E8',
    transition: '0.4s',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(26, 115, 232, 0.1)'
  },
  hr: { height: '1px', background: '#EEE', margin: '20px 0' },
  feedbackContainer: { background: '#F8FBFF', padding: '60px 40px', borderRadius: '24px', margin: '40px 0' },
  headingCenter: { textAlign: 'center', fontSize: '24px', color: '#1A73E8', marginBottom: '10px' },
  subText: { textAlign: 'center', color: '#666', marginBottom: '30px' },
  megaForm: { display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '600px', margin: '0 auto' },
  textarea: {
    padding: '20px',
    borderRadius: '15px',
    border: '2px solid #E0EAF5',
    fontSize: '15px',
    minHeight: '120px',
    outline: 'none',
    transition: '0.3s'
  },
  longBtn: {
    background: '#1A73E8',
    color: 'white',
    padding: '15px',
    borderRadius: '15px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '0.3s'
  },
  extraDetails: { marginTop: '60px', textAlign: 'center' },
  bottomFlex: { display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginBottom: '40px' },
  bottomInfoCard: { maxWidth: '300px', textAlign: 'left', padding: '20px', borderLeft: '3px solid #1A73E8' },
  smallHeading: { fontSize: '16px', marginBottom: '10px', color: '#1A73E8' },
  miniText: { fontSize: '13px', color: '#777' },
  copyrightSection: { borderTop: '1px solid #EEE', paddingTop: '30px' },
  copyrightText: { fontSize: '14px', color: '#888' },
  designer: { fontSize: '14px', color: '#1A73E8', marginTop: '10px' }
};

export default Footer;
