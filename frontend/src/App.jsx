import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react'; // Analytics import ki
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#fffafa' }}>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
        <main style={{ flex: 1, marginTop: '20px' }}>
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        <Footer />
        <Analytics /> {/* Yeh line aapka traffic track karegi */}
      </div>
    </Router>
  );
}

export default App;
