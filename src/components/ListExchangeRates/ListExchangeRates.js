import React from 'react';
import './ListExchangeRates.css';

export default function ListExchangeRates(props) {
  const {
    listExchangeRates,
    setMainCurrency,
    mainCurrency,
    selectCurrency,
  } = props;

  if (listExchangeRates) {
    let listCurrency = listExchangeRates.map(item => (
      <option
        selected={item[0] === 'USD' ? true : false}
        value={item[1]}
        key={item[0]}
      >
        {item[0]}
      </option>
    ));

    return (
      <div className="page-currencies">
        <div className="content">
          <h2 className="page-currencies__title">
            Currency rates according to European Central Bank on
            {
              ` ${new Date().getDate()}.${(new Date().getMonth() + 1).toString().padStart(2, 0)}.${new Date().getFullYear()}`
            }
          </h2>
          <div className="page-currencies__main-currency">
            Main Currency
          <select
              className="page-currencies__select"
              onChange={setMainCurrency}
            >
              {listCurrency}
            </select>
          </div>

          <div className="page-currencies__list-container">
            {listExchangeRates.map((item) => (
              <div key={item[0]} className="page-currencies__list">
                <div className="page-currencies__currency">
                  {`${item[0]} : ${(item[1] / mainCurrency).toFixed(2)}`}
                </div>
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
            ))}
          </div>

        </div>
      </div>
    )
  } else {
    return 'loading...';
  }
}
