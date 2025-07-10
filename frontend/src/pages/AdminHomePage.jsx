import React from 'react'
import { Link } from 'react-router-dom'

const AdminHomePage = () => {
  const orders = [
    { _id: 1001, user: { name: 'Alice Johnson' }, totalPrice: 2500, status: 'Processing' },
    { _id: 1002, user: { name: 'Bob Smith' }, totalPrice: 3400, status: 'Shipped' },
    { _id: 1003, user: { name: 'Charlie Lee' }, totalPrice: 1500, status: 'Delivered' },
    { _id: 1004, user: { name: 'Diana Patel' }, totalPrice: 4200, status: 'Pending' },
    { _id: 1005, user: { name: 'Ethan Kumar' }, totalPrice: 3100, status: 'Cancelled' },
  ]

  return (
    <div className="max-w-7xl ml-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Revenue</h2>
          <p className="text-2xl">₹10,00,000</p>
        </div>

        <div className="p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Total Orders</h2>
          <p className="text-2xl">{orders.length}</p>
          <Link to="/admin/orders" className="text-blue-500 hover:underline">
            Manage orders
          </Link>
        </div>

        <div className="p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Total Products</h2>
          <p className="text-2xl">1000</p>
          <Link to="/admin/products" className="text-blue-500 hover:underline">
            Manage products
          </Link>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-gray-500">
            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
              <tr>
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Total Price</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map(order => (
                  <tr key={order._id} className="border-b hover:bg-gray-50 cursor-pointer">
                    <td className="p-4">{order._id}</td>
                    <td className="p-4">{order.user.name}</td>
                    <td className="p-4">₹{order.totalPrice.toLocaleString('en-IN')}</td>
                    <td className="p-4">{order.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-4 text-center text-gray-500">
                    No recent orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminHomePage
