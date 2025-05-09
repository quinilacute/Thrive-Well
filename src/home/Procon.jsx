import React from 'react';

function Container({ children}) {
  return (
    <div
      className="bg-white hover:border-blue-400 shadow-lg p-6 rounded-lg flex flex-col items-center justify-center text-black"
    >
      {children}
    </div>
  );
}

export default Container;