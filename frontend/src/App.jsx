import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Welcome to the Simple Auth App</h1>
      <nav>
        <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>|
        <Link to="/home">Home</Link>
      </nav>
    </div>
  );
};

export default App;
