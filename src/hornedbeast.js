import React from "react";
import heartpic from "./Red-Heart.png";
import Card from 'react-bootstrap/Card';
import SelectedBeast from "./selectedbeast.js"


class HornedBeast extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    favoriteCount: 0
  }
}

addCounter = () => {
  this.setState({favoriteCount: this.state.favoriteCount + 1})
}

modalClickState = () => {
  this.setState({modalClick: true})
}

render() {
  return(
    <Card class="beastcard">
    <Card.Img variant="top" src={this.props.image_url} alt='' onClick={this.addCounter} onClick={this.modalClickState}/>
    <Card.Body>
    <Card.Img variant="top" src={heartpic} onClick={this.addCounter} />
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.description}
    </Card.Text>
    <Card.Text>
    Favorites: {this.state.favoriteCount}
    </Card.Text>
    </Card.Body>
    </Card>
    )
  }
}



export default HornedBeast;