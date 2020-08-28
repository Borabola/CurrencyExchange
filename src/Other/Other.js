import React from 'react';
import './Other.css';

class Other extends React.Component {
 
      render(){
        let nav = this.props.nav;
          return(
            <div className="other">
              <h1>404</h1>
              <h2>Страница не найдена</h2>
              <p>Вы можете посетить другие страницы:</p>
              <nav>
                      <ul>
                          {nav.map((element, i) => {
                              return <li key={i}><a href={element.link}>{element.title}</a></li>
                          })}
                      </ul>
              </nav>
            </div>
          )
      }
  }

export default Other;
