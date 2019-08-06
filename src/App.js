import React from 'react';
import Login from './Login';
import './App.css';
import Dashboard from './Dashboard';


class App extends React.Component {
  state = {
    logged: false,
    user:{}
  };
  
  loginHandler = (u) => {
    this.setState({
      logged: true,
      user:u
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.logged ? (<Dashboard user={this.state.user.username}/>):(
<Login login={this.loginHandler} />)}
      </div>
    );
  }
}

export default App;
