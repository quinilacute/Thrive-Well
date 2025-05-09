import React from 'react';

function Container({ children}) {
  return (
    <div
      className="bg-gray hover:border-blue-400 shadow-lg p-6 rounded-lg flex flex-col  text-black"
    >
      {children}
    </div>
  );
}

export default Container;