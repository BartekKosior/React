import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
      /*<div>
        <h1>My first React app</h1>
        <h2> Hello world !</h2>
      </div>*/

      <main className = {styles.component}>
        <h1 className = {styles.title}> My first React app </h1>
        <h2 className = {styles.subtitle}> Hello World ! </h2>  
        <List title = {['Thinks to do', <sup key='1'> soon! </sup>]}>
          
        </List>
        
        
      </main>

    
    )
  }
}

export default App;
