import React, { Component } from 'react'

class Greeter extends Component {
    render() {
        return (
            <div>
            { "Hello" + ( 100 + 1) }
            </div>
        );
    }
}

export default Greeter
