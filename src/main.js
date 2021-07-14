import React from 'react';
import HornedBeast from './hornedbeast.js';
import beastArray from './data.js';

class Main extends React.Component {
  render() {
    return(
      beastArray.forEach(element => <HornedBeast title='' image_url='' description=''/>)
    )
  }
}

export default Main;