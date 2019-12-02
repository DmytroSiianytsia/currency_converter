import {connect} from 'react-redux';
import ListExchangeRates from './ListExchangeRates';

function mapStateToProps(state) {
  return {
    listExchangeRates: state.listExchangeRates,
  }
}

function mapDispatchToProps(dispatch) {
  return {   
  }  
}

export const ListExchangeRatesContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ListExchangeRates);
