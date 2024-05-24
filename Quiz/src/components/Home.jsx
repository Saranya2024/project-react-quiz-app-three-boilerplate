import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Quiz App</h1>
      <Link to="/quiz"><button>Play</button></Link>
    </div>
  );
}

export default Home;
