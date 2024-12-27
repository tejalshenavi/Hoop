import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Firestore reference
import './MyOrder.css'; // CSS styles for the page

const MyOrder = () => {
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        console.error('No user is logged in.');
        setLoading(false);
        return;
      }

      try {
        const ordersRef = collection(db, `users/${user.uid}/customOrders`);
        const q = query(ordersRef, where('createdAt', '>=', new Date(0))); // Adjust the query as needed
        const querySnapshot = await getDocs(q);

        const orders = [];
        querySnapshot.forEach((doc) => {
          orders.push({ id: doc.id, ...doc.data() });
        });

        // Sort orders by createdAt in descending order
        orders.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);

        setOrderData(orders);
      } catch (error) {
        console.error('Error fetching orders: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderData();
  }, []);

  return (
    <div className="myorder-container">
      <h2>My Orders</h2>
      {loading ? (
        <p>Loading...</p>
      ) : orderData.length > 0 ? (
        orderData.map(order => (
          <div key={order.id} className="order-summary">
            <h3>Order Details</h3>
            <p><strong>Customer Name:</strong> {order.customerName}</p>
            <p><strong>Customer Address:</strong> {order.customerAddress}</p>
            <p><strong>Design Code:</strong> {order.designCode}</p>
            <p><strong>Quantity:</strong> {order.quantity}</p>
            <p><strong>Phone No:</strong> {order.phoneNo}</p>
            <p><strong>Own Design:</strong> {order.ownDesign}</p>
            {order.createdAt && (
              <p><strong>Order Submitted on:</strong> {new Date(order.createdAt.seconds * 1000).toLocaleString()}</p>
            )}
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default MyOrder;
