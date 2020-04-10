import React from 'react';
import Routes from './routes';

import './styles.css';

import Header from './Components/Header';
import Main from './Pages/main';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
)

export default App;
