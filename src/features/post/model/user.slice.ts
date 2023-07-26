import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchUser } from './user.thunk';
import { UserState } from './user.types';

const initialState: UserState = {
  user: null,
  status: 'idle',
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state: UserState) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(
        fetchUser.fulfilled,
        (state: UserState, action: PayloadAction<any>) => {
          state.status = 'success';
          state.user = action.payload;
        }
      )
      .addCase(
        fetchUser.rejected,
        (state: UserState, action: PayloadAction<UserState> | any) => {
          state.status = 'failed';
          state.error = action.error.message;
        }
      );
  },
});

export default userSlice.reducer;
