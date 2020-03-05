import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Calculator from './components/calculator'

function App() {
  return (
    <React.Fragment>
      <div class="container-fulid mt-5">
        <div class="row justify-content-center">
          <div class="col-4 border rounded justify-self-center">
            <div>
              <Calculator />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
