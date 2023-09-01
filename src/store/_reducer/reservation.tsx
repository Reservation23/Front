import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '..';

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

export const getReservation = createAsyncThunk<
  any,
  undefined,
  { state: RootState; rejectValue: { message: string } }
>('reservation/getReservation', async (_, thunkAPI) => {
  try {
    const isLogin = thunkAPI.getState().user.isLogin;

    if (!isLogin) {
      return thunkAPI.rejectWithValue({
        message: '로그인이 필요한 서비스 입니다.',
      });
    }
    return dummy;
  } catch (error) {
    console.log(error);
  }
});

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
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

export const {} = reservationSlice.actions;

export default reservationSlice.reducer;
