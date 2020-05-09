import React from 'react';

export const Index: React.FC = () => {
  const [test, setTest] = React.useState(1000);
  const clickButton = () => {
    setTest(test + 20);
  };

  return (
    <div>
      <button type="button" onClick={clickButton}>
        button
      </button>
      <p>{test}</p>
    </div>
  );
};
