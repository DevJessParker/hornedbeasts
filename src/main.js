import React from 'react';
import HornedBeast from './hornedbeast.js';

class Main extends React.Component {
  render() {
    return(
      <div>
        <HornedBeast />
        <HornedBeast />
      </div>
    )
  }
}

export default Main;