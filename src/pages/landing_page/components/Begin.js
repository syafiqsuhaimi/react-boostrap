import React from 'react';

import './Begin.css';

function Begin(props) {
  return (
    <section className="begin">
      <div className="begin-container">
        <h1 className="title">Ready to begin?</h1>
        <button
            className="button-primary button"
            type="button"
            >GET STARTED</button>
      </div>
    </section>
  )
}

export default Begin