import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './Header.css';


export class Header extends Component {

  componentDidMount() {
    this.props.loadListExchangeRates();
  }

  render() {
    return (
      <header className="header">
        <div className="content">
          <div className="header__inner">
            <img
              src="./images/logo.png"
              alt="currency exchange"
              className="header__logo"
            />
            <div className="header__links">
              <Route>
                <Link to="/" className="header__link">Currencies</Link>
              </Route>
              <Route>
                <Link to="/converter" className="header__link">Converter</Link>
              </Route>
            </div>
          </div>
        </div>
      </header>

    )
  }
}
