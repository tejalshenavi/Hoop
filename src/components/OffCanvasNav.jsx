// src/components/OffCanvasNav.jsx
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2
import './OffCanvasNav.css'; // Ensure this file exists and is correct
import { signOut, onAuthStateChanged } from 'firebase/auth'; // Import Firebase functions
import { auth } from '../firebaseConfig'; // Import Firebase auth from your config

const OffCanvasNav = ({ isOpen, onClose }) => {
  const [user, setUser] = useState(null); // State to hold the logged-in user's info
  const navigate = useNavigate();

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set the logged-in user
      } else {
        setUser(null); // Clear user on logout
      }
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      // Show SweetAlert2 confirmation dialog
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You will be logged out of your account.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, logout!',
        cancelButtonText: 'Cancel'
      });

      if (result.isConfirmed) {
        await signOut(auth); // Sign out from Firebase
        navigate('/login'); // Redirect to login page after sign out
      }
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <div className={`off-canvas-nav ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <nav>
        <br /><br /><br />
        <NavLink to="/" onClick={onClose}>Home</NavLink>
        <NavLink to="/birthday" onClick={onClose}>Birthday</NavLink>
        <NavLink to="/anniversary" onClick={onClose}>Anniversary</NavLink>
        <NavLink to="/wedding" onClick={onClose}>Wedding</NavLink>
        <NavLink to="/engagement" onClick={onClose}>Engagement</NavLink>
        <NavLink to="/customize" onClick={onClose}>Customize</NavLink>
        <NavLink to="/myorder" onClick={onClose}>MyOrder</NavLink>
      </nav>
      <div className="user-info">
        {user ? (
          <p><strong>Logged in as:</strong> {user.displayName || user.email}</p>
        ) : (
          <p><strong>No user logged in</strong></p>
        )}
      </div>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
      <div className="owner-info">
        <h4>Contact Info</h4>
        <p><strong>Name:</strong> Tejal Shenavi</p>
        <p><strong>Phone:</strong> +1234567890</p>
        <p><strong>Email:</strong> ts@gmail.com</p>
      </div>
    </div>
  );
}

export default OffCanvasNav;
