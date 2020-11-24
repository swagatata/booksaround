import React from 'react';
import {isValid, toNormalised} from "postcode";
import './PostcodeForm.css';

export default class PostcodeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: ('SW19 1ED'),
      inputState: 'default'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clicked = this.clicked.bind(this);
  }

  handleChange(event) {
    this.setState({
      postcode: event.target.value,
      inputState: 'userInput'
    });
  }

  handleSubmit(event) {
    let postcode = this.state.postcode
    if (isValid(postcode))
      postcode = toNormalised(postcode)
    alert('Post Code is: ' + (isValid(postcode) ? postcode : 'Invalid'))
    event.preventDefault();
  }

  clicked(event) {
    this.setState({
      postcode: '',
      inputState: 'userInput'
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            id="postcode-input"
            className={this.state.inputState}
            type="text"
            value={this.state.postcode}
            onChange={this.handleChange}
            onClick={this.clicked}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}