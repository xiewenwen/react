import React,{Component} from 'react';

import logo from './logo.svg';
import './App.css';

import Word from "./Word";
import Rose from "./Rose";
import Test from "./test";

import ReactDOM from 'react-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <h3>陈信宏 爱你哦</h3>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <test></test>
//       </header>
//     </div>
//   );
// }
class App extends Component{
    constructor(props) {

        super(props);
        this.state={
            song:'转眼'
        }
    }
  render() {
      return(
          <div>
          <div className='App'>
              陈信宏{this.state.song}

          </div>
              <Word></Word>
              <Rose/>
              <Test/>

          </div>



      );
  }

}






export default App;
