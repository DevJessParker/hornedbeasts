import React from 'react';
import HornedBeast from './hornedbeast.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';


class Main extends React.Component {

  render() {
    return(
      <>
        <CardColumns>
        {this.props.allBeasts.map((element, idx) => <HornedBeast
        key={idx}
        index={idx}
        title={element.title}
        description={element.description}
        image_url={element.image_url}
        displayModal={this.props.displayModal}
        />
        )}
        </CardColumns>
      </>
    )
  }
}


export default Main;