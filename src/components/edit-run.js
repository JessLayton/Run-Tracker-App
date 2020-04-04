import React, { Component } from 'react';
import axios from 'axios';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import "react-datepicker/dist/react-datepicker.css";
import Button from 'react-bootstrap/Button';
import "../App.css"



export default class EditRun extends Component {
  constructor(props) {
    super(props);

    this.state = {
      distance: 0,
      time: 0,
      speed: (this.distance / this.time) * 60,
      location: '',
      date: new Date(),
      errorMessage: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5001/runs/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          distance: response.data.distance,
          time: response.data.time,
          speed: response.data.speed,
          location: response.data.location,
          date: new Date(response.data.date)
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChangeDistance = (e) => {
    this.setState({
      distance: e.target.value
    });
  }

  onChangeTime = (e) => {
    this.setState({
      time: e.target.value
    });
  }

  onChangeLocation = (e) => {
    this.setState({
      location: e.target.value
    });
  }

  onChangeDate = (date) => {
    this.setState({
      date: date
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.distance <= 0 && this.state.time <= 0) {
      this.setState({ errorMessage: "Enter values for run distance and time" });
    } else if (this.state.distance <= this.state.time) {
      this.setState({ errorMessage: "Enter valid values for run distance and time" });
    } else if (this.state.distance <= 0) {
      this.setState({ errorMessage: "Enter value for run distance" });
    } else if (this.state.time <= 0) {
      this.setState({ errorMessage: "Enter value for run time" });
    } else if (this.state.location === '') {
      this.setState({ errorMessage: "Enter a run location" });
    } else {

      const run = {
        distance: this.state.distance,
        time: this.state.time,
        location: this.state.location,
        date: this.state.date,
      };

      console.log(run);

      axios.post('http://localhost:5001/runs/update/' + this.props.match.params.id, run)
        .then(res => console.log(res.data));

      window.location = '/';
    }
  }


  render() {
    return (
      <div>
        <h2 className="navHeading">Edit Run Log</h2>
        <form onSubmit={this.onSubmit}>
          <br />
          <div className="form-inputs">
            <div className="form-group">
              <label>Distance (in Kilometres): </label>
              <input type="text"
                className="form-control"
                value={this.state.distance}
                onChange={this.onChangeDistance}
                max="100"
                min="0"
                step="0.1"
              />
            </div>
            <div className="form-group">
              <label>Time (in minutes): </label>
              <input
                type="text"
                className="form-control"
                value={this.state.time}
                onChange={this.onChangeTime}
                max="1200"
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Location: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.location}
                onChange={this.onChangeLocation}
                maxLength="100"
              />
            </div>
            <div className="form-group">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
               <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date"
          format="dd/mm/yyyy"
          value={this.state.date}
          onChange={this.onChangeDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
               </MuiPickersUtilsProvider>
            </div>
          </div>
          <p className="errorMessage">{this.state.errorMessage}</p>
          <div className="form-group">
            <input type="submit" value="Edit Run Log" className="btn btn-primary" />
          </div>
          <div>
          <Button href="/">Back</Button>
          </div>
        </form>
      </div>
    )
  }
}