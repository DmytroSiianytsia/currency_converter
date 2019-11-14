import {connect} from 'react-redux';
import  CurrencyConverter from './CurrencyConverter';


function mapStateToProps(state) {
  return {
    listExchangeRates: state.listExchangeRates,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    
  }  
}

export const CurrencyConverterContainer = connect(
  mapStateToProps, mapDispatchToProps
)(CurrencyConverter);
