import React from 'react';
import './ListExchangeRates.css';

export default function ListExchangeRates(props) {
  const {
    listExchangeRates,
    setMainCurrency,
    mainCurrency,
    isSelected,
  } = props;

  if (listExchangeRates) {
    let selectCurrency = listExchangeRates.map(item => (
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

          <div className="page-currencies__main-currency">
            Main Currency
          <select
              className="page-currencies__select"
              onChange={setMainCurrency}
            >
              {selectCurrency}
            </select>
          </div>

          <div className="page-currencies__list-container">
            {listExchangeRates.map((item) => (
              <div key={item[0]} className="page-currencies__list">
                <div className="page-currencies__currency">
                  {`${item[0]} : ${(item[1] / mainCurrency).toFixed(2)}`}
                </div>
                <span
                  onClick={() => isSelected(item[0])}
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
