import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './store/reducer';
import { ListExchangeRatesContainer }
  from './components/ListExchangeRates/ListExchangeRatesContainer';
import { CurrencyConverterContainer }
  from './components/CurrencyConverter/CurrencyConverterContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { Footer } from './components/Footer/Footer';
import './styles/index.css';
import {
  Route,
  Switch,
} from 'react-router-dom';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HeaderContainer />       
        <Switch>
          <Route path="/" exact component={ListExchangeRatesContainer} />
          <Route path="/converter" component={CurrencyConverterContainer} />
        </Switch>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
