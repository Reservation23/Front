import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isLogin: boolean;
  user: {
    email: string;
    password: string;
    name: string;
  };
}

export type StateProps = UserState;

const initialState: UserState = {
  isLogin: false,
  user: {
    email: '',
    name: '',
    password: '',
  },
};

export const loginUser = createAsyncThunk(
  'user/signupUser',
  async (userData: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await fetch('url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      if (response.status === 201) {
        return { ...result }; // reducer의 action.payload
      } else {
        throw new Error();
      }
    } catch (e: any) {
      throw thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state: StateProps) => {
      state.isLogin = false;
      state.user = {
        email: '',
        name: '',
        password: '',
      };
    },
  },

  extraReducers: (builder) => {
    // 성공
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLogin = true;
      state.user = action.payload;
    });
    // 대기
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLogin = false;
    });
    // 실패
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLogin = false;
    });
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
