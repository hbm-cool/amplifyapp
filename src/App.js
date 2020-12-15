import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { AmplifyTheme } from 'aws-amplify-react';


const myTheme = {
    ...AmplifyTheme,
    BackgroundColor: { color: 'blue',backgroundColor: 'blue' },
    button: { color: 'blue',backgroundColor: 'blue' },
    amazonSignInButton: { color: 'blue',backgroundColor: 'blue' },
    signInButton: { backgroundColor: 'blue' , color: 'blue'}
};

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default  withAuthenticator(App, myTheme);
