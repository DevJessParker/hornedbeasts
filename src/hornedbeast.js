import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';



class HornedBeast extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    favoriteCount: 0
  }
}

addCounter = () => {
  this.setState({favoriteCount: this.state.favoriteCount + 1});
  this.props.displayModal(this.props.title);
}


render() {
  return(
    <Card
      style={{ width: '14rem' }}
      bg="dark"
      text="light"
      onClick={this.addCounter}>
    <Card.Img variant="top" src={this.props.image_url} />
    <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.description}
    </Card.Text>
    <Card.Text>
    ❤️ Favorites: {this.state.favoriteCount}
    </Card.Text>
    </Card.Body>
    </Card>
    )
  }
}



export default HornedBeast;