import * as React from 'react'
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Employees from './Employees';


function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Employees/>
      <Footer/>
    </div>
  );
}

export default App;
