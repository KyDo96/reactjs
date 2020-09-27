import React from 'react';
import logo from './logo.svg';
import './App.css';
import StateFull , {StateFullComponent} from './components/StateFullComponent'
import './components/StateLessComponent';
import StateLessComponent from './components/StateLessComponent';
function App() {
  return <div class="App">
    <StateLessComponent />
    <StateFull />
    <StateFullComponent />
  </div>;
   
}

export default App;
