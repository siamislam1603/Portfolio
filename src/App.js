import React,{Component} from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
//pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
//
import Team from './components/common/Team';
import Portfolio from './components/common/Portfolio';
import Services from './components/common/Services';
class App extends Component{
    render(){
      return (
        <Router>
          <PageWrapper>    
              <Route
                exact={true}
                path="/"
                component={Home}
              />
              <Route
                path="/about"
                component={About}
              />
              <Route
                path="/contact"
                component={Contact}
              />
              <Route
                path="/team"
                component={Team}
              />
              <Route
                path="/portfolio"
                component={Portfolio}
              />
              <Route
                path="/services"
                component={Services}
              />
          </PageWrapper>
        </Router>
        
      );
    }
}

export default App;
