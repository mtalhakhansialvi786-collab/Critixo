import React, { useState } from 'react';
import axios from 'axios';
import { Eye, EyeOff, LogIn, Mail, Lock } from 'lucide-react';
import { auth, googleProvider, signInWithPopup } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom'; // navigate import kiya

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // navigate hook setup

    // Live Backend URL
    const API_URL = "https://critixo-mik3.vercel.app/api/auth/login";

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            localStorage.setItem('adminToken', 'google-' + result.user.uid);
            localStorage.setItem('userName', result.user.displayName);
            localStorage.setItem('userEmail', result.user.email);
            
            alert(`Welcome ${result.user.displayName}!`);
            navigate("/"); // window.location ki jagah navigate use kiya
        } catch (error) {
            console.error("Google Auth Error:", error);
            alert("Google Login Failed! Check internet and Firebase settings.");
        }
    };

    const handleAdminLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(API_URL, { 
                email: email.trim(), 
                password: password 
            });
            localStorage.setItem('adminToken', res.data.token);
            localStorage.setItem('userEmail', email.trim());
            localStorage.setItem('userName', 'Admin');
            
            alert("Admin Access Granted!");
            navigate("/admin"); // Yahan 404 se bachne ke liye navigate use kiya
        } catch (err) {
            console.error("Login Error:", err);
            alert(err.response?.data?.message || "Server band hai ya credentials ghalat hain!");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Critixo Portal</h2>
                <p style={styles.subtitle}>Sign in to your account</p>

                <form onSubmit={handleAdminLogin} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <Mail size={18} color="#888" />
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            style={styles.input} 
                            onChange={(e)=>setEmail(e.target.value)} 
                            required 
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <Lock size={18} color="#888" />
                        <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="Password" 
                            style={styles.input} 
                            onChange={(e)=>setPassword(e.target.value)} 
                            required 
                        />
                        <span onClick={() => setShowPassword(!showPassword)} style={styles.eye}>
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </span>
                    </div>

                    <button type="submit" className="glow-button" style={styles.loginBtn}>
                        <LogIn size={18} /> Login
                    </button>
                </form>

                <div style={styles.divider}>
                    <span style={styles.dividerLine}></span>
                    <span style={{padding: '0 10px', color: '#888', fontSize: '12px'}}>OR</span>
                    <span style={styles.dividerLine}></span>
                </div>

                <button onClick={handleGoogleLogin} style={styles.googleBtn}>
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="google" style={{width: '18px'}} />
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: { height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#0a0a0a', width: '100vw' },
    card: { background: '#121212', padding: '40px', borderRadius: '24px', width: '380px', textAlign: 'center', border: '1px solid #333', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' },
    title: { color: 'white', fontSize: '28px', fontWeight: '800', marginBottom: '5px' },
    subtitle: { color: '#888', marginBottom: '30px', fontSize: '14px' },
    form: { display: 'flex', flexDirection: 'column', gap: '15px' },
    inputGroup: { display: 'flex', alignItems: 'center', background: '#1a1a1a', padding: '12px 15px', borderRadius: '12px', border: '1px solid #333' },
    input: { background: 'transparent', border: 'none', outline: 'none', color: 'white', marginLeft: '10px', width: '100%', fontSize: '15px' },
    eye: { cursor: 'pointer', color: '#888', marginLeft: '10px' },
    loginBtn: { padding: '14px', background: '#ff4d4d', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' },
    divider: { display: 'flex', alignItems: 'center', margin: '25px 0' },
    dividerLine: { flex: 1, height: '1px', background: '#333' },
    googleBtn: { width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #333', background: '#1a1a1a', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', cursor: 'pointer', fontWeight: '600' }
};

export default Login;
