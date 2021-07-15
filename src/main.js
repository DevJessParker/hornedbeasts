import React from 'react';
import HornedBeast from './hornedbeast.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import beastArray from './data.js';
import Col from 'react-bootstrap/Col';


class Main extends React.Component {
  render() {
    return(
      <Row xs={1} xs={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
      <Col>
      {beastArray.map(element => <HornedBeast key={idx} title={element.title} description={element.description} image_url={element.image_url} />
      )}
      </Col>
      ))}
    </Row>
    )
  }
}


export default Main;