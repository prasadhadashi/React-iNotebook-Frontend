import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);

// Fetch  user all notes on database
  const getNotes = async () => {
    // ToDo: API call
    const response  = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      }
    });
    const json = await response.json();
    console.log(json);
    setNotes(Array.isArray(json) ? json : []);
    // setNotes(json);
  };

// Add a new note
  const addNote = async (title, description, tag) => {
    // ToDo: API call
     // eslint-disable-next-line
    const response  = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();
    
    if (Array.isArray(notes)) {
      setNotes([...notes, note]); // Use spread operator to add new note
    } else {
      console.error("Notes state is not an array:", notes);
      setNotes([note]); // Reset `notes` to an array if it’s not
    }

    // console.log(note);
    // if (note && note._id) {
    //   setNotes([...notes, note]); // Spread operator ensures notes remain an array
    // } else {
    //   console.error("Invalid note response:", note);
    // }
    // setNotes(notes.concat(note));

    // console.log(json)
  };

// Delete a existing note
  const deleteNote =  async (id) => {

    // ToDo :  API call
    const responce = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      }
    });
    const json = await responce.json();
    console.log(json);

    console.log("Deleting note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

// Edit a existing note
  const editNote = async (id, title, description, tag) => {
    // ToDo: API call
    const responce = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }),
    });
     // eslint-disable-next-line
    const json = await responce.json();


    let newNotes = JSON.parse(JSON.stringify(notes));
    //logic to edit notes in client

    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
    
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
       {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
