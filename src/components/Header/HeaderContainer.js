import {connect} from 'react-redux';
import  {Header}  from './Header';
import {loadListExchangeRates} from '../../store/actions';

function mapStateToProps(state) {
 return {

 }
}

function mapDispatchToProps(dispatch) {
  return {
    loadListExchangeRates: () => dispatch(loadListExchangeRates()),
  }
}

export const HeaderContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Header);