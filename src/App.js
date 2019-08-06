import React from 'react';
import Login from './Login';
import './App.css';
import Dashboard from './Dashboard';
import DogForm from './MainContainer';
import PuppiesList from './PuppiesList';


class App extends React.Component {
  state = {
    logged: false,
    user:{},
    dog: []
  };
  
  loginHandler = (u) => {
    this.setState({
      logged: true,
      user:u
    });
  };

  addDogHandler = (dog) => {
    this.setState({
      dog:[...this.state.dog, dog]
    })
  }

  render() {
    return (
      <div className="App">
          {this.state.logged ? (<Dashboard user={this.state.user.username}/>):(
  <Login login={this.loginHandler} />)}

  <DogForm add={this.addDogHandler} />
  <PuppiesList dog={this.state.dog} />
      </div>
    )}
}

export default App;
