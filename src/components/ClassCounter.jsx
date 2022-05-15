import React from 'react';

class ClassCounter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.increm = this.increm.bind(this)
        this.decrem = this.decrem.bind(this)
    }

    increm() {
        this.setState({ count: this.state.count + 1 })
    }

    decrem() {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increm}>Increment</button>
                <button onClick={this.decrem}>Dicrement</button>
            </div >
        )
    }
}

export default ClassCounter