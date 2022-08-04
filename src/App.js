import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';
import { originals, actions, comedy, drama, fiction } from './urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Originals' url={originals}/>
      <RowPost title='Action' isSmall url={actions}/>
      <RowPost title='Comedy' isSmall url={comedy}/>
      <RowPost title='Drama' isSmall url={drama}/>
      <RowPost title='Sci-Fi' isSmall url={fiction}/>
    </div>
  );
}

export default App;
