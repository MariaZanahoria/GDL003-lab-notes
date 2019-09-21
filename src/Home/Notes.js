import React, { Component } from 'react';
import firebase from '../FirebaseConfig';

export default class AllNotes extends Component {
constructor (props){
super(props);
    this.state = {
        notes: []
    }
}
    componentDidMount() {
        firebase.db.collection('Notitas').get()
        .then (querySnapshot => {
              const note = querySnapshot.docs.map(doc => ({ id: doc.id, data: doc.data()}));
                    this.setState({ notes:note })
                })
    }

    onDelete = (index) => {
        const currentNotes = [...this.state.notes]
        currentNotes.splice(index, 1)
        this.setState({ notes: currentNotes })
    }

    onModify = (index) => {
        const currentNotes = [...this.state.notes]
        const item = currentNotes[index]
        item.editable = true
        this.setState({ notes: currentNotes })
    }

    onUpdateValue = (index) => {
        const currentNotes = [...this.state.notes]
        currentNotes[index].content = this.lastInputToModify
        currentNotes[index].editable = false
        this.setState({ notes: currentNotes })
    }

    render() {
        return this.state.notes.map((note, index) =>
        <center
            key={index}>
            <p>{note.title}</p>
            {
                 !this.state.notes[index].editable ?
                    <p>{note.content}</p>
                    : <div>
                        <input onChange={(e) => this.lastInputToModify = e.target.value} />
                        <button onClick={() => this.onUpdateValue(index)}>Hecho</button>
                    </div>
            }
            <div>
                <button onClick={() => this.onDelete(index)}>Borrar</button>
                <button onClick={() => this.onModify(index)}>Modificar</button>
            </div>
        </center>
        )
    }
}