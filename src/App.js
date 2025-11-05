import React, { useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  // Create
  function addNote(note) {
    const newNote = {
      id: Date.now(),
      title: note.title,
      content: note.content,
    };
    setNotes(prev => [newNote, ...prev]);
  }

  // Read is handled by passing notes to NoteList

  // Update
  function updateNote(updated) {
    setNotes(prev => prev.map(n => (n.id === updated.id ? updated : n)));
    setEditingNote(null);
  }

  // Delete
  function deleteNote(id) {
    setNotes(prev => prev.filter(n => n.id !== id));
    if (editingNote && editingNote.id === id) {
      setEditingNote(null);
    }
  }

  function startEdit(note) {
    setEditingNote(note);
  }

  function cancelEdit() {
    setEditingNote(null);
  }

  return (
    <div className="app-container">
      <h1 className="app-title">Notes</h1>
      <div className="app-main">
        <NoteForm
          onAdd={addNote}
          onUpdate={updateNote}
          editingNote={editingNote}
          onCancelEdit={cancelEdit}
        />
        <NoteList notes={notes} onEdit={startEdit} onDelete={deleteNote} />
      </div>
    </div>
  );
}