import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import './Header.css';


export class Header extends Component {

  render() {
    return (
      <BrowserRouter>
        <header className="header">
          <div className="content">
            <div className="header__inner">
              <img
                src="./images/logo.png"
                alt="currency exchange"
                className="header__logo"
              />
              <div className="header__links">
                <Link to="/currencies" className="header__link">Currencies</Link>
                <Link to="/converter" className="header__link">Converter</Link>
              </div>
            </div>
          </div>
        </header>
      </BrowserRouter>
    )
  }
}
