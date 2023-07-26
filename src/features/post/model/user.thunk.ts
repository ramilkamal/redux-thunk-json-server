import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from './user.types';

export const fetchUser = createAsyncThunk<User, number>(
  'user/fetchUser',
  async (userId) => {
    const response = await axios.get(`http://localhost:5000/users/${userId}`);
    return response.data;
  }
);
