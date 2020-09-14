import exchange from '../exchange'
import {EXCHANGE_ACTION_TYPES} from '../action-types'

const TESTED_TYPES = [
  'UPDATE_CURRENCY_PAIR',
  'SET_CURRENCY_PAIR',
  'SWIPE_CURRENCIES',
  'UPDATE_AMOUNT',
];

const TESTED_ACTIONS = [
  'updateCurrencyPair',
  'setCurrencyPair',
  'swipeCurrencies',
  'updateAmount',
];

it('should export all tested types', () => {
  expect(Object.keys(EXCHANGE_ACTION_TYPES).sort()).toEqual(TESTED_TYPES.sort());
});

it('should export all tested actions', () => {
  expect(Object.keys(exchange).sort()).toEqual(TESTED_ACTIONS.sort());
});

it('should parseFloat for updateAmount', () => {
  const validAction = {
    type: EXCHANGE_ACTION_TYPES.UPDATE_AMOUNT,
    side: 'source',
    price: 1.2,
    amount: 10,
  };

  const action = exchange.updateAmount('source', 1.2, 10);
  expect(action).toEqual(validAction);
});

it('should use default values for updateAmount', () => {
  const validAction = {
    type: EXCHANGE_ACTION_TYPES.UPDATE_AMOUNT,
    side: 'source',
    price: 0,
    amount: 0,
  };

  const action = exchange.updateAmount('source');
  expect(action).toEqual(validAction);
});