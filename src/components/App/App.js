import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import {pageContents, listData} from '../../data/dataStore';

class App extends React.Component {
  render() {
    return (
      /*<div>
        <h1>My first React app</h1>
        <h2> Hello world !</h2>
      </div>*/

      <main className = {styles.component}>
        <h1 className = {styles.title}> {pageContents.title} </h1>
        <h2 className = {styles.subtitle}> {pageContents.subtitle} </h2>  
        { /*<List title = {['Thinks to do', <sup key='1'> soon! </sup>]} src = "http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"/> */ }
        <List {['Thinks to do', <sup key='1'> soon! </sup>]} src = "http://uploads.kodilla.com/bootcamp/fer/11.react/space.png" listData />
      </main>
      
    
    )
  }
}

export default App;
