import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import BirthdayPage from './components/BirthdayPage';
import AnniversaryPage from './components/AnniversaryPage';
import WeddingPage from './components/WeddingPage';
import EngagementPage from './components/EngagementPage';
import OffCanvasNav from './components/OffCanvasNav';
import Login from './components/Login';
import Signup from './components/Signup';
import Customize from './components/Customize'; // Import Customize page
import MyOrder from './components/MyOrder';

import { auth } from './firebaseConfig'; // Import Firebase authentication
import './App.css';

// Header component that conditionally renders based on route
const Header = ({ user, toggleNav, isNavOpen }) => {
  const location = useLocation();

  // Determine if header should be hidden
  const hideHeader = location.pathname === '/login' || location.pathname === '/signup'; 

  return !hideHeader ? (
    <header>
      {user && ( // Only show the menu if the user is logged in
        <>
          <button className="menu-btn" onClick={toggleNav}>☰</button>
          <OffCanvasNav isOpen={isNavOpen} onClose={() => toggleNav(false)} />
        </>
      )}
      <h1>Hoop Gallery</h1>
    </header>
  ) : null;
};

const App = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for changes to authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const toggleNav = () => setNavOpen(!isNavOpen);

  return (
    <Router>
      <Header user={user} toggleNav={toggleNav} isNavOpen={isNavOpen} />
      <main>
        <Routes>
          {!user ? (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* Redirect from root to login if not authenticated */}
              <Route path="/" element={<Login />} />
            </>
          ) : (
            <>
              {/* Protected Routes (Visible only if logged in) */}
              <Route path="/" element={<HomePage />} />
              <Route path="/birthday" element={<BirthdayPage />} />
              <Route path="/anniversary" element={<AnniversaryPage />} />
              <Route path="/wedding" element={<WeddingPage />} />
              <Route path="/engagement" element={<EngagementPage />} />
              <Route path="/customize" element={<Customize />} /> {/* Add Customize route */}
              <Route path="/myorder" element={<MyOrder/>} />
            </>
          )}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
