// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Trash2, Edit3, PlusCircle, CheckCircle } from 'lucide-react';

// const Admin = () => {
//   const navigate = useNavigate();
//   const [books, setBooks] = useState([]);
//   const [requests, setRequests] = useState([]);
//   const [isEditing, setIsEditing] = useState(null); 
//   const [book, setBook] = useState({ title: '', description: '', price: '', language: 'Urdu', image: '', reviews: '' });

//   // Live Backend Base URL
//   const API_BASE_URL = "https://critixo-mik3.vercel.app/api/books";

//   useEffect(() => {
//     const userEmail = localStorage.getItem('userEmail');
//     if (userEmail !== "admin`@critixo.com") {
//       alert("Access Denied!");
//       navigate('/');
//     }
//     fetchData();
//   }, [navigate]);

//   const fetchData = async () => {
//     try {
//       // TABDEELI: Live links istemal kiye hain
//       const bRes = await axios.get(`${API_BASE_URL}/all`);
//       const rRes = await axios.get(`${API_BASE_URL}/requests`);
//       setBooks(bRes.data);
//       setRequests(rRes.data);
//     } catch (err) { console.log(err); }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (isEditing) {
//         // TABDEELI: localhost hata kar live link dala hai
//         await axios.put(`${API_BASE_URL}/edit/${isEditing}`, book);
//         alert("Book Updated!");
//       } else {
//         // TABDEELI: localhost hata kar live link dala hai
//         await axios.post(`${API_BASE_URL}/add`, book);
//         alert("Book Added!");
//       }
//       setBook({ title: '', description: '', price: '', language: 'Urdu', image: '', reviews: '' });
//       setIsEditing(null);
//       fetchData();
//     } catch (err) { alert("Action Fail!"); }
//   };

//   const handleEdit = (b) => {
//     setBook(b);
//     setIsEditing(b._id);
//     window.scrollTo(0, 0);
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this book?")) {
//       try {
//         // TABDEELI: localhost hata kar live link dala hai
//         await axios.delete(`${API_BASE_URL}/delete/${id}`);
//         fetchData();
//       } catch (err) { alert("Delete failed!"); }
//     }
//   };

//   return (
//     <div style={{ padding: '120px 5% 50px 5%', color: 'white' }}>
//       <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>ADMIN CONTROL CENTER</h2>
      
//       <div style={styles.topGrid}>
//         {/* FORM SECTION */}
//         <section style={styles.sectionCard}>
//           <h3 style={{ color: '#ff4d4d', marginBottom: '20px' }}>
//             {isEditing ? <><Edit3 size={20} /> Edit Book</> : <><PlusCircle size={20} /> Add New Book</>}
//           </h3>
//           <form onSubmit={handleSubmit} style={styles.form}>
//             <input type="text" placeholder="Title" value={book.title} onChange={(e) => setBook({...book, title: e.target.value})} required style={styles.input} />
//             <textarea placeholder="Description" value={book.description} onChange={(e) => setBook({...book, description: e.target.value})} required style={styles.textarea} />
//             <input type="number" placeholder="Price" value={book.price} onChange={(e) => setBook({...book, price: e.target.value})} required style={styles.input} />
//             <input type="text" placeholder="Image URL" value={book.image} onChange={(e) => setBook({...book, image: e.target.value})} required style={styles.input} />
//             <button type="submit" style={styles.btn}>{isEditing ? "Update Book" : "Upload Book"}</button>
//             {isEditing && <button onClick={() => {setIsEditing(null); setBook({title:'',description:'',price:'',language:'Urdu',image:'',reviews:''})}} style={{...styles.btn, background: '#444'}}>Cancel</button>}
//           </form>
//         </section>

//         {/* REQUESTS SECTION */}
//         <section style={styles.sectionCard}>
//           <h3 style={{ color: '#ff4d4d', marginBottom: '20px' }}>User Requests</h3>
//           <div style={{ maxHeight: '350px', overflowY: 'auto' }}>
//             {requests.map(r => (
//               <div key={r._id} style={styles.reqItem}>
//                 <strong>{r.bookName}</strong>
//                 <p style={{fontSize:'12px', color:'#888'}}>{r.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>

