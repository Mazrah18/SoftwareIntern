import React from 'react';
import { Link } from 'react-router-dom';

const Nopage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>OOPS!! Page is still in Development</h1>
      <Link to="/" style={{ marginTop: '20px' }}>
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Nopage;
