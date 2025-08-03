import { useState } from 'react';
import video from '../assets/image/13495-248644905_small.mp4'
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
      const res = await fetch('https://contac-server.onrender.com/send-email', {
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
    <section className="relative min-h-screen text-gray-800 dark:text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full  bg-opacity-60 z-10" />

      {/* Content */}
      <div className="relative z-20 p-8">
        <h2 className="text-4xl mb-10 font-bold text-center md:text-left">Contact Me</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <div className="space-y-6 text-left">
            <h3 className="text-3xl font-semibold mb-4">Let's Connect</h3>
            <p>
              I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              Feel free to reach out through any of the following channels:
            </p>

            <div className="space-y-3 mt-6">
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-blue-400">belalkhanloverboy2004@gmail.com</p>
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
                <li>Pandin next day update</li>
              </ul>
            </div>

            <p className="mt-8 italic text-gray-300">
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
              className="w-full p-3 rounded border border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
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

            {successMsg && <p className="mt-4 text-green-400">{successMsg}</p>}
            {errorMsg && <p className="mt-4 text-red-400">{errorMsg}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
