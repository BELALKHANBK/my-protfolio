// Contact.jsx
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const res = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send message');

      const data = await res.json();
      setSuccessMsg(data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setErrorMsg('Oops! Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h2 className="text-4xl mb-6 font-bold">Contact Me</h2>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded border"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded border"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded border"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {successMsg && <p className="mt-4 text-green-600">{successMsg}</p>}
      {errorMsg && <p className="mt-4 text-red-600">{errorMsg}</p>}
    </section>
  );
};

export default Contact;
