import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";



class HornFilter extends React.Component {

  constructor(props){
    super(props);
    this.state={
    filterText: "All"
  }
  }


  handleFormSubmit = e => {
    e.preventDefault();
  }

  handleOptionClick = e => {
      this.setState({
        filterText: e.target.text
      })
    }

  render() {
    return (
      <Form>
        <Dropdown onClick={this.handleOptionClick} className="d-inline mx-2">
          <Dropdown.Toggle id="dropdown-autoclose-true">
            Sort by Number of Horns:  {this.state.filterText}
          </Dropdown.Toggle>
      
          <Dropdown.Menu onChange>
            <Dropdown.Item href="#">1</Dropdown.Item>
            <Dropdown.Item href="#">2</Dropdown.Item>
            <Dropdown.Item href="#">3</Dropdown.Item>
            <Dropdown.Item href="#">100</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button onClick={this.handleFormSubmit} variant="primary" type="submit">Submit</Button>
    </Form>
    )
  }
}


export default HornFilter;