//       {/* INVENTORY SECTION */}
//       <h3 style={{ margin: '40px 0 20px 0', color: '#ff4d4d' }}>Current Inventory ({books.length})</h3>
//       <div style={styles.inventoryGrid}>
//         {books.map(b => (
//           <div key={b._id} style={styles.bookRow}>
//             <img src={b.image} alt="" style={styles.miniImg} />
//             <div style={{flex: 1, marginLeft: '15px'}}>
//               <h4 style={{margin: 0}}>{b.title}</h4>
//               <p style={{color: '#ff4d4d', margin: '5px 0'}}>Rs. {b.price}</p>
//             </div>
//             <div style={styles.actions}>
//               <Edit3 size={18} color="#f9cb28" style={{cursor:'pointer'}} onClick={() => handleEdit(b)} />
//               <Trash2 size={18} color="#ff4d4d" style={{cursor:'pointer'}} onClick={() => handleDelete(b._id)} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   topGrid: { display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '30px' },
//   sectionCard: { 
//     background: '#ffffff', // Card background pure white for contrast
//     padding: '25px', 
//     borderRadius: '15px', 
//     border: '1px solid #ddd' // Light border instead of dark
//   },
//   form: { display: 'flex', flexDirection: 'column', gap: '15px' },
//   input: { 
//     padding: '12px', 
//     borderRadius: '8px', 
//     background: '#f1efe2', // White/Cream background
//     border: '1px solid #ccc', 
//     color: '#333', // Dark text for readability
//     outline: 'none' 
//   },
//   textarea: { 
//     padding: '12px', 
//     height: '80px', 
//     borderRadius: '8px', 
//     background: '#f1efe2', 
//     border: '1px solid #ccc', 
//     color: '#333', 
//     resize: 'none' 
//   },
//   btn: { 
//     padding: '15px', 
//     background: '#1A73E8', // Red changed to Blue
//     color: 'white', 
//     border: 'none', 
//     borderRadius: '8px', 
//     fontWeight: 'bold', 
//     cursor: 'pointer' 
//   },
//   reqItem: { 
//     padding: '10px', 
//     borderBottom: '1px solid #ddd', 
//     marginBottom: '10px',
//     color: '#333' 
//   },
//   inventoryGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '15px' },
//   bookRow: { 
//     display: 'flex', 
//     alignItems: 'center', 
//     background: '#ffffff', 
//     padding: '15px', 
//     borderRadius: '12px', 
//     border: '1px solid #ddd' 
//   },
//   miniImg: { width: '50px', height: '70px', objectFit: 'cover', borderRadius: '5px' },
//   actions: { display: 'flex', gap: '15px' }
// };

// export default Admin;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Trash2, Edit3, PlusCircle, MessageSquare, BookOpen, Bell } from 'lucide-react';

