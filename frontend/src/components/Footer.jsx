// import React, { useState } from 'react';
// import { Facebook, Twitter, Instagram, Mail, Phone, Send, MapPin } from 'lucide-react';

// const Footer = () => {
//   const [feedback, setFeedback] = useState("");

//   const handleFeedback = (e) => {
//     e.preventDefault();
//     if (feedback.trim() === "") return;
    
//     console.log("User Feedback:", feedback);
//     alert("Thank you for your feedback!");
//     setFeedback("");
//   };

//   return (
//     <footer style={styles.footer}>
//       <div style={styles.content}>
        
//         {/* Section 1: Brand & About */}
//         <div style={styles.section}>
//           <h3 style={styles.logo}>Critixo</h3>
//           <p style={styles.textAbout}>
//             Pakistan's premium destination for book lovers. Read more, spend less. 
//             Your favorite bookstore online, delivering knowledge across the nation.
//           </p>
//           <div style={styles.socials}>
//             <a href="https://www.facebook.com/profile.php?id=61574169407534" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
//               <Facebook style={styles.icon} size={20} />
//             </a>
//             <a href="https://www.instagram.com/talha_sialvioffical/" target="_blank" style={styles.iconLink}>
//               <Instagram style={styles.icon} size={20} />
//             </a>
//             <a href="https://x.com/talha_sialvi9" target="_blank" style={styles.iconLink}>
//               <Twitter style={styles.icon} size={20} />
//             </a>
//           </div>
//         </div>

//         {/* Section 2: Contact Info */}
//         <div style={styles.section}>
//           <h4 style={styles.heading}>Contact Us</h4>
//           <div style={styles.contactItem}>
//             <Mail size={16} color="#1A73E8" />
//             <span style={styles.contactText}>mtalhakhansialvi786@gmail.com</span>
//           </div>
//           <div style={styles.contactItem}>
//             <Phone size={16} color="#1A73E8" />
//             <span style={styles.contactText}>+92 344 8665265</span>
//           </div>
//           <div style={styles.contactItem}>
//             <MapPin size={16} color="#1A73E8" />
//             <span style={styles.contactText}>Pakistan</span>
//           </div>
//         </div>

//         {/* Section 3: Feedback */}
//         <div style={styles.section}>
//           <h4 style={styles.heading}>Share Feedback</h4>
//           <form onSubmit={handleFeedback} style={styles.feedbackForm}>
//             <input 
//               type="text" 
//               placeholder="Your thoughts..." 
//               value={feedback}
//               onChange={(e) => setFeedback(e.target.value)}
//               style={styles.input}
//               required
//             />
//             <button type="submit" style={styles.sendBtn} title="Send Feedback">
//               <Send size={16} />
//             </button>
//           </form>
//           <p style={{fontSize: '11px', color: '#888', marginTop: '12px', lineHeight: '1.4'}}>
//             We value your suggestions to improve our store experience.
//           </p>
//         </div>
//       </div>

//       <div style={styles.bottom}>
//         <p>© 2025 <span style={{fontWeight: 'bold', color: '#1A73E8'}}>Critixo Store</span>. All Rights Reserved.</p>
//         <p style={{fontSize: '11px', marginTop: '5px', opacity: 0.8}}>Designed with ❤️ by Talha Sialvi</p>
//       </div>
//     </footer>
//   );
// };

// const styles = {
//   footer: { 
//     background: '#FFFFFF', 
//     padding: '60px 8% 30px 8%', 
//     borderTop: '1px solid #e1e4e8',
//     marginTop: '60px',
//     color: '#333',
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
//   },
//   content: { 
//     display: 'flex', 
//     justifyContent: 'space-between', 
//     flexWrap: 'wrap', 
//     gap: '30px' 
//   },
//   section: { 
//     flex: '1', 
//     minWidth: '250px',
//     marginBottom: '20px'
//   },
//   logo: { 
//     color: '#1A73E8', 
//     marginBottom: '15px', 
//     fontSize: '28px', 
//     fontWeight: '800',
//     letterSpacing: '-0.5px'
//   },
//   textAbout: {
//     color: '#666',
//     fontSize: '14px',
//     lineHeight: '1.6',
//     maxWidth: '300px'
//   },
//   heading: {
//     color: '#222',
//     fontSize: '17px',
//     fontWeight: '600',
//     marginBottom: '20px',
//     paddingBottom: '8px',
//     borderBottom: '2px solid #F1F4F9'
//   },
//   contactItem: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     marginBottom: '15px'
//   },
//   contactText: {
//     color: '#555',
//     fontSize: '14px'
//   },
//   socials: { 
//     display: 'flex', 
//     gap: '15px', 
//     marginTop: '20px' 
//   },
//   iconLink: {
//     background: '#F1F4F9',
//     width: '38px',
//     height: '38px',
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     textDecoration: 'none',
//     transition: '0.3s'
//   },
//   icon: { 
//     color: '#1A73E8', 
//   },
//   feedbackForm: {
//     display: 'flex',
//     alignItems: 'center',
//     backgroundColor: '#F1F4F9',
//     padding: '4px 6px 4px 15px',
//     borderRadius: '30px',
//     border: '1px solid #e1e4e8',
//     maxWidth: '350px'
//   },
//   input: {
//     border: 'none',
//     background: 'transparent',
//     padding: '8px 0',
//     outline: 'none',
//     fontSize: '14px',
//     flex: 1,
//     color: '#333'
//   },
//   sendBtn: {
//     background: '#1A73E8',
//     color: 'white',
//     border: 'none',
//     borderRadius: '50%',
//     width: '34px',
//     height: '34px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'pointer',
//     marginLeft: '10px'
//   },
//   bottom: { 
//     textAlign: 'center', 
//     color: '#999', 
//     fontSize: '13px', 
//     marginTop: '40px', 
//     borderTop: '1px solid #F1F4F9', 
//     paddingTop: '25px' 
//   }
// };

