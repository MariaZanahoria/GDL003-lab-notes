import React, { Component } from 'react';
// import fileUpload from './Pictures';
import db from '../FirebaseConfig';


export default class CreateNotes extends Component {
    state = {
        inputValue:""
    }

    changeValue = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    action = () => {
        const { inputvalue } = this.state;
        db.collection('Notes').add({
            Notes: inputvalue
        }).then(() => {
            console.log("Agregado")
        }).catch((error) => {
            console.log(error.message)
        })
    }
    reder() {
        const { inputValue } = this.state;

        return (
            <div>
                <input
                    placeholder="Agrega una nueva nota"
                    value={inputValue}
                    onChange={this.changeValue}
                />
                {/* <fileUpload/> */}
                <div>
                    <button onClick={this.action}>Agregar</button>
                </div>
            </div>
        )
    }
}