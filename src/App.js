import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './store/reducer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import './styles/index.css';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HeaderContainer />       
        <Main />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
