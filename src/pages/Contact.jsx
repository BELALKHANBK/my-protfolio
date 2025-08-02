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
      <h2 className="text-4xl mb-10 font-bold text-center md:text-left">Contact Me</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Side - Contact Info */}
        <div className="space-y-6 text-left">
          <h3 className="text-3xl font-semibold mb-4">Lets Connect</h3>
          <p>
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            Feel free to reach out through any of the following channels:
          </p>

          <div className="space-y-3 mt-6">
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-blue-600 dark:text-blue-400">belalkhanloverboy2004@gmail.com</p>
            </div>
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p>+8801605342742</p>
            </div>
            <div>
              <h4 className="font-semibold">Location</h4>
              <p>Rangpur, Bangladesh</p>
            </div>
            <div>
              <h4 className="font-semibold">Availability</h4>
              <p>Available for Work</p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold mb-2">Connect on Social Media</h4>
            <ul className="space-y-1">
              <li>belal-dev-code</li>
              <li>Pandin next day updat</li>
            </ul>
          </div>

          <p className="mt-8 italic text-gray-600 dark:text-gray-400">
            Quick Response: I typically respond within 6 hours. Looking forward to hearing from you!
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {successMsg && <p className="mt-4 text-green-600">{successMsg}</p>}
          {errorMsg && <p className="mt-4 text-red-600">{errorMsg}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
