import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import HomePage from './components/HomePage';
import NavBAr from './components/NavBar';
import Footer from './components/Footer';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <BrowserRouter>

        <NavBAr />

        <Switch>

          <Route exact path={["/home", "/"]} component={(history) => <HomePage history={history} />} />

        </Switch>

        <Footer />

      </BrowserRouter>
    );
  }

}

export default App;
