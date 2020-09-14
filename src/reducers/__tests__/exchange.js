import exchange, {initialState} from '../exchange';
import actions from '../../actions';


let state = initialState
it('Should return valid init state', () => {
  const validState = {
    currencyPair:  {
       source: "EUR",
     target: "GBP",
          },
          sourceAmount: "",
          targetAmount: "",
          }


  state = exchange(state, { type:  'ExchangeActions'});
  expect(state).toEqual(validState);
});

it('should set a currency pair', () => {
  const validState = {
    ...state,
    currencyPair: {
      source: 'GBP',
      target: 'USD',
    },
    sourceAmount: '',
    targetAmount: '',
  };

  state = exchange(state, actions.exchange.setCurrencyPair('GBP', 'USD'));
  expect(state).toEqual(validState);
});

it('should not update amount for unknown side', () => {
  const validState = state;

  state = exchange(state, actions.exchange.updateAmount('bla', 1, '10'));
  expect(state).toEqual(validState);
});

it('should not update amount for negative number', () => {
  const validState = state;

  state = exchange(state, actions.exchange.updateAmount('source', 1, -10));
  expect(state).toEqual(validState);

  state = exchange(state, actions.exchange.updateAmount('target', 1, -10));
  expect(state).toEqual(validState);
});

it('should update amount', () => {
  const amount = 10;
  const price = 1.2;
  const side = 'source';

  const validState = {
    ...state,
    sourceAmount: amount,
    targetAmount: amount * price,
  };

  state = exchange(state, actions.exchange.updateAmount(side, price, amount));
  expect(state).toEqual(validState);
});

it('should swipe a currency pair', () => {
  const validState = {
    ...state,
    currencyPair: {
      source: 'USD',
      target: 'GBP',
    },
    sourceAmount: state.targetAmount,
    targetAmount: state.sourceAmount,
  };

  state = exchange(state, actions.exchange.swipeCurrencies());
  expect(state).toEqual(validState);
});

it('should not update currency pair for an invalid side', () => {
  const validState = state;

  state = exchange(state, actions.exchange.updateCurrencyPair('bla', 'EUR'));
  expect(state).toEqual(validState);
});

it('should update currency pair', () => {
  const validState = {
    ...state,
    currencyPair: {
      source: 'EUR',
      target: 'GBP',
    },
    sourceAmount: '',
    targetAmount: '',
  };

  state = exchange(state, actions.exchange.updateCurrencyPair('source', 'EUR'));
  expect(state).toEqual(validState);

  validState.currencyPair.target='CHF';
  state = exchange(state, actions.exchange.updateCurrencyPair('target', 'CHF'));
  expect(state).toEqual(validState);
});