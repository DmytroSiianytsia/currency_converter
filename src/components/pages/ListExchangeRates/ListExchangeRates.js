import React from 'react';
import './ListExchangeRates.css';

export default function ListExchangeRates(props) {
  const {
    listExchangeRates,
    setMainCurrency,
    mainCurrency,
    selectCurrency,
  } = props;

 if ( listExchangeRates) {
    const usd = listExchangeRates.find(item => item[0] === 'USD');
    const listCurrency = listExchangeRates.map(item => (
      <option        
        value={item[1]}
        key={item[0]}
      >
        {item[0]}
      </option>
    ));

    return (
      <div className="page-currencies">
        <div className="content">
          <h1 className="page-currencies__title">
            EXCHANGE RATE          
          </h1>
          <div className="wrapper">
            <div className="page-currencies__main-currency">
              Main Currency
              <select
                className="page-currencies__select"
                onChange={setMainCurrency}
                defaultValue={usd[1]}
              >
                {listCurrency}
              </select>
            </div>           
              <div className="list-title">
                <span className="list-title__name1">Name</span>
                <span className="list-title__price1">Price</span>
                <span className="list-title__name2">Name</span>
                <span className="list-title__price2">Price</span>
              </div>          
            <div className="page-currencies__list-container">
              {listExchangeRates.map((item) => (
                <div key={item[0]} className="page-currencies__list">
                  <div className="page-currencies__currency">
                    <span>{item[0]}</span>
                    <span>{(item[1] / mainCurrency).toFixed(2)}</span>
                    <span
                      onClick={() => selectCurrency(item[0])}
                    >
                      <img
                        src='./images/star.jpg'
                        alt="star"
                        className="page-currencies__star"
                      />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return 'loading...';
  }
}
