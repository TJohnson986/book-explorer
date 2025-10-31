import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-native';
import { decrement, increment } from '../state/favoriteBooksSlice';

export const Counter = () => {
  const count = useSelector(state => state.favoriteBooks.value);
  const dispatch = useDispatch();

  return (
    <>
      <Button title={`Count: ${count}`} onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </>
  );
};
