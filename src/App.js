import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import About from './About/About';
import Points from './ ExchangePoints/ ExchangePoints';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookiesVisibility: true,
    }
  }

  componentDidMount() {
    const cookies = localStorage.getItem('cookiesVisibility')=== 'false' ? false : this.state.cookiesVisibility;
    this.setState({cookiesVisibility: cookies});
  }

  onBtnHandler =() => {
    this.setState({cookiesVisibility: false});
    localStorage.setItem('cookiesVisibility', false);
  }
      render(){
        let nav = this.props.nav;
        let cookiesText;
         if (this.state.cookiesVisibility) {
            cookiesText = <div className="well">На нашем сайте мы используем cookie для сбора информации технического характера. < br /> В
              частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
              местоположения.&nbsp;<button className="btn btn-primary btn-sm" onClick={this.onBtnHandler}>OK</button>
          </div>} else 
          {cookiesText = null}

          return(
             <div className="site">
                <Header nav={nav} />
                <div className="container">
                    <main>
                      <Router>
                        <Switch>
                          <Route exact path="/" component={Rate} />
                          <Route exact path="/points" component={Points} />
                          <Route exact path="/about" component={About} />

                        </Switch>
                      </Router>
                    </main>
                </div>

                <div className="container" id="cookie_info">
                    <div className="site-content">
                      {cookiesText}

                    </div>
                </div>
                <Footer />    
             </div>
          )
      }
  }

export default App;
