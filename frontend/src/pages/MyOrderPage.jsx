// src/pages/MyOrderPage.jsx
import React, { useEffect, useState } from 'react';

const MyOrderPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const mockOrders = [
      {
        _id: '12345',
        createdAt: new Date().toLocaleString(),
        shippingAddress: { city: 'New York', country: 'USA' },
        orderItems: [
          {
            name: 'Beach Sunset Canvas',
            image:
              'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&auto=format&fit=crop',
          },
        ],
        totalPrice: 100,
        isPaid: true,
      },
      {
        _id: '34567',
        createdAt: new Date().toLocaleString(),
        shippingAddress: { city: 'New York', country: 'USA' },
        orderItems: [
          {
            name: 'Stylish Chair',
            image:
              'https://images.unsplash.com/photo-1750306955715-85fdf631bd0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3R5bGlzaCUyMGNoYWlyfGVufDB8fDB8fHww',
          },
        ],
        totalPrice: 100,
        isPaid: true,
      },
    ];

    setOrders(mockOrders);
  }, []);

  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">My Orders</h2>
      <table className="min-w-full bg-white border rounded shadow">
        <thead>
          <tr className="bg-gray-100 text-sm text-left">
            <th className="p-3">Image</th>
            <th className="p-3">Order ID</th>
            <th className="p-3">Created</th>
            <th className="p-3">Shipping Address</th>
            <th className="p-3">Items</th>
            <th className="p-3">Price</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id} className="border-t text-sm">
              <td className="p-3">
                <img
                  src={order.orderItems[0].image}
                  alt={order.orderItems[0].name}
                  className="w-12 h-12 object-cover rounded"
                />
              </td>
              <td className="p-3 font-semibold">#{order._id}</td>
              <td className="p-3">{order.createdAt}</td>
              <td className="p-3">
                {order.shippingAddress.city}, {order.shippingAddress.country}
              </td>
              <td className="p-3">{order.orderItems.length}</td>
              <td className="p-3">${order.totalPrice}</td>
              <td className="p-3">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                  {order.isPaid ? 'Paid' : 'Unpaid'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrderPage;
