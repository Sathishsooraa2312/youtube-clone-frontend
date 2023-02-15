import React from 'react';
import './App.css';
import Header from './component/Header';
import Recommendvideos from './component/Recommendvideos';
import Sidebar from './component/Sidebar';
// import {BrowseRouter as Router,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        


      <Header />
      <div className="app-page">
      <Sidebar />
     <Recommendvideos />
    </div>
    </div>
   
  );
}

export default App;
