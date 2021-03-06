import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createCheckList } from '../actions/index';

class CheckListForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createCheckList(this.props.selectedStage, this.state.value);
    this.setState({ value: '' }); // Reset message input
  }

  render() {
    return (
      // <div className="form-container">

        <form onSubmit={this.handleSubmit} className="checklist-editor">
          <input
            ref={(input) => { this.messageBox = input; }}
            type="text"
            className="form-control"
            autoComplete="off"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-primary">Save Checklist</button>
        </form>
      // </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createCheckList }, dispatch);
}

export default connect(null, mapDispatchToProps)(CheckListForm);
