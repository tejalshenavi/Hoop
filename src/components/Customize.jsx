import React, { useState, useEffect } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Firestore reference
import Swal from 'sweetalert2'; // Import SweetAlert2
import './Customize.css'; // CSS styles for the form
import { getAuth } from 'firebase/auth'; // Import Firebase Auth

const Customize = () => {
  // Define state variables
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [designCode, setDesignCode] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [phoneNo, setPhoneNo] = useState('');
  const [ownDesign, setOwnDesign] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [submissionDate, setSubmissionDate] = useState(null);

  // Load saved data from localStorage when component mounts
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('customOrderData'));
    if (savedData) {
      setCustomerName(savedData.customerName || '');
      setCustomerAddress(savedData.customerAddress || '');
      setDesignCode(savedData.designCode || '');
      setQuantity(savedData.quantity || 1);
      setPhoneNo(savedData.phoneNo || '');
      setOwnDesign(savedData.ownDesign || '');
    }
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('customOrderData', JSON.stringify({
      customerName,
      customerAddress,
      designCode,
      quantity,
      phoneNo,
      ownDesign,
    }));
  }, [customerName, customerAddress, designCode, quantity, phoneNo, ownDesign]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      Swal.fire({
        title: 'Error!',
        text: 'You must be logged in to submit an order.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const docRef = await addDoc(collection(db, `users/${user.uid}/customOrders`), {
        customerName,
        customerAddress,
        designCode,
        quantity,
        phoneNo,
        ownDesign,
        createdAt: serverTimestamp()
      });

      const currentDate = new Date();
      setSubmissionDate(currentDate);

      setSubmittedData({
        customerName,
        customerAddress,
        designCode,
        quantity,
        phoneNo,
        ownDesign
      });

      // Clear form
      setCustomerName('');
      setCustomerAddress('');
      setDesignCode('');
      setQuantity(1);
      setPhoneNo('');
      setOwnDesign('');

      // Clear localStorage data
      localStorage.removeItem('customOrderData');

      Swal.fire({
        title: 'Success!',
        text: 'Your order has been submitted successfully! Additional details including price will be shared with you through email.',
        icon: 'success',
        confirmButtonText: 'OK'
      });

    } catch (error) {
      console.error('Error adding document: ', error);

      Swal.fire({
        title: 'Error!',
        text: 'There was a problem submitting your order. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="customize-container">
      <h2>Customize Your Design</h2>
      <form onSubmit={handleSubmit} className={isSubmitting ? 'submitting' : ''}>
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => {
            const value = e.target.value;
            if (/^[A-Za-z\s]*$/.test(value)) {
              setCustomerName(value);
            } else {
              Swal.fire({
                title: 'Invalid Input!',
                text: 'Customer name should contain only alphabets.',
                icon: 'warning',
                confirmButtonText: 'OK'
              });
            }
          }}
          required
          aria-label="Customer Name"
        />
        <input
          type="text"
          placeholder="Customer Address"
          value={customerAddress}
          onChange={(e) => setCustomerAddress(e.target.value)}
          required
          aria-label="Customer Address"
        />
        <input
          type="text"
          placeholder="Design Code"
          value={designCode}
          onChange={(e) => setDesignCode(e.target.value)}
          required
          aria-label="Design Code"
        />
        <div className="quantity-selector">
          <h4>Quantity:</h4>
          <button type="button" onClick={decreaseQuantity} aria-label="Decrease Quantity">-</button>
          <span>{quantity}</span>
          <button type="button" onClick={increaseQuantity} aria-label="Increase Quantity">+</button>
        </div>

        <input
          type="tel"
          placeholder="Customer Phone No."
          value={phoneNo}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '');
            setPhoneNo(value);
          }}
          maxLength="10"
          pattern="[0-9]{10}"
          required
          aria-label="Customer Phone No."
        />

        <textarea
          placeholder="Customize Your Own Design"
          value={ownDesign}
          onChange={(e) => setOwnDesign(e.target.value)}
          aria-label="Customize Your Own Design"
        ></textarea>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h3>Order Summary</h3>
          <p><strong>Customer Name:</strong> {submittedData.customerName}</p>
          <p><strong>Customer Address:</strong> {submittedData.customerAddress}</p>
          <p><strong>Design Code:</strong> {submittedData.designCode}</p>
          <p><strong>Quantity:</strong> {submittedData.quantity}</p>
          <p><strong>Phone No:</strong> {submittedData.phoneNo}</p>
          <p><strong>Own Design:</strong> {submittedData.ownDesign}</p>
          {submissionDate && (
            <p><strong>Order Submitted on:</strong> {submissionDate.toLocaleString()}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Customize;
