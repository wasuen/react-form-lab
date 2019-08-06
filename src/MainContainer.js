import React, { Component } from 'react';

class DogForm extends Component {
    state = {
        name: '',
        age: '',
        breed: '',
    }

    dogChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    dogSubmitHandler = (e) => {
        e.preventDefault();
        this.props.add(this.state)
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Dog</h1>
                <form onSubmit={this.dogSubmitHandler}>
                    <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.dogChangeHandler} />
                    <input type="text" name="age" placeholder="Age" value={this.state.age} onChange={this.dogChangeHandler} />
                    <input type="text" name="breed" placeholder="Breed" value={this.state.breed} onChange={this.dogChangeHandler} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default DogForm;