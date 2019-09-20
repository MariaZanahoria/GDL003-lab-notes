import React, { Component } from 'react'

export class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false,
            text: this.props.title
        }
    }

    render() {

        return (
            <div>
                <button
                    onClick={() => { this.setState({ editable: true }) }}>
                    Hola
                </button >
                {
                    this.state.editable ?
                        <input></input>
                        : <p>{this.props.title}</p>
                }
            </div>
        )
    }

}