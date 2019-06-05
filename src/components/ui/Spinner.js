import React from 'react'
import './Spinner.css';

function Spinner() {
  return (
    <div className="spinner-container">
      <div className="spinner" aria-hidden="true"></div>
    </div>
  )
}

export { Spinner };