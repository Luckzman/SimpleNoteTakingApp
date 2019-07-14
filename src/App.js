import React from 'react';
import './reset.css'
import './App.css';
import ColorRadioButton from './component/ColorRadioButton';
import { noteColor } from './fixtures'

class App extends React.Component {
  state = {
    selectedOption: '',
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ selectedOption: e.target.value })
  }
  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="title">
            <h2>A simple note taking app</h2>
          </div>
          <div className="container-content">
            <form>
              <textarea className="note-input" placeholder="Write something here"></textarea>

              <ColorRadioButton
                options={noteColor}
                selected={this.state.selectedOption}
                onChange={(e) => this.handleChange(e)}
              />


              <button type="submit" className="submitBtn">Submit Note</button>
            </form>
            <div className="previous-btn-box">
              <button className="previous-btn">View previous note(s)</button>
            </div>
            <div className="note-container">
              <div className="note-card">
                <p className="note">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil at illo pariatur deserunt facere molestias, vero atque modi ex sunt eaque enim sit cum debitis? Eius officia adipisci quaerat. Quo!</p>
                <div className="note-content">
                  <div className="note-date">
                    <i className="far fa-clock"></i>
                    <p>3 days ago</p>
                  </div>
                  <div className="note-option">
                    <i className="far fa-edit"></i>
                    <i className="far fa-trash-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default App;
