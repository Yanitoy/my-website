import React, { useState } from 'react';

function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const endpoint = "https://script.google.com/macros/s/AKfycby_0O9W-WNBzi4Zo8ZhP_FcxhawowvYYEpp8mTvQo_VsJYgkvl8OVxUjhKK1HtPKnFQBg/exec";

    setStatus('⏳ Sending...');

    fetch(endpoint, {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to send");
        return res.text();
      })
      .then(() => {
        setStatus('✅ Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.error("❌ Google Script error:", err);
        alert("❌ Failed to send message. See console for details.");
        setStatus('❌ Error occurred while sending.');
      });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Send Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Message:</label><br />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="4"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px' }}>Send</button>
      </form>

      {status && (
        <p style={{ marginTop: '15px', fontWeight: 'bold', color: status.includes('✅') ? 'green' : status.includes('❌') ? 'red' : 'black' }}>
          {status}
        </p>
      )}
    </div>
  );
}

export default Feedback;
