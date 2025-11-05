import React, { useEffect, useState } from "react";

export default function NoteForm({ onAdd, onUpdate, editingNote, onCancelEdit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // populate when editingNote changes
  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title || "");
      setContent(editingNote.content || "");
    } else {
      setTitle("");
      setContent("");
    }
  }, [editingNote]);

  function handleSubmit(e) {
    e.preventDefault();
    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    // maintain minimal behavior: don't create/update empty note if both empty
    if (!trimmedTitle && !trimmedContent) {
      // reset form
      setTitle("");
      setContent("");
      if (editingNote) onCancelEdit();
      return;
    }

    if (editingNote) {
      onUpdate({
        id: editingNote.id,
        title: trimmedTitle,
        content: trimmedContent,
      });
    } else {
      onAdd({
        title: trimmedTitle,
        content: trimmedContent,
      });
    }

    // clear form after submit
    setTitle("");
    setContent("");
  }

  function handleReset() {
    setTitle("");
    setContent("");
    if (editingNote) onCancelEdit();
  }

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h2 className="form-heading">{editingNote ? "Edit Note" : "Add Note"}</h2>

      <label className="form-label">
        Title
        <input
          className="form-input"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter title"
        />
      </label>

      <label className="form-label">
        Content
        <textarea
          className="form-textarea"
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Enter content"
          rows={6}
        />
      </label>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {editingNote ? "Update" : "Add"}
        </button>
        <button type="button" className="btn btn-secondary" onClick={handleReset}>
          {editingNote ? "Cancel" : "Clear"}
        </button>
      </div>
    </form>
  );
}