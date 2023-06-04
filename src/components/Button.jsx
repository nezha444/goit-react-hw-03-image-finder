import React from 'react';

export const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className="Button">
      Load more
    </button>
  );
};
