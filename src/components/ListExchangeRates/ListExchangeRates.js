import React, { Component } from 'react';
import './ListExchangeRates.css';

export default class ListExchangeRates extends Component {

  render() {
    const { listExchangeRates } = this.props;
    let a = [];
    if (listExchangeRates) {
      a = Object.entries(listExchangeRates);
      return (
        <div className="page-currencies">
          <div className="content">
      
            {a.map(item => (
              <div key={item[0]} className="page-currencies__list">
                <div className="page-currencies__currency">{`${item[0]} : ${item[1]}`}</div>
                <input
                  className="page-currencies__check"
                  type="checkbox"
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      )
    } else {
      return 'loading...';
    }
    
  }
}
