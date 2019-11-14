import { ACTION_TYPES } from './actions';

const initialState = {
  isLoading: false,
  listExchangeRates: null,
  checkedCurrencies: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.START_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ACTION_TYPES.STOP_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case ACTION_TYPES.SAVE_LIST_EXCHANGE_RATES: {
      const { payload } = action;
   
      return {
        ...state,
        listExchangeRates: payload,
      };
    }

    case ACTION_TYPES.IS_CHECKED: {
      const { payload } = action;

      return {
        ...state,

      }
    }
    
    default:
      return state;
  }
}
