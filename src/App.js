import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/navbar"
import RunTracker from "./components/run-list";
import EditRun from "./components/edit-run";
import AddRun from "./components/add-run";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br />
        <Route path="/" exact component={RunTracker} />
        <Route path="/edit/:id" component={EditRun} />
        <Route path="/add" component={AddRun} />
      </div>

    </Router>

  );
}

export default App;
