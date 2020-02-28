import {connect} from 'react-redux';
import  CurrencyConverter from './CurrencyConverter';
import { 
  updateSelectAsk,
  updateSelectBid,
  updateInputAsk,
  updateInputBid,
} from '../../../store/actions';

function mapStateToProps(state) {
  return {
    listExchangeRates: state.listExchangeRates,
    selectAsk: state.selectAsk,
    selectBid: state.selectBid,
    inputAsk: state.inputAsk,
    inputBid: state.inputBid,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateSelectAsk: value => dispatch(updateSelectAsk(value)),
    updateSelectBid: value => dispatch(updateSelectBid(value)),
    updateInputAsk: value => dispatch(updateInputAsk(value)),
    updateInputBid: value => dispatch(updateInputBid(value)),
  };  
}

export const CurrencyConverterContainer = connect(
  mapStateToProps, mapDispatchToProps
)(CurrencyConverter);
