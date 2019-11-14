import React, { Component } from 'react';

export default class CurrencyConverter extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div className="page-converter">
        <div className="content">
          <div className="my">
            <select name="" id="" className="my">list</select>
            <input type="text" />
          </div>
          <div className="want">
            <select name="" id="" className="my">list</select>
            <input type="text" />
          </div>

        </div>

      </div>
    )
  }
}
