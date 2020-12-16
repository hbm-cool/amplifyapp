import React from 'react';
//import logo  from './logo.svg';
import logo2 from './PCircle.png';
import './App.css';
//import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
//import { AmplifyTheme } from 'aws-amplify-react';

import "./style.css";

class Car extends React.Component {
  render() {
    return <h2>Powered by AWS</h2>;
  }
}

function App() {
  return (
    <div className="App">
      <header>
	    <img className="photo" src={logo2} className="Pcircle-logo" alt="PCircle Logo" />
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>We now have P Circle!</h1>
      </header>
	  <Car />
  {/* <AmplifySignOut /> */}
    </div>
  );
}

//export default  withAuthenticator(App);
export default App;
