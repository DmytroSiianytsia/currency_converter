import {connect} from 'react-redux';
import ListExchangeRates from './ListExchangeRates';
import { setMainCurrency, isSelected } from '../../store/actions'

function mapStateToProps(state) {
  return {
    listExchangeRates: state.listExchangeRates,
    mainCurrency: state.mainCurrency,
  }
}

function mapDispatchToProps(dispatch) {
  return { 
    setMainCurrency: value => dispatch(setMainCurrency(value.target.value)),
    isSelected: value => dispatch(isSelected(value)),  
  }  
}

export const ListExchangeRatesContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ListExchangeRates);
