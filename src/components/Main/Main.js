import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ListExchangeRatesContainer }
  from '../pages/ListExchangeRates/ListExchangeRatesContainer';
import { CurrencyConverterContainer }
  from '../pages/CurrencyConverter/CurrencyConverterContainer';

export const Main = () => {
  return (    
      <Switch>
        <Route path="/" exact component={ListExchangeRatesContainer} />
        <Route path="/converter" component={CurrencyConverterContainer} />
      </Switch>    
  )
}
