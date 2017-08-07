import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Emaily!</h1>
      <p>Collect feedback from your users</p>
      <div style={{ marginBottom: '10px' }}>
        <Link className="pink darken-2 btn-flat white-text" to="/surveys/new">
          Create Survey!
        </Link>
      </div>
      <div>
        <Link className="orange darken-2 btn-flat white-text" to="/surveys">
          All Surveys!
        </Link>
      </div>
    </div>
  );
};

export default Landing;
