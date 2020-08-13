import React from 'react';
import './Calc.css';

class Calc extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          
      }
    }

   
      render(){
          return(
           <div className="calculator">
               <h3> Калькулятор обмена</h3>
                        <div className="block">
                            <div>Я хочу</div>
                            <div><label><input type="radio" name="radio" defaultValue="0" /> купить</label></div>
                            <div><label><input type="radio" name="radio" defaultValue="1" /> продать</label></div>
                            <div>
                                <input type="number" defaultValue="150" />
                                <select name="" id="">
                                    <option defaultValue="USD">USD</option>
                                    <option defaultValue="RUB">RUB</option>
                                    <option defaultValue="EUR">EUR</option>
                                    {Object.keys(this.props.rate).map((keyName, i) => 
                                    (
                                    <option  key={keyName} value={keyName}>{keyName}</option>
                        
                                    ))}
                                </select>
                            </div>
                            <div>
                                <h4>Результат</h4>
                                <ul className="calc-res">
                                    <li>EUR 150</li>
                                    <li>EUR 150</li>
                                    <li>EUR 150</li>
                                    <li>EUR 150</li>
                                </ul>
                            </div>
                        </div>
               
           </div>          )
      }
  }

export default Calc;
