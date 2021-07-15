import React from 'react';

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalClick: false
    }
  }

  
  render () {
    return(
    <div class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{this.props.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>{this.props.description}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default SelectedBeast

