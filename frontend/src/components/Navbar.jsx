import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, LogOut, LayoutDashboard, User, BookOpen, Menu, X } from 'lucide-react';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const token = localStorage.getItem('adminToken');
  const userEmail = localStorage.getItem('userEmail');
  const userName = localStorage.getItem('userName');
  const isAdmin = userEmail === "admin@critixo.com";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav style={{
      ...styles.navbar,
      padding: isScrolled ? '10px 5%' : '18px 5%',
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : '#ffffff',
      boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.1)' : '0 2px 10px rgba(0,0,0,0.05)'
    }}>
      
      {/* --- PROFESSIONAL LOGO --- */}
      <div style={styles.logoContainer} onClick={() => navigate('/')}>
        <div style={styles.logoIcon}>
          <BookOpen size={24} color="#fff" />
        </div>
        <h1 style={styles.logoText}>
          Crit<span style={{ color: '#1A73E8' }}>ixo</span>
        </h1>
      </div>

      {/* --- MODERN SEARCH BAR --- */}
      <div style={styles.searchWrapper}>
        <Search size={18} color="#888" style={{ marginLeft: '15px' }} />
        <input 
          type="text" 
          placeholder="Search for books, authors..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      {/* --- ACTIONS SECTION --- */}
      <div style={styles.links}>
        {token ? (
          <>
            {isAdmin && (
              <Link to="/admin" style={styles.adminLink}>
                <LayoutDashboard size={18} /> Admin
              </Link>
            )}
            <div style={styles.userProfile}>
               <div style={styles.userIconCircle}>
                  <User size={18} color="#1A73E8" />
               </div>
               <span style={styles.userNameText}>{userName || 'User'}</span>
            </div>
            <button onClick={handleLogout} style={styles.logoutBtn}>
              <LogOut size={18} /> Logout
            </button>
          </>
        ) : (
          <Link to="/login" style={styles.loginBtn}>Login</Link>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    backdropFilter: 'blur(10px)',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  logoIcon: {
    background: 'linear-gradient(135deg, #1A73E8 0%, #0d47a1 100%)',
    padding: '8px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(26, 115, 232, 0.3)',
  },
  logoText: {
    fontSize: '26px',
    fontWeight: '800',
    color: '#333',
    margin: 0,
    letterSpacing: '-0.5px',
  },
  searchWrapper: {
    flex: '0 1 400px',
    display: 'flex',
    alignItems: 'center',
    background: '#F1F4F9',
    borderRadius: '50px',
    transition: '0.3s all ease',
    margin: '0 20px',
    border: '1px solid #e0e0e0',
  },
  searchInput: {
    width: '100%',
    border: 'none',
    background: 'transparent',
    padding: '10px 15px',
    fontSize: '14px',
    outline: 'none',
    color: '#333',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  adminLink: {
    color: '#333',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
    fontWeight: '600',
    padding: '8px 12px',
    borderRadius: '8px',
    transition: '0.3s',
  },
  userProfile: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '5px 12px',
    background: '#f8f9fa',
    borderRadius: '30px',
  },
  userIconCircle: {
    background: '#fff',
    padding: '5px',
    borderRadius: '50%',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
  },
  userNameText: {
    color: '#333',
    fontSize: '14px',
    fontWeight: '600',
  },
  loginBtn: {
    background: '#1A73E8',
    color: 'white',
    padding: '10px 28px',
    borderRadius: '50px',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontSize: '14px',
    boxShadow: '0 4px 15px rgba(26, 115, 232, 0.2)',
    transition: '0.3s',
  },
  logoutBtn: {
    background: 'transparent',
    color: '#d32f2f',
    border: '1px solid #ffcdd2',
    padding: '8px 16px',
    borderRadius: '50px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    fontWeight: '600',
    transition: '0.3s',
  }
};

export default Navbar;