// export default Footer;


import React, { useState } from 'react';
import axios from 'axios'; // Axios zaroori hai
import { Facebook, Twitter, Instagram, Mail, Phone, Send, MapPin } from 'lucide-react';

const Footer = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedback = async (e) => {
    e.preventDefault();
    if (feedback.trim() === "") return;

    try {
      // Backend URL
      const API_BASE_URL = "https://critixo-mik3.vercel.app/api/books";
      
      // LocalStorage se user details uthayein (agar login ho to)
      const userEmail = localStorage.getItem('userEmail') || "Guest@critixo.com";
      const userName = localStorage.getItem('userName') || "Guest User";

      // POST Request mein message ke saath details bhej rahe hain
      await axios.post(`${API_BASE_URL}/feedback`, { 
        message: feedback,
        userEmail: userEmail,
        userName: userName,
        rating: 5 // Default rating
      });
      
      alert("Thank you! Your feedback has been received.");
      setFeedback("");
    } catch (err) {
      console.error("Feedback Error:", err);
      alert("Could not send feedback. Please try again later.");
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        
        {/* Section 1: Brand & About */}
        <div style={styles.section}>
          <h3 style={styles.logo}>Critixo</h3>
          <p style={styles.textAbout}>
            Pakistan's premium destination for book lovers. Read more, spend less. 
            Your favorite bookstore online, delivering knowledge across the nation.
          </p>
          <div style={styles.socials}>
            <a href="https://www.facebook.com/profile.php?id=61574169407534" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <Facebook style={styles.icon} size={20} />
            </a>
            <a href="https://www.instagram.com/talha_sialvioffical/" target="_blank" style={styles.iconLink}><Instagram style={styles.icon} size={20} /></a>
            <a href="https://x.com/talha_sialvi9" target="_blank" style={styles.iconLink}><Twitter style={styles.icon} size={20} /></a>
          </div>
        </div>

        {/* Section 2: Contact Info */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Contact Us</h4>
          <div style={styles.contactItem}><Mail size={16} color="#1A73E8" /><span style={styles.contactText}>mtalhakhansialvi786@gmail.com</span></div>
          <div style={styles.contactItem}><Phone size={16} color="#1A73E8" /><span style={styles.contactText}>+92 344 8665265</span></div>
          <div style={styles.contactItem}><MapPin size={16} color="#1A73E8" /><span style={styles.contactText}>Pakistan</span></div>
        </div>

        {/* Section 3: Feedback Form */}
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
            <button type="submit" style={styles.sendBtn} title="Send Feedback">
              <Send size={16} />
            </button>
          </form>
          <p style={{fontSize: '11px', color: '#888', marginTop: '12px', lineHeight: '1.4'}}>
            We value your suggestions to improve our store experience.
          </p>
        </div>
      </div>

      <div style={styles.bottom}>
        <p>© 2025 <span style={{fontWeight: 'bold', color: '#1A73E8'}}>Critixo Store</span>. All Rights Reserved.</p>
        <p style={{fontSize: '11px', marginTop: '5px', opacity: 0.8}}>Designed with ❤️ by Talha Sialvi</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: { background: '#FFFFFF', padding: '60px 8% 30px 8%', borderTop: '1px solid #e1e4e8', marginTop: '60px', color: '#333', fontFamily: 'Segoe UI, sans-serif' },
  content: { display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px' },
  section: { flex: '1', minWidth: '250px', marginBottom: '20px' },
  logo: { color: '#1A73E8', marginBottom: '15px', fontSize: '28px', fontWeight: '800' },
  textAbout: { color: '#666', fontSize: '14px', lineHeight: '1.6', maxWidth: '300px' },
  heading: { color: '#222', fontSize: '17px', fontWeight: '600', marginBottom: '20px', paddingBottom: '8px', borderBottom: '2px solid #F1F4F9' },
  contactItem: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' },
  contactText: { color: '#555', fontSize: '14px' },
  socials: { display: 'flex', gap: '15px', marginTop: '20px' },
  iconLink: { background: '#F1F4F9', width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' },
  icon: { color: '#1A73E8' },
  feedbackForm: { display: 'flex', alignItems: 'center', backgroundColor: '#F1F4F9', padding: '4px 6px 4px 15px', borderRadius: '30px', border: '1px solid #e1e4e8', maxWidth: '350px' },
  input: { border: 'none', background: 'transparent', padding: '8px 0', outline: 'none', fontSize: '14px', flex: 1, color: '#333' },
  sendBtn: { background: '#1A73E8', color: 'white', border: 'none', borderRadius: '50%', width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', marginLeft: '10px' },
  bottom: { textAlign: 'center', color: '#999', fontSize: '13px', marginTop: '40px', borderTop: '1px solid #F1F4F9', paddingTop: '25px' }
};

export default Footer;
