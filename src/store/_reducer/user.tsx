import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isLogin: boolean;
  user: {
    username: string;
    password: string;
  };
}

export type StateProps = UserState;

const initialState: UserState = {
  isLogin: false,
  user: {
    username: '',
    password: '',
  },
};

export const loginUser = createAsyncThunk(
  'user/signupUser',
  async (userData: { username: string; password: string }, thunkAPI) => {
    try {
      // 일단 로그인이 무조건 성공함.
      return userData;
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
        username: '',
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
