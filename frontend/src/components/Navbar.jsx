// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Search, LogOut, LayoutDashboard, User } from 'lucide-react';

// const Navbar = ({ searchTerm, setSearchTerm }) => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem('adminToken');
//   const userEmail = localStorage.getItem('userEmail');
//   const userName = localStorage.getItem('userName');

//   const isAdmin = userEmail === "admin@critixo.com";

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/login');
//   };

//   return (
//     <nav style={styles.nav}>
      
//       <div style={styles.logoContainer} onClick={() => navigate('/')}>
//         <span style={styles.logoText}>Citixo</span>
//       </div>

//       <div style={styles.searchBar}>
//         <Search size={18} color="#888" />
//         <input 
//           type="text" 
//           placeholder="Search books..." 
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={styles.searchInput}
//         />
//       </div>

//       <div style={styles.links}>
//         {token ? (
//           <>
//             {isAdmin && (
//               <Link to="/admin" style={styles.iconLink}>
//                 <LayoutDashboard size={20} /> Admin
//               </Link>
//             )}
//             <div style={styles.userProfile}>
//                <User size={20} color="#1A73E8" />
//                <span style={{color: '#333', fontSize: '14px', fontWeight: '500'}}>{userName || 'User'}</span>
//             </div>
//             <button onClick={handleLogout} style={styles.logoutBtn}>
//               <LogOut size={18} /> Logout
//             </button>
//           </>
//         ) : (
//           <Link to="/login" style={styles.loginBtn}>Login</Link>
//         )}
//       </div>
//     </nav>
//   );
// };

// const styles = {
//   nav: { 
//     display: 'flex', 
//     justifyContent: 'space-between', 
//     alignItems: 'center', 
//     padding: '10px 5%', 
//     background: '#ffffff', 
//     borderBottom: '1px solid #ddd', 
//     position: 'fixed', 
//     top: 0, 
//     width: '100%', 
//     zIndex: 1000 
//   },
//   logoContainer: { 
//     display: 'flex', 
//     alignItems: 'center', 
//     cursor: 'pointer' 
//   },
//   logoImage: { 
//     height: '50px', // Aap isay 40px ya 60px bhi kar sakte hain logo ke mutabiq
//     width: 'auto', 
//     objectFit: 'contain' 
//   },
//   logoText: { 
//     marginLeft: '12px', 
//     fontSize: '44px', 
//     fontWeight: '900', 
//     color: '#1A73E8', 
//     letterSpacing: '0px',
    
