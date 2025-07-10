// src/pages/OrderManagement.jsx
import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

export default function OrderManagement() {
  const [orders, setOrders]   = useState([]);
  const [loading, setLoading] = useState(true);

  // Load orders on mount
  useEffect(() => {
    loadOrders();
  }, []);

  async function loadOrders() {
    setLoading(true);
    try {
      const res  = await fetch('/api/orders');
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error(err);
      toast.error('Failed to load orders');
    } finally {
      setLoading(false);
    }
  }

  // Change order status
  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/orders/${id}`, {
        method:  'PUT',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error();
      toast.success('Order updated');
      loadOrders();
    } catch (err) {
      console.error(err);
      toast.error('Update failed');
    }
  };

  // Delete order
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this order?')) return;
    try {
      const res = await fetch(`/api/orders/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error();
      toast.success('Order deleted');
      loadOrders();
    } catch (err) {
      console.error(err);
      toast.error('Delete failed');
    }
  };

  if (loading) return <p className="p-6">Loading…</p>;

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold">Orders Management</h2>
      <table className="min-w-full bg-white rounded overflow-hidden shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Order ID</th>
            <th className="p-3 text-left">User</th>
            <th className="p-3 text-center">Total</th>
            <th className="p-3 text-center">Status</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className="border-t">
              <td className="p-3">{o.id}</td>
              {/* adjust below if your order object uses a different user field */}
              <td className="p-3">{o.user?.name || o.userEmail || '—'}</td>
              <td className="p-3 text-center">₹{o.totalPrice?.toFixed(2) || '0.00'}</td>
              <td className="p-3 text-center">
                <select
                  value={o.status}
                  onChange={(e) => handleStatusChange(o.id, e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  {['Processing', 'Shipped', 'Delivered', 'Cancelled'].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </td>
              <td className="p-3 text-center space-x-2">
                <button
                  onClick={() => handleDelete(o.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
