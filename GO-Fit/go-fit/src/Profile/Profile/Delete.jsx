import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Delete = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Delete;
