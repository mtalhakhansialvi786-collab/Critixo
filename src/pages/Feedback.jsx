import React, { useState } from 'react';
import axios from 'axios';
import { Star, Send, Smile } from 'lucide-react';

const Feedback = () => {
    const [form, setForm] = useState({ userName: '', userEmail: '', rating: 5, message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/books/feedback', form);
            setStatus('success');
            setForm({ userName: '', userEmail: '', rating: 5, message: '' });
            setTimeout(() => setStatus(''), 4000);
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <div style={styles.iconCircle}><Smile size={40} color="white" /></div>
                <h2 style={styles.title}>Your Feedback Matters</h2>
                <p style={styles.subtitle}>Help us make Critixo better for the community.</p>
                
                {status === 'success' && <div style={styles.successMsg}>Thank you! Feedback sent.</div>}
                
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        value={form.userName} 
                        onChange={(e)=>setForm({...form, userName: e.target.value})} 
                        required 
                        style={styles.input} 
                    />
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        value={form.userEmail} 
                        onChange={(e)=>setForm({...form, userEmail: e.target.value})} 
                        required 
                        style={styles.input} 
                    />
                    
                    <div style={styles.ratingBox}>
                        <span style={{fontSize: '14px', fontWeight: '600'}}>Rating:</span>
                        <div style={{display: 'flex', gap: '5px'}}>
                            {[1,2,3,4,5].map(num => (
                                <Star 
                                    key={num} 
                                    size={22} 
                                    fill={form.rating >= num ? "#0056b3" : "none"} 
                                    color="#0056b3" 
                                    style={{cursor: 'pointer'}}
                                    onClick={()=>setForm({...form, rating: num})} 
                                />
                            ))}
                        </div>
                    </div>

                    <textarea 
                        placeholder="Share your experience..." 
                        value={form.message} 
                        onChange={(e)=>setForm({...form, message: e.target.value})} 
                        required 
                        style={styles.textarea}
                    ></textarea>

                    <button type="submit" style={styles.btn}>
                        Submit Feedback <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: { padding: '140px 5% 60px 5%', background: '#f8faff', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' },
    card: { background: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 15px 35px rgba(0,86,179,0.08)', width: '100%', maxWidth: '500px', textAlign: 'center', border: '1px solid #eef2ff' },
    iconCircle: { background: '#0056b3', width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' },
    title: { color: '#1a1a1a', fontSize: '24px', fontWeight: '800', marginBottom: '8px' },
    subtitle: { color: '#666', marginBottom: '30px', fontSize: '14px' },
    form: { display: 'flex', flexDirection: 'column', gap: '15px' },
    input: { padding: '14px', borderRadius: '12px', border: '1px solid #dbeafe', outline: 'none', background: '#fcfdff', fontSize: '14px' },
    ratingBox: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 5px', color: '#444' },
    textarea: { padding: '14px', borderRadius: '12px', border: '1px solid #dbeafe', height: '120px', resize: 'none', outline: 'none', background: '#fcfdff', fontSize: '14px' },
    btn: { padding: '16px', background: '#0056b3', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'center', gap: '10px', fontSize: '16px', transition: '0.3s' },
    successMsg: { background: '#dcfce7', color: '#166534', padding: '12px', borderRadius: '10px', marginBottom: '20px', fontSize: '14px', fontWeight: '600' }
};

export default Feedback;