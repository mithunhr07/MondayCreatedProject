import React, { Component } from 'react';
import LoginPage from './Components/LoginPage/LoginPage';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';



class App extends Component {
  render() {
    return (
      <div className="App">
   {/* <Router> 
   <Switch>
   <Route exact path='/' component={LoginPage}></Route>
   <Route exact path='/RegisterPage' component={RegisterPage}></Route>
   <Route exact path='/Home' component={HomePage}></Route>
   </Switch>
 </Router> */}
<HomePage/>
 

    </div>
    );
  }
}

export default App;