import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calc from './components/calc'


function App() {
  return (
    <React.Fragment>
      <div class="container-fulid mt-5 wrapper" >
        <Calc />
      </div>
    </React.Fragment>
  );
}

export default App;
