import React from 'react';

function Button({ children, onClick }) {
  return (
    <button
      className="bg-blue-400 hover:bg-blue-200 hover:text-black text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;