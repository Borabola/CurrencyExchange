import React from 'react';
import './ ExchangePoints.css';

class Points extends React.Component {
      render(){
          return(
            <div className="points" >
              <h1 className="points-title">Пункты обмена</h1>
              <div className="point-wrapper">
                <ul>
                  <li>ул. Винграновского, 56</li>
                  <li>(0512) 236482</li>
                </ul>
                <ul>
                  <li>ул.Генерала Карпенка, 12 -б</li>
                  <li>(0512) 340092	</li>
                </ul>
                <ul>
                  <li>ул. Космонавтов, 55</li>
                  <li>(0512) 776592	</li>
                </ul>
              </div>
        </div>
          )
      }
  }

export default Points;
