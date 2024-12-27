import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { auth } from "../firebaseConfig";
import './Login.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire({
        title: 'Success!',
        text: 'Logged in successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      navigate('/');
    } catch (err) {
      Swal.fire({
        title: 'Error!',
        text: err.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      Swal.fire({
        title: 'Error!',
        text: "Passwords don't match",
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Swal.fire({
        title: 'Success!',
        text: 'Account created successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      navigate('/');
    } catch (err) {
      Swal.fire({
        title: 'Error!',
        text: err.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? 'Welcome' : 'Signup'}</h2>
        <p className="sub-heading">{isLogin ? 'Log in to continue' : 'Create your account'}</p>
        <form onSubmit={isLogin ? handleLogin : handleSignup}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="auth-btn">{isLogin ? 'Log In' : 'Signup'}</button>
        </form>
        <p>
          {isLogin ? (
            <>Don't have an account? <a href="#" onClick={() => setIsLogin(false)}>Create one</a></>
          ) : (
            <>Already have an account? <a href="#" onClick={() => setIsLogin(true)}>Login</a></>
          )}
        </p>
        {loading && <p className="loading-message">Loading...</p>} {/* Loading message */}
      </div>
    </div>
  );
};

export default Auth;
