import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './store/reducer';
import { ListExchangeRatesContainer }
  from './components/ListExchangeRates/ListExchangeRatesContainer';
import { CurrencyConverterContainer }
  from './components/CurrencyConverter/CurrencyConverterContainer';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import './styles/index.css';
import { 
  Route,
  Switch,
  NavLink
} from 'react-router-dom';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
     
        <div className="App">
          <Header />
          <NavLink to="/currencies" className="header__link">Currencies</NavLink>
          <NavLink to="/converter" className="header__link">Converter</NavLink>
          <Switch>
            <Route path="/currencies" component={ListExchangeRatesContainer} />
            <Route path="/converter" exact component={CurrencyConverterContainer} />
          </Switch>
          <Footer />
        </div>
     
    </Provider>
  );
}

export default App;
