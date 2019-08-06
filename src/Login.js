import React, { Component} from 'react';

class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.login(this.state)
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.onChangeHandler} />
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onChangeHandler} />
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

export default Login;