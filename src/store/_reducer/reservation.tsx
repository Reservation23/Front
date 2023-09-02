import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { AppDispatch, RootState } from '..';

export interface ReservationItemProps {
  storeId: number;
  memberId: number;
  name: string;
  location: string;
  description: string;
}

interface StateProps {
  totalItems: number;
  data: ReservationItemProps[];
  totalPages: number;
  currentPage: number;
}

const initialState: StateProps = {
  currentPage: 0,
  data: [],
  totalItems: 0,
  totalPages: 0,
};

const dummy: StateProps = {
  totalItems: 2,
  data: [
    {
      storeId: 1,
      memberId: 1,
      name: 'testStore1',
      location: 'seoul',
      description: 'test description1',
    },
    {
      storeId: 2,
      memberId: 2,
      name: 'testStore2',
      location: 'seoul',
      description: 'test description2',
    },
  ],
  totalPages: 1,
  currentPage: 1,
};

const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: { message: string };
}>();

export const getReservation = createAppAsyncThunk(
  'reservation/getReservation',
  async (_, thunkAPI) => {
    try {
      const isLogin = thunkAPI.getState().user.isLogin;

      if (!isLogin) {
        return thunkAPI.rejectWithValue({
          message: '로그인이 필요한 서비스 입니다.',
        });
      }
      // 로그인만 되어있다면 데이터를 얻을 수 있다.
      return dummy;
    } catch (error) {
      console.log(error);
    }
  }
);

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    initReservation: (state: StateProps) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getReservation.fulfilled, (_, action) => {
      return action.payload;
    });
    builder.addCase(getReservation.rejected, (_, action) => {
      if (action.payload?.message) {
        console.log(action.payload?.message);
        return initialState;
      }
    });
  },
});

export const { initReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
