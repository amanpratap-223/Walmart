// src/pages/ProductManagement.jsx
import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

export default function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [form, setForm]         = useState({
    name: '', price: '', category: '',
    image: '', description: '', material: '',
    sizes: '', colors: ''
  });
  const [loading, setLoading]       = useState(true);
  const [editingId, setEditingId]   = useState(null);

  // load products on mount & after changes
  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    setLoading(true);
    try {
      const res  = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  }

  // handle form inputs
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // create or update
  const handleSubmit = async e => {
    e.preventDefault();

    const payload = {
      name:        form.name,
      price:       parseFloat(form.price),
      category:    form.category,
      image:       form.image,
      description: form.description,
      material:    form.material,
      sizes:       form.sizes.split(',').map(s => s.trim()).filter(Boolean),
      colors:      form.colors.split(',').map(c => c.trim()).filter(Boolean),
    };

    try {
      let res;
      if (editingId) {
        // update existing
        res = await fetch(`/api/products/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        // create new
        res = await fetch('/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }
      if (!res.ok) throw new Error();
      toast.success(editingId ? 'Product updated' : 'Product added');
      setForm({ name:'', price:'', category:'', image:'', description:'', material:'', sizes:'', colors:'' });
      setEditingId(null);
      loadProducts();
    } catch {
      toast.error(editingId ? 'Update failed' : 'Failed to add product');
    }
  };

  // begin editing: populate form
  const handleEdit = p => {
    setEditingId(p.id);
    setForm({
      name:        p.name,
      price:       p.price.toString(),
      category:    p.category,
      image:       p.image,
      description: p.description || '',
      material:    p.material || '',
      sizes:       (p.sizes || []).join(', '),
      colors:      (p.colors || []).join(', '),
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // cancel edit mode
  const cancelEdit = () => {
    setEditingId(null);
    setForm({ name:'', price:'', category:'', image:'', description:'', material:'', sizes:'', colors:'' });
  };

  // delete
  const handleDelete = async id => {
    if (!window.confirm('Are you sure?')) return;
    try {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error();
      toast.success('Product deleted');
      loadProducts();
    } catch {
      toast.error('Delete failed');
    }
  };

  if (loading) return <p className="p-6">Loading…</p>;

  return (
    <div className="p-6 space-y-8">
      {/* Add / Edit Form */}
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          {editingId ? 'Edit Product' : 'Add New Product'}
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'name',        label: 'Name',        type: 'text' },
            { name: 'price',       label: 'Price',       type: 'number' },
            { name: 'category',    label: 'Category',    type: 'text' },
            { name: 'image',       label: 'Image URL',   type: 'text' },
            { name: 'material',    label: 'Material',    type: 'text' },
            { name: 'description', label: 'Description', type: 'text',   className: 'md:col-span-2' },
            { name: 'sizes',       label: 'Sizes (comma separated)',  type: 'text' },
            { name: 'colors',      label: 'Colors (comma separated)', type: 'text' },
          ].map(({ name, label, type, className }) => (
            <div className={className} key={name}>
              <label className="block font-medium mb-1">{label}</label>
              <input
                name={name}
                type={type}
                value={form[name]}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required={name === 'name' || name === 'price'}
              />
            </div>
          ))}

          <div className="md:col-span-2 flex space-x-4">
            <button
              type="submit"
              className={`px-6 py-2 rounded text-white ${
                editingId ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {editingId ? 'Update Product' : 'Add Product'}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={cancelEdit}
                className="px-6 py-2 rounded bg-gray-400 hover:bg-gray-500 text-white"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Product List */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Existing Products</h2>
        <table className="min-w-full bg-white rounded overflow-hidden shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id} className="border-t">
                <td className="p-3">{p.name}</td>
                <td className="p-3 capitalize">{p.category}</td>
                <td className="p-3">₹{p.price.toFixed(2)}</td>
                <td className="p-3 text-center space-x-2">
                  <button
                    onClick={() => handleEdit(p)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
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
    </div>
  );
}
