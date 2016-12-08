import React from 'react';
import ReactDOM from 'react-dom';
import LocationInput from './LocationInput.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: []
    }
  }
}

getWeather() {
  $.ajax({
    url: 'http://weatherly-api.herokuapp.com/api/weather/' + this.state.value, (data) => {
  }
  })
}

componentDidMount() {
  this.getWeather();
}

ReactDOM.render(<LocationInput />, document.getElementById('app'));
