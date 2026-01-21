import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Trash2, Edit3, PlusCircle, CheckCircle } from 'lucide-react';

const Admin = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [requests, setRequests] = useState([]);
  const [isEditing, setIsEditing] = useState(null); 
  const [book, setBook] = useState({ title: '', description: '', price: '', language: 'Urdu', image: '', reviews: '' });

  // Live Backend Base URL
  const API_BASE_URL = "https://critixo-mik3.vercel.app/api/books";

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail !== "admin`@critixo.com") {
      alert("Access Denied!");
      navigate('/');
    }
    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    try {
      // TABDEELI: Live links istemal kiye hain
      const bRes = await axios.get(`${API_BASE_URL}/all`);
      const rRes = await axios.get(`${API_BASE_URL}/requests`);
      setBooks(bRes.data);
      setRequests(rRes.data);
    } catch (err) { console.log(err); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        // TABDEELI: localhost hata kar live link dala hai
        await axios.put(`${API_BASE_URL}/edit/${isEditing}`, book);
        alert("Book Updated!");
      } else {
        // TABDEELI: localhost hata kar live link dala hai
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
        // TABDEELI: localhost hata kar live link dala hai
        await axios.delete(`${API_BASE_URL}/delete/${id}`);
        fetchData();
      } catch (err) { alert("Delete failed!"); }
    }
  };

  return (
    <div style={{ padding: '120px 5% 50px 5%', color: 'white' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>ADMIN CONTROL CENTER</h2>
      
      <div style={styles.topGrid}>
        {/* FORM SECTION */}
        <section style={styles.sectionCard}>
          <h3 style={{ color: '#ff4d4d', marginBottom: '20px' }}>
            {isEditing ? <><Edit3 size={20} /> Edit Book</> : <><PlusCircle size={20} /> Add New Book</>}
          </h3>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input type="text" placeholder="Title" value={book.title} onChange={(e) => setBook({...book, title: e.target.value})} required style={styles.input} />
            <textarea placeholder="Description" value={book.description} onChange={(e) => setBook({...book, description: e.target.value})} required style={styles.textarea} />
            <input type="number" placeholder="Price" value={book.price} onChange={(e) => setBook({...book, price: e.target.value})} required style={styles.input} />
            <input type="text" placeholder="Image URL" value={book.image} onChange={(e) => setBook({...book, image: e.target.value})} required style={styles.input} />
            <button type="submit" style={styles.btn}>{isEditing ? "Update Book" : "Upload Book"}</button>
            {isEditing && <button onClick={() => {setIsEditing(null); setBook({title:'',description:'',price:'',language:'Urdu',image:'',reviews:''})}} style={{...styles.btn, background: '#444'}}>Cancel</button>}
          </form>
        </section>

        {/* REQUESTS SECTION */}
        <section style={styles.sectionCard}>
          <h3 style={{ color: '#ff4d4d', marginBottom: '20px' }}>User Requests</h3>
          <div style={{ maxHeight: '350px', overflowY: 'auto' }}>
            {requests.map(r => (
              <div key={r._id} style={styles.reqItem}>
                <strong>{r.bookName}</strong>
                <p style={{fontSize:'12px', color:'#888'}}>{r.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* INVENTORY SECTION */}
      <h3 style={{ margin: '40px 0 20px 0', color: '#ff4d4d' }}>Current Inventory ({books.length})</h3>
      <div style={styles.inventoryGrid}>
        {books.map(b => (
          <div key={b._id} style={styles.bookRow}>
            <img src={b.image} alt="" style={styles.miniImg} />
            <div style={{flex: 1, marginLeft: '15px'}}>
              <h4 style={{margin: 0}}>{b.title}</h4>
              <p style={{color: '#ff4d4d', margin: '5px 0'}}>Rs. {b.price}</p>
            </div>
            <div style={styles.actions}>
              <Edit3 size={18} color="#f9cb28" style={{cursor:'pointer'}} onClick={() => handleEdit(b)} />
              <Trash2 size={18} color="#ff4d4d" style={{cursor:'pointer'}} onClick={() => handleDelete(b._id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  topGrid: { display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '30px' },
  sectionCard: { 
    background: '#ffffff', // Card background pure white for contrast
    padding: '25px', 
    borderRadius: '15px', 
    border: '1px solid #ddd' // Light border instead of dark
  },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  input: { 
    padding: '12px', 
    borderRadius: '8px', 
    background: '#f1efe2', // White/Cream background
    border: '1px solid #ccc', 
    color: '#333', // Dark text for readability
    outline: 'none' 
  },
  textarea: { 
    padding: '12px', 
    height: '80px', 
    borderRadius: '8px', 
    background: '#f1efe2', 
    border: '1px solid #ccc', 
    color: '#333', 
    resize: 'none' 
  },
  btn: { 
    padding: '15px', 
    background: '#1A73E8', // Red changed to Blue
    color: 'white', 
    border: 'none', 
    borderRadius: '8px', 
    fontWeight: 'bold', 
    cursor: 'pointer' 
  },
  reqItem: { 
    padding: '10px', 
    borderBottom: '1px solid #ddd', 
    marginBottom: '10px',
    color: '#333' 
  },
  inventoryGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '15px' },
  bookRow: { 
    display: 'flex', 
    alignItems: 'center', 
    background: '#ffffff', 
    padding: '15px', 
    borderRadius: '12px', 
    border: '1px solid #ddd' 
  },
  miniImg: { width: '50px', height: '70px', objectFit: 'cover', borderRadius: '5px' },
  actions: { display: 'flex', gap: '15px' }
};

export default Admin;
