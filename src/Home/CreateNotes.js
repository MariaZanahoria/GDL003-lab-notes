import React, { Component } from 'react';
import firebase from "firebase/app";


export default class CreateNotes extends Component {
    state = {
        tittle: "",
        contentValue: ""
    }

    changeTittle = (event) => {
        this.setState({
            tittle: event.target.value
        })
    }
    changeContent = (event) => {
        this.setState({
            contentValue: event.target.value
        })
    }

    action = () => {
        const { tittle } = this.state;
        console.log(tittle)
        const {contentValue} = this.state;
        const user = firebase.auth().currentUser
        const day = new Date().toLocaleDateString();
        const hour = new Date().toLocaleTimeString();
        const dates = day + " " + hour;
        firebase.firestore().collection('Notes').add({
            title: tittle,
            notes: contentValue,
            id: user.uid,
            date: dates
        }).then(() => {
            console.log("Agregado")
        }).catch((error) => {
            console.log(error.message)
        })
    }
    render() {
        const { tittle } = this.state;
        const { contentValue } = this.state; 

        return (
            <div>
                <input
                    placeholder="Agrega un titulo"
                    value={tittle}
                    onChange={this.changeTittle}
                />
            
            <div>
                <textarea
                    placeholder="Escribe tu idea"
                    value={contentValue}
                    onChange={this.changeContent}
                />
                <div>
                </div>
                    <button
                        onClick={this.action}
                    >Agregar</button>
                </div>
            </div>
        )
    }
}