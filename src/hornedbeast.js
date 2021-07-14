import React from "react";
import heartpic from "./Red-Heart.png";

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

  render() {
    return(
      <>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <img src={this.props.image_url} alt='' onClick={this.addCounter}/>
        <img src={heartpic} alt=''/>
        <span>Favorites: {this.state.favoriteCount}</span>
      </>
    )
  }
}


export default HornedBeast;