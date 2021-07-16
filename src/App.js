import React from "react";
import Header from "./header.js";
import Main from "./main.js";
import Footer from "./footer.js";
import beastArray from "./data.js";
import SelectedBeast from "./selectedbeast.js";
import HornFilter from "./form.js";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      allBeasts: beastArray,
      displayModal: false,
      selectedBeast: {},
    }
  }

  displayModal = (name) => {
    const selectedBeast = beastArray.find(beast => beast.title === name);
    this.setState({ selectedBeast, displayModal: true, });
  }

  handleClose = () => {
    this.setState({ displayModal: false});
  }

  render() {
    return(
    <div className="App">
      <HornFilter />
      <Header />
      <Main
        allBeasts={this.state.allBeasts}
        displayModal={this.displayModal} 
      />
      <SelectedBeast
        selectedBeast={this.state.selectedBeast}
        show={this.state.displayModal}
        handleClose={this.handleClose}
      />
      <Footer />
    </div>
    )
  }
}

export default App;
