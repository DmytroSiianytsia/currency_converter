import React from 'react';
import './CurrencyConverter.css';

export default function CurrencyConverter(props) {
  const {
    listExchangeRates,
    updateSelectBid,
    updateInputBid,
    updateSelectAsk,
    updateInputAsk,
    selectAsk,
    selectBid,
    inputBid,
    inputAsk,
  } = props;

  if (listExchangeRates) {
    const listCurrensies = listExchangeRates.map(item => (
      <option value={item[1]} key={item[0]}>{item[0]}</option>
    ));

    return (
      <div className="page-converter">
        <div className="content">
          <h2 className="page-converter__title">CONVERTER</h2>
          <div className="page-converter__converter">
            <div className="page-converter__have">
              <div className="page-converter__label">I HAVE</div>
              <input
                className="page-converter__input"
                type="text"
                onChange={e => updateInputBid(e.target.value)}
                value={inputBid}
              />
              <select
                name="bid"
                className="page-converter__select"
                onChange={e => updateSelectBid(e.target.value)}
                value={selectBid}
              >
                {listCurrensies}
              </select>
            </div>
            <div className="page-converter__want">
              <div className="page-converter__label">I'LL GET</div>
              <input
                className="page-converter__input"
                type="text"
                onChange={e => updateInputAsk(e.target.value)}
                value={inputAsk}
              />
              <select
                name="ask"
                className="page-converter__select"
                onChange={e => updateSelectAsk(e.target.value)}
                value={selectAsk}
              >
                {listCurrensies}
              </select>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return 'Loading......';
  }
}
