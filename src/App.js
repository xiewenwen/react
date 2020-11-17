import React,{Component} from 'react';

import logo from './logo.svg';
import './App.css';

import Word from "./Word";
import Rose from "./Rose";
import Test from "./test";
import formatName from "./test";
import F from "./axiosTest";
import { Button } from 'antd';


import Standard from "./Standard";
import ButtonStyle from "./ButtonStyle";

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
              哈哈哈哈哈{this.state.song}

          </div>
              <Word/>
              <Rose/>
              {/*<formatName></formatName>*/}
              <Test/>
              {/*<F></F>*/}
              <Standard/>
              <ButtonStyle/>
              <Button type="primary">Primary Button</Button>
              <Button>Default Button</Button>
              <Button type="dashed">Dashed Button</Button>

          </div>




      );
  }

}






export default App;
