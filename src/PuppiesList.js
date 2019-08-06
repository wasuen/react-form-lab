import React, { Component } from 'react';

class PuppiesList extends Component {
    render() {
            return(
                <div>
                    <ul>
                        {this.props.dog.map((d,i) => {
                            return <li key={i}>{d.name}, {d.age}, {d.breed}</li>
                            })}
                    </ul>
                </div>
            )
        }
}

export default PuppiesList;