import React from 'react';
import './noteCard.css';

function NoteCard({ note, color, noteTime, deleteNote }) {
  const cardBgColor = {
    backgroundColor: `${color}`
  }
  return (
    <div style={cardBgColor} className="note-card">
      <p className="note">{note}</p>
      <div className="note-content">
        <div className="note-date">
          <i className="far fa-clock"></i>
          <p>{noteTime}</p>
        </div>
        <div className="note-option">
          <i className="far fa-edit"></i>
          <i className="far fa-trash-alt delete" onClick={deleteNote}></i>
        </div>
      </div>
    </div>
  )
};

export default NoteCard;
