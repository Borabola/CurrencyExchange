import React from 'react';
import './Nav.css';



class Nav extends React.Component {
  
      render(){
        let nav = this.props.nav;
          return(
            <div className="header-nav">
                <div className="container">
                    <nav>
                        <ul>
                            {nav.map((element, i) => {
                                return <li key={i}><a href={element.link}>{element.title}</a></li>
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
          )
      }
  }

  // <ul>
  

export default Nav;
