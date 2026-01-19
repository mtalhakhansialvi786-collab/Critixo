<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">

<nav class="navbar">
  <div class="nav-container">
    <div class="logo-wrapper">
      <a href="#" class="logo">
        <span class="logo-dot"></span>
        Critixo
      </a>
    </div>

    <div class="search-box">
      <input type="text" placeholder="Search trends...">
      <button class="search-btn">
        <i class="fas fa-search"></i>
      </button>
    </div>

    <div class="nav-actions">
      <a href="#" class="nav-link">Home</a>
      <a href="#" class="nav-link">Explore</a>
      <button class="login-btn">Login</button>
      <button class="signup-btn">Sign Up</button>
    </div>
  </div>
</nav>

<style>
  :root {
    --primary-color: #007bff; /* Aapka existing color */
    --glass-bg: rgba(255, 255, 255, 0.95);
    --text-dark: #333;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  body { font-family: 'Poppins', sans-serif; margin: 0; }

  .navbar {
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    padding: 12px 0;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid rgba(0,0,0,0.05);
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }

  /* --- Professional Logo Styling --- */
  .logo-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .logo {
    font-size: 26px;
    font-weight: 700;
    color: var(--text-dark);
    text-decoration: none;
    letter-spacing: -1px;
    position: relative;
    transition: var(--transition);
  }

  .logo-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    background: var(--primary-color);
    border-radius: 50%;
    margin-right: 5px;
    animation: pulse 2s infinite;
  }

  .logo:hover {
    color: var(--primary-color);
    transform: scale(1.05);
  }

  @keyframes pulse {
    0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7); }
    70% { transform: scale(1.2); box-shadow: 0 0 0 10px rgba(0, 123, 255, 0); }
    100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 123, 255, 0); }
  }

  /* --- Modern Search Bar --- */
  .search-box {
    display: flex;
    background: #f1f3f5;
    border-radius: 50px;
    padding: 5px 15px;
    width: 35%;
    transition: var(--transition);
    border: 1px solid transparent;
  }

  .search-box:focus-within {
    background: #fff;
    border-color: var(--primary-color);
    box-shadow: 0 0 15px rgba(0, 123, 255, 0.1);
  }

  .search-box input {
    border: none;
    background: transparent;
    outline: none;
    padding: 8px;
    width: 100%;
    font-size: 14px;
  }

  /* --- Buttons & Links --- */
  .nav-actions {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .nav-link {
    text-decoration: none;
    color: var(--text-dark);
    font-weight: 500;
    font-size: 15px;
    transition: var(--transition);
  }

  .nav-link:hover {
    color: var(--primary-color);
  }

  .login-btn {
    background: transparent;
    border: 1.5px solid var(--primary-color);
    color: var(--primary-color);
    padding: 8px 20px;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
  }

  .login-btn:hover {
    background: rgba(0, 123, 255, 0.05);
    transform: translateY(-2px);
  }

  .signup-btn {
    background: var(--primary-color);
    border: none;
    color: white;
    padding: 9px 22px;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
  }

  .signup-btn:hover {
    box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
    transform: translateY(-2px);
  }
</style>
