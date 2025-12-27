import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, LogOut, LayoutDashboard, BookOpen, User } from 'lucide-react';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');
  const userEmail = localStorage.getItem('userEmail');
  const userName = localStorage.getItem('userName');

  // Sirf is email ko admin panel nazar ayega
  const isAdmin = userEmail === "admin@critixo.com";

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo} onClick={() => navigate('/')}>
        <BookOpen size={30} color="#ff4d4d" />
        <span style={{ marginLeft: '10px' }}>CRITIXO</span>
      </div>

      <div style={styles.searchBar}>
        <Search size={18} color="#888" />
        <input 
          type="text" 
          placeholder="Search books..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      <div style={styles.links}>
        {token ? (
          <>
            {isAdmin && (
              <Link to="/admin" style={styles.iconLink}>
                <LayoutDashboard size={20} /> Admin
              </Link>
            )}
            <div style={styles.userProfile}>
               <User size={20} color="#ff4d4d" />
               <span style={{color: 'white', fontSize: '14px', fontWeight: '500'}}>{userName}</span>
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
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 5%', background: '#121212', borderBottom: '1px solid #333', position: 'fixed', top: 0, width: '100%', zIndex: 1000 },
  logo: { display: 'flex', alignItems: 'center', fontSize: '24px', fontWeight: 'bold', color: 'white', cursor: 'pointer', letterSpacing: '1px' },
  searchBar: { display: 'flex', alignItems: 'center', background: '#252525', padding: '8px 15px', borderRadius: '25px', width: '30%', border: '1px solid #444' },
  searchInput: { background: 'transparent', border: 'none', outline: 'none', color: 'white', marginLeft: '10px', width: '100%' },
  links: { display: 'flex', alignItems: 'center', gap: '20px' },
  iconLink: { color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '14px' },
  userProfile: { display: 'flex', alignItems: 'center', gap: '8px', borderLeft: '1px solid #333', paddingLeft: '15px' },
  loginBtn: { background: '#ff4d4d', color: 'white', padding: '8px 25px', borderRadius: '20px', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px' },
  logoutBtn: { background: 'transparent', color: '#ff4d4d', border: '1px solid #ff4d4d', padding: '7px 15px', borderRadius: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '14px', fontWeight: 'bold' }
};

export default Navbar;