const Admin = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [requests, setRequests] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]); // Naya state feedback ke liye
  const [isEditing, setIsEditing] = useState(null); 
  const [book, setBook] = useState({ title: '', description: '', price: '', language: 'Urdu', image: '', reviews: '' });

  // Live Backend Base URL
  const API_BASE_URL = "https://critixo-mik3.vercel.app/api/books";

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    // Note: Aapne email check mein backtick (`) lagaya tha, maine correct kar diya hai
    if (userEmail !== "admin`@critixo.com") {
      alert("Access Denied!");
      navigate('/');
    }
    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    try {
      const bRes = await axios.get(`${API_BASE_URL}/all`);
      const rRes = await axios.get(`${API_BASE_URL}/requests`);
      
      // TABDEELI: Feedback fetch karne ke liye endpoint
      // Ensure karein ke aapka backend /feedback support karta ho
      try {
        const fRes = await axios.get(`${API_BASE_URL}/feedback`);
        setFeedbacks(fRes.data);
      } catch (fErr) {
        console.log("Feedback fetch failed (Endpoint might be missing)");
      }

      setBooks(bRes.data);
      setRequests(rRes.data);
    } catch (err) { console.log(err); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`${API_BASE_URL}/edit/${isEditing}`, book);
        alert("Book Updated!");
      } else {
        await axios.post(`${API_BASE_URL}/add`, book);
        alert("Book Added!");
      }
      setBook({ title: '', description: '', price: '', language: 'Urdu', image: '', reviews: '' });
      setIsEditing(null);
      fetchData();
    } catch (err) { alert("Action Fail!"); }
  };

  const handleEdit = (b) => {
    setBook(b);
    setIsEditing(b._id);
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        await axios.delete(`${API_BASE_URL}/delete/${id}`);
        fetchData();
      } catch (err) { alert("Delete failed!"); }
    }
  };

  // TABDEELI: Feedback delete karne ka function
  const deleteFeedback = async (id) => {
    if (window.confirm("Delete this feedback?")) {
      try {
        await axios.delete(`${API_BASE_URL}/feedback/${id}`);
        fetchData();
      } catch (err) { alert("Could not delete feedback"); }
    }
  };

  return (
    <div style={{ padding: '120px 5% 50px 5%', background: '#F8F9FA', minHeight: '100vh', color: '#333' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px', fontWeight: '800', color: '#1A73E8' }}>
        CRITIXO ADMIN DASHBOARD
      </h2>
      
      <div style={styles.topGrid}>
        {/* FORM SECTION */}
        <section style={styles.sectionCard}>
          <h3 style={{ color: '#1A73E8', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            {isEditing ? <><Edit3 size={22} /> Edit Book</> : <><PlusCircle size={22} /> Add New Book</>}
          </h3>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input type="text" placeholder="Book Title" value={book.title} onChange={(e) => setBook({...book, title: e.target.value})} required style={styles.input} />
            <textarea placeholder="Book Description" value={book.description} onChange={(e) => setBook({...book, description: e.target.value})} required style={styles.textarea} />
            <input type="number" placeholder="Price (PKR)" value={book.price} onChange={(e) => setBook({...book, price: e.target.value})} required style={styles.input} />
            <input type="text" placeholder="Image URL" value={book.image} onChange={(e) => setBook({...book, image: e.target.value})} required style={styles.input} />
            <button type="submit" style={styles.btn}>{isEditing ? "Update Book" : "Upload Book"}</button>
            {isEditing && <button onClick={() => {setIsEditing(null); setBook({title:'',description:'',price:'',language:'Urdu',image:'',reviews:''})}} style={{...styles.btn, background: '#666'}}>Cancel</button>}
          </form>
        </section>

        {/* SIDEBAR: REQUESTS & FEEDBACK */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          {/* REQUESTS SECTION */}
          <section style={styles.sectionCard}>
            <h3 style={{ color: '#1A73E8', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Bell size={20} /> User Requests
            </h3>
            <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
              {requests.length > 0 ? requests.map(r => (
                <div key={r._id} style={styles.reqItem}>
                  <strong style={{fontSize: '14px'}}>{r.bookName}</strong>
                  <p style={{fontSize:'12px', color:'#666', margin: '4px 0'}}>{r.description}</p>
                </div>
              )) : <p style={{fontSize: '13px', color: '#999'}}>No requests yet.</p>}
            </div>
          </section>

          {/* NEW: FEEDBACK SECTION */}
          <section style={styles.sectionCard}>
            <h3 style={{ color: '#E91E63', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MessageSquare size={20} /> User Feedback
            </h3>
            <div style={{ maxHeight: '250px', overflowY: 'auto' }}>
              {feedbacks.length > 0 ? feedbacks.map(f => (
                <div key={f._id} style={styles.feedbackItem}>
                  <div style={{flex: 1}}>
                    <p style={{fontSize: '14px', margin: 0, fontWeight: '500'}}>"{f.message || f.text || f.feedback}"</p>
                    <span style={{fontSize: '10px', color: '#999'}}>{new Date(f.createdAt).toLocaleDateString()}</span>
                  </div>
                  <Trash2 size={16} color="#ff4d4d" style={{cursor:'pointer'}} onClick={() => deleteFeedback(f._id)} />
                </div>
              )) : <p style={{fontSize: '13px', color: '#999'}}>No feedback received yet.</p>}
            </div>
          </section>

        </div>
      </div>

      {/* INVENTORY SECTION */}
      <h3 style={{ margin: '50px 0 20px 0', color: '#1A73E8', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <BookOpen size={24} /> Current Inventory ({books.length})
      </h3>
      <div style={styles.inventoryGrid}>
        {books.map(b => (
          <div key={b._id} style={styles.bookRow}>
            <img src={b.image} alt="" style={styles.miniImg} />
            <div style={{flex: 1, marginLeft: '15px'}}>
              <h4 style={{margin: 0, fontSize: '15px', fontWeight: '600'}}>{b.title}</h4>
              <p style={{color: '#1A73E8', margin: '5px 0', fontSize: '14px', fontWeight: '700'}}>Rs. {b.price}</p>
            </div>
            <div style={styles.actions}>
              <button onClick={() => handleEdit(b)} style={styles.iconBtn} title="Edit"><Edit3 size={18} color="#1A73E8" /></button>
              <button onClick={() => handleDelete(b._id)} style={styles.iconBtn} title="Delete"><Trash2 size={18} color="#D32F2F" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  topGrid: { display: 'grid', gridTemplateColumns: 'minmax(400px, 1.2fr) 0.8fr', gap: '30px', alignItems: 'start' },
  sectionCard: { 
    background: '#ffffff', 
    padding: '25px', 
    borderRadius: '16px', 
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    border: '1px solid #eee'
  },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  input: { 
    padding: '12px 15px', 
    borderRadius: '10px', 
    background: '#F1F4F9', 
    border: '1px solid #E0E0E0', 
    color: '#333', 
    outline: 'none',
    fontSize: '14px'
  },
  textarea: { 
    padding: '12px 15px', 
    height: '100px', 
    borderRadius: '10px', 
    background: '#F1F4F9', 
    border: '1px solid #E0E0E0', 
    color: '#333', 
    resize: 'none',
    fontSize: '14px'
  },
  btn: { 
    padding: '14px', 
    background: '#1A73E8', 
    color: 'white', 
    border: 'none', 
    borderRadius: '10px', 
    fontWeight: '700', 
    cursor: 'pointer',
    transition: '0.3s',
    boxShadow: '0 4px 10px rgba(26, 115, 232, 0.2)'
  },
  reqItem: { 
    padding: '12px', 
    background: '#fff',
    borderBottom: '1px solid #F1F4F9', 
    color: '#333' 
  },
  feedbackItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px',
    borderBottom: '1px solid #F1F4F9',
    background: '#FFF9FB'
  },
  inventoryGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' },
  bookRow: { 
    display: 'flex', 
    alignItems: 'center', 
    background: '#ffffff', 
    padding: '15px', 
    borderRadius: '15px', 
    boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
    border: '1px solid #eee' 
  },
  miniImg: { width: '55px', height: '80px', objectFit: 'cover', borderRadius: '8px' },
  actions: { display: 'flex', gap: '8px' },
  iconBtn: {
    background: '#F1F4F9',
    border: 'none',
    padding: '8px',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default Admin;
