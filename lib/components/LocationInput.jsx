import React from 'react';
var $ = require ('jquery');
// import ReactDOM from 'react-dom';

export default class LocationInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    $.get('http://weatherly-api.herokuapp.com/api/weather/' + this.state.value, (data) => {
    })
    this.setState(
      { value: this.state.value },
      () => {
        localStorage.setItem('value', JSON.stringify(this.state.value));
      }
    );
    debugger;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Location:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button
          className='submit-location'
          onClick={ (e) =>{
            this.handleSubmit(e);
          }}
          >
        </button>
      </form>
    );
  }
}
