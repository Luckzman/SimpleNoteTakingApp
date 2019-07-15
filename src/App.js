import React from 'react';
import './reset.css'
import './App.css';
import ColorRadioButton from './component/ColorRadioButton';
import { noteColor } from './fixtures'
import NoteCard from './component/NoteCard';
import { timeDifference } from './utils/timeDifference';

class App extends React.Component {
  state = {
    selectedColor: 'grey',
    note: '',
    noteTimeStamp: new Date(),
    noteCollection: [],
  }


  handleNoteChange = e => {
    this.setState({ note: e.target.value })
  }

  handleDeleteNote = (index) => {
    console.log(index, 'index');
    const newNote = this.state.noteCollection.filter((note, noteIndex) => noteIndex !== index)
    this.setState({ noteCollection: newNote })
  }

  handleChange = e => {
    this.setState({ selectedColor: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ noteTimeStamp: new Date() })
    const newNote = {
      note: this.state.note,
      color: this.state.selectedColor,
      time: this.state.noteTimeStamp
    }
    this.state.noteCollection.unshift(newNote);
    this.setState({ note: '' })
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="title">
            <h2>A simple note taking app</h2>
          </div>
          <div className="container-content">
            <form onSubmit={this.handleSubmitd}>
              <textarea
                className="note-input"
                placeholder="Write something here"
                value={this.state.note}
                onChange={this.handleNoteChange} >
              </textarea>
              <ColorRadioButton
                options={noteColor}
                selected={this.state.selectedColor}
                onChange={this.handleChange}
              />
              <button type="submit" className="submitBtn" onClick={this.handleSubmit}>Submit Note</button>
            </form>
            <div className="note-container">
              {this.state.noteCollection.map((note, index) => {
                return <NoteCard
                  key={index}
                  note={note.note}
                  color={note.color}
                  noteTime={timeDifference(new Date(), note.time)}
                  deleteNote={() => this.handleDeleteNote(index)}
                />
              })}
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default App;
