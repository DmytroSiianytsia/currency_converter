import {connect} from 'react-redux';
import {loadListExchangeRates} from '../../store/actions';
import ListExchangeRates from './ListExchangeRates';

function mapStateToProps(state) {
  return {
    listExchangeRates: state.listExchangeRates,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadListExchangeRates: () => dispatch(loadListExchangeRates()),
  }  
}

export const ListExchangeRatesContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ListExchangeRates);
