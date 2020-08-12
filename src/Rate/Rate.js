import React from 'react';
import './Rate.css';

class Rate extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          'data':'',
          'currencyRate' : {}
      }
      this.currency = ['USD', 'RUB', 'CAD', 'PHP'];
      this.getRate();
    }

    getRate = () => {
        fetch ('https://api.exchangeratesapi.io/latest')
            .then (data => {
                return data.json();
            })
            .then (data => {
                console.log(data);
                this.setState({date: data.date});
                let result = {};
                /* for (let i = 0; i < this.currency.length; i++) {
                    result[this.currency[i]] = data.rates[this.currency[i]];
                }*/

                for(let item of this.currency) {
                    result[item] = data.rates[item];
                }
                console.log(result);
                this.setState({currencyRate: result});
            });
    }
      render(){
          return(
           <div className="rate">
               <h3> Курс валют на {this.state.date}</h3>
                        <div className="flex-container">
                            <div className="block flex-item">
                                <div className="currency-name">USD</div>
                                <div className="currency-in">1500 Kr</div>
                                <div className="currency-out">1200 Kr</div>
                            </div>
                            <div className="block flex-item">
                                <div className="currency-name">USD</div>
                                <div className="currency-in">1500 Kr</div>
                                <div className="currency-out">1200 Kr</div>
                            </div>
                            <div className="block flex-item">
                                <div className="currency-name">USD</div>
                                <div className="currency-in">1500 Kr</div>
                                <div className="currency-out">1200 Kr</div>
                            </div>
                        </div>
           </div>          )
      }
  }

export default Rate;