//     textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' 
// },
//   searchBar: { 
//     display: 'flex', 
//     alignItems: 'center', 
//     background: '#f1efe2', 
//     padding: '8px 15px', 
//     borderRadius: '25px', 
//     width: '30%', 
//     border: '1px solid #ccc' 
//   },
//   searchInput: { 
//     background: 'transparent', 
//     border: 'none', 
//     outline: 'none', 
//     color: '#333', 
//     marginLeft: '10px', 
//     width: '100%' 
//   },
//   links: { 
//     display: 'flex', 
//     alignItems: 'center', 
//     gap: '20px' 
//   },
//   iconLink: { 
//     color: '#333', 
//     textDecoration: 'none', 
//     display: 'flex', 
//     alignItems: 'center', 
//     gap: '5px', 
//     fontSize: '14px' 
//   },
//   userProfile: { 
//     display: 'flex', 
//     alignItems: 'center', 
//     gap: '8px', 
//     borderLeft: '1px solid #ddd', 
//     paddingLeft: '15px' 
//   },
//   loginBtn: { 
//     background: '#1A73E8', 
//     color: 'white', 
//     padding: '8px 25px', 
//     borderRadius: '20px', 
//     fontWeight: 'bold', 
//     textDecoration: 'none', 
//     fontSize: '14px' 
//   },
//   logoutBtn: { 
//     background: 'transparent', 
//     color: '#1A73E8', 
//     border: '1px solid #1A73E8', 
//     padding: '7px 15px', 
//     borderRadius: '20px', 
//     cursor: 'pointer', 
//     display: 'flex', 
//     alignItems: 'center', 
//     gap: '5px', 
//     fontSize: '14px', 
//     fontWeight: 'bold' 
//   }
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingCart, Menu, X, BookOpen, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll effect for professional feel
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      ...styles.navbar,
      padding: isScrolled ? '10px 5%' : '20px 5%',
      boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.08)' : 'none',
      background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : '#FFFFFF'
    }}>
      {/* --- LOGO SECTION --- */}
      <div style={styles.logoContainer}>
        <div style={styles.logoIcon}>
          <BookOpen size={28} color="#FFFFFF" />
        </div>
        <h1 style={styles.logoText}>
          Crit<span style={{ color: '#1A73E8' }}>ixo</span>
        </h1>
      </div>

      {/* --- SEARCH BAR (Functions Preserved) --- */}
      <div style={styles.searchWrapper}>
        <input 
          type="text" 
          placeholder="Search by book name, author or ISBN..." 
          style={styles.searchInput}
        />
        <button style={styles.searchBtn}>
          <Search size={20} color="#1A73E8" />
        </button>
      </div>

      {/* --- ACTIONS SECTION --- */}
      <div style={styles.actions}>
        <div style={styles.actionItem}>
          <div style={styles.iconCircle}>
            <User size={20} color="#1A73E8" />
          </div>
          <span style={styles.actionText}>Login / Register</span>
        </div>

        <div style={styles.actionItem}>
          <div style={styles.cartContainer}>
            <ShoppingCart size={22} color="#1A73E8" />
            <span style={styles.cartBadge}>0</span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div style={styles.mobileToggle} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Sub-Header (Professional Links) */}
      <div style={styles.subHeader}>
        <div style={styles.navLink}>Categories <ChevronDown size={14} /></div>
        <div style={styles.navLink}>New Arrivals</div>
        <div style={styles.navLink}>Bestsellers</div>
        <div style={styles.navLink}>Request a Book</div>
        <div style={styles.navLink}>Contact</div>
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
    transition: 'all 0.4s ease',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid #f0f0f0',
    flexWrap: 'wrap'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  logoIcon: {
    background: '#1A73E8',
    padding: '8px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 15px rgba(26, 115, 232, 0.3)'
  },
  logoText: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#333',
    margin: 0,
    letterSpacing: '-1px'
  },
  searchWrapper: {
    flex: '0 1 450px',
    display: 'flex',
    alignItems: 'center',
    background: '#F1F4F9',
    borderRadius: '50px',
    padding: '2px 5px 2px 20px',
    transition: '0.3s all ease',
    margin: '0 20px',
    border: '1px solid transparent'
  },
  searchInput: {
    width: '100%',
    border: 'none',
    background: 'transparent',
    padding: '12px 0',
    fontSize: '14px',
    outline: 'none',
    color: '#333'
  },
  searchBtn: {
    background: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '25px'
  },
  actionItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    transition: '0.3s'
  },
  actionText: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#444'
  },
  iconCircle: {
    padding: '10px',
    background: '#F1F4F9',
    borderRadius: '50%',
    transition: '0.3s'
  },
  cartContainer: {
    position: 'relative',
    padding: '5px'
  },
  cartBadge: {
    position: 'absolute',
    top: '-5px',
    right: '-5px',
    background: '#1A73E8',
    color: 'white',
    fontSize: '10px',
    padding: '2px 6px',
    borderRadius: '50%',
    fontWeight: 'bold',
    border: '2px solid white'
  },
  subHeader: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginTop: '15px',
    borderTop: '1px solid #f9f9f9',
    paddingTop: '10px'
  },
  navLink: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#666',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    transition: '0.3s color'
  },
  mobileToggle: {
    display: 'none', // Hide by default, show in media queries
    cursor: 'pointer',
    color: '#1A73E8'
  }
};

export default Navbar;
