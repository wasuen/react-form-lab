import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return <h1> Hello {this.props.user} </h1>
    }
}

export default Dashboard;