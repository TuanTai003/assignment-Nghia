import React from 'react';
import './App.css';
import Heaeder from './component/Heaeder';
import Footer from './component/Footer';
import Body from './component/Body';
function App(){
  return(
    <div>
      <Heaeder/>
        <Body/>
      <Footer/>
    </div>
  );
}

export default App;
