import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

const initialState = {
  loading: false,
  coins: [],
  error: null,
};

/* export const fetchCoins = createAsyncThunk('coin/fetchCoins', async () => {
  const response = await axios.get('https://api.coinstats.app/public/v1/coins');
  return response.data.coins;
}); */

export const fetchCoins = createAsyncThunk('coin/fetchCoins', async () => {
  const response = await fetch('https://api.coinstats.app/public/v1/coins');
  const data = await response.json();
  return data.coins;
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

export const error = (state) => state.coin.error;
export const loading = (state) => state.coin.loading;
export const allcrypto = (state) => state.coin.coins;

/* export const { filteredCoins } = coinSlice.actions;
 */
