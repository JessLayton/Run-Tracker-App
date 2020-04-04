import React, { Component } from 'react';
import "../App.css"

export default class Graphs extends Component {
    render() {
        return (
            <div>
                <h2 className="navHeading"> Run Data </h2>
                <br />
                <div>
                    <iframe title="run-tracker-graph" className="graph" id="run-tracker-graph" width="500" height="440" src="https://charts.mongodb.com/charts-project-0-hdukr/embed/charts?id=34f54dd6-6aef-4100-b11d-91b6f665c871&theme=light"></iframe>

                </div>
                <div>
                    <iframe title="run-data-graph" className="graph" id="run-data-graph" width="500" height="440" src="https://charts.mongodb.com/charts-project-0-hdukr/embed/charts?id=62202404-a0da-46bc-b121-d5b78fb32724&theme=light"></iframe>
                </div>
            </div>
        )
    }
}
