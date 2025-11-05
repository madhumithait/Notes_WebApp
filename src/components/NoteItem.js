import React from "react";

export default function NoteItem({ note, onEdit, onDelete }) {
  return (
    <div className="note-item">
      <div className="note-header">
        <h3 className="note-title">{note.title || "Untitled"}</h3>
        <div className="note-actions">
          <button className="btn small" onClick={() => onEdit(note)}>Edit</button>
          <button className="btn small danger" onClick={() => onDelete(note.id)}>Delete</button>
        </div>
      </div>
      <div className="note-content">{note.content || ""}</div>
    </div>
  );
}