import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({ notes, onEdit, onDelete }) {
  return (
    <div className="note-list">
      <h2 className="list-heading">All Notes</h2>
      {notes.length === 0 ? (
        <div className="no-notes">No notes</div>
      ) : (
        <div className="notes-grid">
          {notes.map(note => (
            <NoteItem key={note.id} note={note} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
}