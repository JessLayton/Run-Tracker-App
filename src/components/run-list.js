import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Run = props => (
  <tr>
    <td>{props.run.distance}</td>
    <td>{props.run.time}</td>
    <td>{props.run.location}</td>
    <td>{props.run.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.run._id}>edit</Link> | <a href="/#" onClick={() => { props.deleteRun(props.run._id) }}>delete</a>
    </td>
  </tr>
)

export default class RunList extends Component {
  constructor(props) {
    super(props);
    this.deleteRun = this.deleteRun.bind(this);
    this.state = {runs: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5001/runs/')
     .then(response => {
       this.setState({ runs: response.data });
      console.log({runs: response.data })
     })
     .catch((error) => {
        console.log(error);
     })
  }

  deleteRun(id) {
    axios.delete('http://localhost:5001/runs/'+id)
      .then(res => console.log(res.data));
    this.setState({
      runs: this.state.runs.filter(runEl => runEl._id !== id)
    })
  }

  runList() {
    return this.state.runs.map(currentrun => {
      return <Run run={currentrun} deleteRun={this.deleteRun} key={currentrun._id}/>;
    })
  }

  render() {
    return (
       <div>
  <h3>Logged Runs</h3>
  <table className="table">
    <thead className="thead-light">
      <tr>
        <th>Distance</th>
        <th>Time</th>
        <th>Location</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      { this.runList() }
    </tbody>
  </table>
</div>
    )
  }
}