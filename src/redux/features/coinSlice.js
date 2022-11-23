import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  coins: [],
  filteredCoins: [],
  error: null,
};

export const fetchCoins = createAsyncThunk('coin/fetchCoins', async () => {
  const response = await axios.get('https://api.coinstats.app/public/v1/coins');
  return response.data.coins;
});

const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoins.pending, (state) => ({
      ...state,
      loading: true,
    }))
      .addCase(fetchCoins.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        coins: action.payload,
      }))
      .addCase(fetchCoins.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default coinSlice.reducer;

export const { filteredCoins } = coinSlice.actions;
