import React, { useState } from 'react';

function Feedback() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert(`Thanks, ${name}! Your message: "${message}" was received.`);
    setName('');
    setMessage('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Send Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Your Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Message:</label><br />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write something..."
          />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Send</button>
      </form>
    </div>
  );
}

export default Feedback;
