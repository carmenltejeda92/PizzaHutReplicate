import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import {Route, Routes} from 'react';
import TestPage from './components/TestPage'
import React from 'react';

function App() {
  return (
        <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
  );
}

export default App;
