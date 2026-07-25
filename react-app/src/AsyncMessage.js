import React, { useEffect, useState } from 'react';

function AsyncMessage() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('Hello, World!');
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return <p>{message}</p>;
}

export default AsyncMessage;