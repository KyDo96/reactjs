import React from 'react';
import logo from './logo.svg';
import './App.css';
import StateFull , {StateFullComponent} from './components/StateFullComponent'
import './components/StateLessComponent';
import StateLessComponent from './components/StateLessComponent';
import Home from './BaiTapChiaComponent/Home';
function App() {
  return <div>
    {/* <StateLessComponent />
    <StateFull />
    <StateFullComponent /> */}
    <Home />
  </div>;
   
}

export default App;
