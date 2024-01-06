'use client';

import { useMutation } from '@tanstack/react-query';
import '../app/globals.css';
import { useState } from 'react';
import { generateChatResponse } from '@/utils/Action';
import toast from 'react-hot-toast';

const Chat = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  const { mutate, isPending } = useMutation({
    mutationFn: (query) => generateChatResponse([...messages, query]),
    onSuccess: (data) => {
      if (!data) {
        toast.error('something went wrong');
        return;
      }
      setMessages((prev) => [...prev, data]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = {
      role: 'user',
      content: text,
    };
    mutate(query);
    setMessages((prev) => [...prev, query]);
    setText('');
  };

  return (
    <div className='chatContain'>
      <div>
        {messages.map(({ role, content }, index) => {
          const avatar = role === 'user' ? '👤' : '🤖';
          const bcg = role === 'user' ? 'userResponse' : 'chatResponse';
          return (
            <div key={index} className={`message ${bcg}`}>
              <span className='avatar'>{avatar}</span>
              <p>{content}</p>
            </div>
          );
        })}
        {isPending ? <span className='loading'>Sending...</span> : null}
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
          <button
            type='submit'
            className='submitQuestionBtn'
            disabled={isPending}
          >
            {isPending ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
