import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import { CoreProvider } from './components/Provider';

function App() {
  return (
    <div className="App">
      <CoreProvider>
        <div className="navbar">
          <p className="title">BlogPractice</p>
          <input placeholder="Search"/>
        </div>

        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
      </CoreProvider>
      </div>
  );
}

export default App;
