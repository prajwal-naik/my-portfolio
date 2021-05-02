import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './skilldisplay.css';
import SideBar from './components/SideBar'
import Display from './components/DisplayComponent'
import React from 'react';
import { render } from '@testing-library/react';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
        selected: "education"
    };
  }



  changeDisplay= async (newDisplay)=>{
    await this.setState({
      selected: newDisplay
    });
  }

  render(){
    return (
        <div className="container-fluid">
          <div className="row full-height">
            <SideBar changeDisplay={this.changeDisplay}/>
            <Display selected={this.state.selected}/>
          </div>
        </div>

    );
  }
}

export default App;


      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      // <div className="container">
      //   <div className="row">
      //       <SideBar/>
      //       <Display/>
      //   </div>
      // </div>
