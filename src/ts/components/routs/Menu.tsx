import React from 'react';
import { Link } from 'react-router-dom';

export const Menu: React.FC = () => {
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="/test">test</Link>
    </div>
  );
};
