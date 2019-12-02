import { ACTION_TYPES } from './actions';

const initialState = {
  isLoading: false,
  listExchangeRates: null,
  checkedCurrencies: [],
  selectAsk: 1,
  selectBid: 1,
  inputAsk: 1,
  inputBid: 1,
}

export default function reducer(state = initialState, action) {
  const { payload } = action;

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
      return {
        ...state,
        listExchangeRates: payload,
      };
    }

    case ACTION_TYPES.IS_CHECKED: {
      return {
        ...state,

      }
    }

    case ACTION_TYPES.UPDATE_SELECT_ASK: {
      return {
        ...state,
        selectAsk: payload,        
        inputAsk: (payload / state.selectBid * state.inputBid).toFixed(4)        
      };
    }
    
    case ACTION_TYPES.UPDATE_SELECT_BID: {      
      return {
        ...state,
        selectBid: payload, 
        inputAsk: (state.selectAsk / payload * state.inputBid).toFixed(4)       
      };
    }
   
    case ACTION_TYPES.UPDATE_INPUT_ASK: {
      return {
        ...state,
        inputAsk: payload,
        inputBid: (state.selectBid / state.selectAsk * payload).toFixed(4)
      };
    }
    
    case ACTION_TYPES.UPDATE_INPUT_BID: {
      return {
        ...state,
        inputBid: payload,
        inputAsk: (state.selectAsk / state.selectBid * payload).toFixed(4)
      };
    }
    
    default:
      return state;
  }
}
