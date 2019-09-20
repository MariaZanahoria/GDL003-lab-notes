import React, { Component } from 'react';
import db from '../FirestoreConfig';

export default class AllNotes extends Component {

    state = {
        notes: []
    }

    componentDidMount() {
        db.collection('Notes').onSnapshot((snapShots) => {
            this.setState({
                notes: snapShots.docs.map(doc => {
                    return { id: doc.id, data: doc.data() }
                })
            })
        }), error => {
            console.log (error.messege)
        }
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