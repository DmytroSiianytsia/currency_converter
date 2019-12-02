import React from 'react';

export default function CurrencyConverter(props) { 

  if (props.listExchangeRates) {
    const listCurrensies = Object.entries(props.listExchangeRates).map(item => (      
      <option value={item[1]} key={item}>{item[0]}</option>
    ));
   
    return (
      <div className="page-converter">
        <div className="content">
          <div className="my">
            <select
              name="bid"
              id=""
              className="bid"
              onChange={e => props.updateSelectBid(e.target.value)}
            >
              {listCurrensies}
            </select>
            <input
              type="text"
              onChange={e => props.updateInputBid(e.target.value)}
              value={props.inputBid}
            />
          </div>
          <div className="want">
            <select
              name="ask"
              id=""
              className="ask"
              onChange={e => props.updateSelectAsk(e.target.value)}
            >
              {listCurrensies}
            </select>
            <input
              type="text"
              onChange={e => props.updateInputAsk(e.target.value)}
              value={props.inputAsk}
            />
          </div>
        </div>
      </div>
    )
  } else {
    return 'Loading......';
  }
}
