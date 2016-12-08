import React from 'react';
var $ = require ('jquery');
// import ReactDOM from 'react-dom';

export default class LocationInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // getWeather(){
  //   $.ajax({
  //     url: 'http://weatherly-api.herokuapp.com/api/weather/' + this.state.value,
  //     dataType: 'json',
  //     cache: false,
  //     success: function (data) {
  //       this.setState({ value: this.state.value, weather: this.data }, function () {
  //         console.log(this.state);
  //       });
  //     }.bind(this),
  //     error: function (xhr, status, err) {
  //       console.log(err);
  //     },
  //   });
  // }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.getWeather();
    $.get('http://weatherly-api.herokuapp.com/api/weather/' + this.state.value, (data) => {
      console.log(data);
    });
    this.setState(
      { value: this.state.value,
        weather: this.state.data,
      },
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
