import React, { useState } from 'react';
import axios from 'axios';
import { BookOpen, CheckCircle, Info } from 'lucide-react';

const RequestBook = () => {
    const [form, setForm] = useState({ bookName: '', description: '' });
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/books/request', form);
            setSent(true);
            setForm({ bookName: '', description: '' });
            setTimeout(() => setSent(false), 5000);
        } catch (err) {
            alert("Request failed! Check your connection.");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <div style={styles.headerIcon}><BookOpen size={35} color="#0056b3" /></div>
                <h2 style={styles.title}>Can't find a specific book?</h2>
                <p style={styles.subtitle}>Let us know the title or author, and Critixo will source it for you.</p>

                {sent ? (
                    <div style={styles.success}>
                        <CheckCircle size={40} />
                        <h3>Request Submitted!</h3>
                        <p>We'll notify you once the book is available.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={styles.form}>
                        <div style={styles.inputWrapper}>
                            <input 
                                type="text" 
                                placeholder="Book Title / Author Name" 
                                value={form.bookName} 
                                onChange={(e)=>setForm({...form, bookName: e.target.value})} 
                                required 
                                style={styles.input} 
                            />
                        </div>
                        <div style={styles.inputWrapper}>
                            <textarea 
                                placeholder="Additional details (Edition, Language, etc.)" 
                                value={form.description} 
                                onChange={(e)=>setForm({...form, description: e.target.value})} 
                                required 
                                style={styles.textarea}
                            ></textarea>
                        </div>
                        <button type="submit" style={styles.btn}>Submit Request</button>
                        <p style={styles.note}><Info size={12}/> Requests usually take 2-4 business days to process.</p>
                    </form>
                )}
            </div>
        </div>
    );
};

const styles = {
    container: { 
        padding: '140px 5%', 
        background: '#f1efe2', // Red/Blue ki jagah aapka bataya hua white/cream background
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    card: { 
        background: 'white', 
        padding: '45px', 
        borderRadius: '24px', 
        boxShadow: '0 20px 40px rgba(0,0,0,0.05)', 
        width: '100%', 
        maxWidth: '550px', 
        textAlign: 'center' 
    },
    headerIcon: { 
        marginBottom: '20px', 
        display: 'inline-block', 
        padding: '15px', 
        background: '#eef4ff', // Light blue tint to match #1A73E8
        borderRadius: '15px' 
    },
    title: { 
        color: '#1A73E8', // Title color changed to your Blue
        fontSize: '26px', 
        fontWeight: '900', 
        marginBottom: '10px' 
    },
    subtitle: { color: '#666', lineHeight: '1.5', fontSize: '15px' },
    form: { display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px' },
    input: { 
        width: '100%', 
        padding: '15px', 
        borderRadius: '12px', 
        border: '1px solid #ddd', 
        outline: 'none', 
        fontSize: '15px', 
        boxSizing: 'border-box',
        background: '#ffffff'
    },
    textarea: { 
        width: '100%', 
        padding: '15px', 
        borderRadius: '12px', 
        border: '1px solid #ddd', 
        height: '130px', 
        outline: 'none', 
        fontSize: '15px', 
        resize: 'none', 
        boxSizing: 'border-box',
        background: '#ffffff'
    },
    btn: { 
        padding: '16px', 
        background: '#1A73E8', // Button color changed to your Blue
        color: 'white', 
        border: 'none', 
        borderRadius: '12px', 
        fontWeight: 'bold', 
        cursor: 'pointer', 
        fontSize: '16px' 
    },
    success: { padding: '40px 0', color: '#166534' },
    note: { fontSize: '12px', color: '#888', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }
};

export default RequestBook;
