export const ACTION_TYPES = {
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
  SAVE_LIST_EXCHANGE_RATES: 'SAVE_LIST_EXCHANGE_RATES',
  IS_CHECKED: 'IS_CHECKED',
  UPDATE_SELECT_ASK: 'UPDATE_SELECT_ASK',
  UPDATE_SELECT_BID: 'UPDATE_SELECT_BID',
  UPDATE_INPUT_ASK: 'UPDATE_INPUT_ASK',
  UPDATE_INPUT_BID: 'UPDATE_INPUT_BID',
};

const urlExchangeRates =
  'https://api.exchangeratesapi.io/latest';

const startLoading = () => ({
  type: ACTION_TYPES.START_LOADING,
});

const stopLoading = () => ({
  type: ACTION_TYPES.STOP_LOADING,
});

const saveListExchangeRates = data => ({
  type: ACTION_TYPES.SAVE_LIST_EXCHANGE_RATES,
  payload: data
})

export const loadListExchangeRates = () => dispatch => {
  dispatch(startLoading());

  fetch(urlExchangeRates)
    .then(res => res.json())
    .then(( { rates } ) => {
      dispatch(saveListExchangeRates(rates))
    })
    .catch(error => console.log(error))
    .finally(() => dispatch(stopLoading()))
};

export const isChecked = id => ({
  type: ACTION_TYPES.IS_CHECKED,
  payload: id
});

export const updateSelectAsk = (value) => ({
  type: ACTION_TYPES.UPDATE_SELECT_ASK,
  payload: value,
});

export const updateSelectBid = (value) => ({
  type: ACTION_TYPES.UPDATE_SELECT_BID,
  payload: value,
});

export const updateInputAsk = (value) => ({
  type: ACTION_TYPES.UPDATE_INPUT_ASK,
  payload: value,
});

export const updateInputBid = (value) => ({
  type: ACTION_TYPES.UPDATE_INPUT_BID,
  payload: value,
});
