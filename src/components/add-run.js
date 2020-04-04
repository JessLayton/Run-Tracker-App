import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class AddRun extends Component {
  constructor(props) {
    super(props);

    this.onChangeDistance = this.onChangeDistance.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      distance: 0,
      time: 0,
      location: '',
      date: new Date(),
    }
  }

  onChangeDistance(e) {
    this.setState({
      distance: e.target.value
    });
  }
  onChangeTime(e) {
    this.setState({
      time: e.target.value
    });
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const run = {
      distance: this.state.distance,
      time: this.state.time,
      location: this.state.location,
      date: this.state.date,
    };
    console.log(run);
    axios.post('http://localhost:5001/runs/add', run)
  .then(res => console.log(res.data));

    window.location = '/';

  }

  render() {
    return (
      <div>
         <h3>Create New Run Log</h3>
        <form onSubmit={this.onSubmit}>
        
          <div className="form-group"> 
            <label>Distance (in kilometres): </label>
            <input  type="number"
                required
                className="form-control"
                value={this.state.distance}
                onChange={this.onChangeDistance}
                max="100"
                min="0"
                />
          </div>
          <div className="form-group">
            <label>Time (in minutes): </label>
            <input 
                type="number" 
                className="form-control"
                value={this.state.time}
                onChange={this.onChangeTime}
                max="1200"
                min="0"
                />
          </div>
          <div className="form-group"> 
            <label>Location: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.location}
                onChange={this.onChangeLocation}
                maxLength="100"
                />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Create Run Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
