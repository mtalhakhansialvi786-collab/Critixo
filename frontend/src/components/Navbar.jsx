import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, LogOut, LayoutDashboard, User, BookOpen } from 'lucide-react';

const Navbar = ({ searchTerm = "", setSearchTerm = () => {} }) => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFocused, setIsFocused] = useState(false); // Search bar focus state
  
  const token = localStorage.getItem('adminToken');
  const userEmail = localStorage.getItem('userEmail');
  const userName = localStorage.getItem('userName');
  
  // Fixed the backtick typo in your email check
  const isAdmin = userEmail === "admin`@critixo.com";

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
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : '#ffffff',
      boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.1)' : '0 2px 10px rgba(0,0,0,0.05)'
    }}>
      
      {/* --- PROFESSIONAL LOGO --- */}
      <div style={styles.logoContainer} onClick={() => navigate('/')}>
        <h1 style={styles.logoText}>
          <span style={{ color: '#1A73E8' }}>Critixo</span>
        </h1>
      </div>

      {/* --- MODERN SEARCH BAR --- */}
      <div style={{
        ...styles.searchWrapper,
        border: isFocused ? '1px solid #1A73E8' : '1px solid #e0e0e0',
        boxShadow: isFocused ? '0 0 0 3px rgba(26, 115, 232, 0.1)' : 'none',
        background: isFocused ? '#fff' : '#F1F4F9'
      }}>
        <Search size={18} color={isFocused ? "#1A73E8" : "#888"} style={{ marginLeft: '15px' }} />
        {/* <input 
          type="text" 
          placeholder="Search for books, authors..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={styles.searchInput}
        /> */}
        <input 
  type="text" 
  id="search-input" // Yeh add kiya
  name="search"     // Yeh add kiya
  placeholder="Search for books, authors..." 
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  onFocus={() => setIsFocused(true)}
  onBlur={() => setIsFocused(false)}
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
  },
  logoText: {
    fontSize: '26px',
    fontWeight: '800',
    margin: 0,
    letterSpacing: '-0.5px',
  },
  searchWrapper: {
    flex: '0 1 450px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '50px',
    transition: '0.3s all ease',
    margin: '0 20px',
  },
  searchInput: {
    width: '100%',
    border: 'none',
    background: 'transparent',
    padding: '12px 15px',
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  }
};

export default Navbar;
