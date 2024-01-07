import React, { memo } from 'react';

const Child = ({ handleCount }) => {
  console.log('------child render------');
  return (
    <>
      <button onClick={handleCount}> Count </button>
    </>
  );
};
export default memo(Child);
