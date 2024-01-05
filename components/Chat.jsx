'use client';

import '../app/globals.css';
import { useState } from 'react';

const Chat = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='chatContain'>
      <div>
        <h2 className='messages'>messages</h2>
      </div>

      <form onSubmit={handleSubmit} className='form'>
        <div className='inputBox'>
          <input
            type='text'
            placeholder='Type here'
            value={text}
            className='inputRectangle'
            required
            onChange={(e) => setText(e.target.value)}
          />
          <button type='submit' className='submitQuestionBtn'>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
