Notes WebApp:

Simple client-side Notes WebApp implemented with React (JavaScript, HTML, CSS). All state is kept in memory (no backend, no localStorage). The app supports basic CRUD operations: create, read, update, delete.

Project Structure

- public/
    index.html
- src/
    index.js
    index.css
    App.js
    App.css
    components/
     NoteForm.js
     NoteList.js
     NoteItem.js

Data Model

- Each note is a plain JavaScript object: { id: number,      // unique id (e.g., Date.now()) title: string, content: string }

- All notes are held in React state in App.js: const [notes, setNotes] = useState([]).

Components

App
- Holds app state (notes, editingNote) and CRUD functions.
- Renders NoteForm and NoteList.
NoteForm
- Form for adding or editing a note. Calls back to App to add/update.
NoteList
- Displays list of notes or a "No notes" message.
NoteItem
- Displays a single note with Edit and Delete actions.

How to run locally

- Clone the repo: git clone (https://github.com/madhumithait/Notes_WebApp.git)
- Install dependencies: cd notes-webapp npm install
- Start the development server: npm start
- Open http://localhost:YourPort

Behaviour and Limitations

- All data is stored in memory. Reloading the page clears all notes.
- Unique ids are generated using Date.now().
- Minimal validation: if both title and content are empty on submit, the form    will reset and no note will be created/updated.
- No backend API and no browser storage are used.


