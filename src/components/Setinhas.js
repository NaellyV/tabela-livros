import React from "react";

function Setinhas({ onSort, column }) {
  return (
    <span>
      <button onClick={() => onSort(column, 'asc')}>↑</button>
      <button onClick={() => onSort(column, 'desc')}>↓</button>
    </span>
  );
}

export default Setinhas;
