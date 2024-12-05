import React, { useContext, useEffect, useState, useRef } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router';


const Notes = (props) => {
  const context = useContext(noteContext);
  const {notes, getNotes, editNote } = context;

  let navigate = useNavigate();


    useEffect(() => {
      if (localStorage.getItem('token')){
        getNotes()
      }
      else{
        navigate("/login");
      }
        // eslint-disable-next-line
    }, [])

    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setnote] = useState({id : "", etitle : "", edescription : "", etag : "default"});
    //const [isModalOpen, setModalOpen] = useState(false); // State to control modal visibility

    const updateNote = (currentNote) => {
      ref.current.click();
      setnote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
      // console.log(ref.current);
      // if (ref.current) {
        //   console.log("Opening modal");
        //   ref.current.click(); // This triggers the hidden button
        //   } else {
          //     console.error("Modal reference not found");
          //   }
          
        }
        
        const handleClick =(e)=>{
          // console.log("updating the note", note)
          editNote(note.id, note.etitle, note.edescription, note.etag);
          refClose.current.click();
          props.showAlert("Note Updated Successfully", "success");
      // setModalOpen(true);
    }

    const onChange = (e)=>{
      setnote({...note, [e.target.name]: e.target.value})
    }


  return (
    <>
      <AddNote showAlert={props.showAlert} />

      <button  ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" >
          Edit Note
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                </div>
                <div className="modal-body">
                  <form className="my-3">
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label"><b>Title</b> </label>
                      <div id="emailHelp" className="form-text"></div>
                      <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label"><b>Description</b></label>
                      <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="tag" className="form-label">Tag</label>
                      <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange}/>
                    </div>
                  </form> 
                </div>
                <div className="modal-footer">
                    <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                </div>
              </div>
          </div>
      </div>


      <div className="row my-3">
        <h2>Your Notes</h2>
        {(!notes || notes.length === 0) && <b>Let's Note Something!</b>}
        {Array.isArray(notes) && notes.map((note) => (
          <NoteItem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
        ))}
      </div>

    </>
  )
}

export default Notes
