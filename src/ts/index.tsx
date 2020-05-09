import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '@ts/store/slices/sample';
import { RootState } from './store/slices';

export const Index: React.FC = () => {
  const [test, setTest] = React.useState(1000);
  const clickButton = (): void => {
    setTest(test + 20);
  };
  const store = useSelector((state: RootState) => state.sampleSlice);
  const dispatch = useDispatch();

  const incrementSample = (): {
    payload: undefined;
    type: string;
  } => dispatch(increment());
  const decrementSample = (): {
    payload: undefined;
    type: string;
  } => dispatch(decrement());

  return (
    <div>
      <button type="button" onClick={clickButton}>
        button
      </button>
      <p>
        state:
        {test}
      </p>
      <p>
        store:
        {store}
      </p>
      <button type="button" onClick={incrementSample}>
        increment
      </button>
      <button type="button" onClick={decrementSample}>
        decrement
      </button>
    </div>
  );
};
