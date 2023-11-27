// components/AlertBox.js
import React from 'react';

// @ts-ignore
const AlertBox = ({ type, message }) => {
  const alertClass = `p-4 mb-4 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`;

  return (
    <div className={alertClass}>
      {message}
    </div>
  );
};

export default AlertBox;
