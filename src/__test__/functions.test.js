import * as actions from '../redux/features/coinSlice';
import coinReducer, { error, loading, allcrypto } from '../redux/features/coinSlice';

describe('Coin Reducer', () => {
  test('Should return the initial state', () => {
    expect(coinReducer(undefined, {})).toEqual({
      coins: [],
      loading: false,
      error: null,
    });
  });

  test('Should handle fetchCoins.pending', () => {
    expect(coinReducer(undefined, actions.fetchCoins.pending())).toEqual({
      coins: [],
      loading: true,
      error: null,
    });
  });

  test('Should handle fetchCoins.fulfilled', () => {
    expect(coinReducer(undefined, actions.fetchCoins.fulfilled([1, 2, 3]))).toEqual({
      coins: [1, 2, 3],
      loading: false,
      error: null,
    });
  });

  test('Should handle fetchCoins.rejected', () => {
    expect(coinReducer(undefined, actions.fetchCoins.rejected('error'))).toEqual({
      coins: [],
      loading: false,
      error: 'error',
    });
  });

  test('Should handle error', () => {
    expect(error({ coin: { error: 'error' } })).toEqual('error');
  });

  test('Should handle loading', () => {
    expect(loading({ coin: { loading: true } })).toEqual(true);
  });

  test('Should handle allcrypto', () => {
    expect(allcrypto({ coin: { coins: [1, 2, 3] } })).toEqual([1, 2, 3]);
  });
});
