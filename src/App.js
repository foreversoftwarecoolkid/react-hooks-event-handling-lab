import React from 'react';
import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Nuclear Plant Security System</h1>
        
        <Keypad />
        <EyesOnMe />
      </div>
    );
  }
}

export default App;
