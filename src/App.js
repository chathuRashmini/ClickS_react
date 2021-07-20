import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ClickS from './components/pages/ClickS';
import ClickerS from './components/pages/ClickerS';
import Footer from './components/Footer';
import SingleClick from './components/pages/SingleClick';
import SingleClicker from './components/pages/SingleClicker';

function App() {
   return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/ClickS' component={ClickS} />
            <Route path='/ClickerS' component={ClickerS} />
            <Route path='/SingleClick' component={SingleClick} />
            <Route path='/SingleClicker' component={SingleClicker} />
          </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;