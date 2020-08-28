import React from 'react';
import './Rate.css';
import Calc from '../Calc/Calc';

class Rate extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          'exchangeLink': 'https://api.exchangeratesapi.io/latest',
          'base': 'EUR',
          'data':'',
          'currencyRate' : {}
      }
      this.currency = ['USD', 'RUB', 'CAD', 'PHP'];
      this.getRate(this.state.exchangeLink);
    }

    checkCurrencyList = () => {

    }

    getRate = (exchangeLink) => {
        fetch (exchangeLink)
            .then (data => {
                return data.json();
            })
            .then (data => {
                this.setState({date: data.date});
                let result = {};
                
                for(let item of this.currency) {
                    result[item] = data.rates[item];
                }
                this.setState({currencyRate: result});
            });
    }

    changeRate = (base) => {
        const rateLink = `https://api.exchangeratesapi.io/latest?base=` + base;
        this.setState({exchangeLink: rateLink});
        this.getRate(rateLink);
        setTimeout(this.getRate(), 1000);
    }

    onRadioChange = (evt) => {
        if (evt.target.checked) {
            const baseCurrency = evt.target.value.toUpperCase();
            this.setState({base: baseCurrency});
            this.changeRate(baseCurrency);
        }

    }
      render(){
          return(
           <div className="rate">
               <h3> Курс валют на {this.state.date}</h3>
                <div>
                    <h4>Выбрать базовую валюту</h4>
                    <form className="rate__base">
                        <label htmlFor="eur"  >EUR</label>
                        <input id="eur" name="base" type="radio" value="eur" onChange={this.onRadioChange} defaultChecked={true} />
                        <label htmlFor="usd">USD</label>
                        <input id="usd" name="base" type="radio" value="usd" onChange={this.onRadioChange} />
                        <label htmlFor="rub">RUB</label>
                        <input id="rub" name="base" type="radio" value="rub" onChange={this.onRadioChange} />
                        <label htmlFor="gbp">GBP</label>
                        <input id="gbp" name="base" type="radio" value="gbp" onChange={this.onRadioChange} />
                    </form>
                </div>
                        <div className="flex-container">
                            {Object.keys(this.state.currencyRate).map((keyName, i) => 
                            (
                            <div className="block flex-item" key={keyName}>
                                <div className="currency-name">{keyName}</div>
                                <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)}*</div>
                                <p>Можно купить за 1{this.state.base}</p>
                                
                            </div> 
                            ))}
                
                        </div>
                <Calc rate={this.state.currencyRate} />        

           </div>          )
      }
  }

export default Rate;
