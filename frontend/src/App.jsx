import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      {/* Background color changed to #f1efe2 */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#f1efe2' }}>
        {/* Navbar ko searchTerm pass kiya takay search kaam kare */}
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
        {/* Main Content Area: flex: 1 takay footer niche rahe */}
        <main style={{ flex: 1, marginTop: '20px' }}>
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
