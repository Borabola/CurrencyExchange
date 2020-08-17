import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav'

class Header extends React.Component {
      render(){
        let nav = this.props.nav;
          return(
                <header>
                  <div className="top-bar animate-dropdown"></div>
                  <div className="main-header">
                      <div className="container">
                          <h1 className="site-title">React Lite Level</h1>

                      </div>
                  </div>
                  <Nav nav={nav}/>
                </header>
          )
      }
  }

export default Header;
