import { createSlice } from '@reduxjs/toolkit';

export const sampleSlice = createSlice({
  name: 'sampleCounter',
  initialState: 0,
  reducers: {
    increment: (state): number => state + 1,
    decrement: (state): number => state - 1,
  },
});

export const { increment, decrement } = sampleSlice.actions;
