

// (rafce) : use to create a new component !!!!!!!! the below component
// {const Notes = () => {
// return (
// <div>

// import { updateMany } from "../../backend/models/User"
// import Notes from "./Notes"

// </div>
// )
// }

// export default Notes}



/* <button  ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" >
          Edit Note
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form className="my-3">
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label"><b>Title</b> </label>
                      <div id="emailHelp" className="form-text"></div>
                      <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label"><b>Description</b></label>
                      <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="tag" className="form-label">Tag</label>
                      <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange}/>
                    </div>
                  </form> 
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                </div>
              </div>
          </div>
      </div> */


//       signup page
//       import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const host = "http://localhost:5000";

//   let navigate = useNavigate();

//   const [credentials, setcredentials] = useState({name: "", email: "", password: "", cpassword: ""});

//   const handleSubmit= async (e)=>{
//     e.preventDefault();
//     const {name, email, password, cpassword} = credentials;
//     // Check if password and confirm password match
//     if (password !== cpassword) {
//       alert("Passwords do not match");
//       return;
//     }
//     const responce = await fetch(`${host}/api/auth/createuser`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({name, email, password}),
//       });

//       const json = await responce.json();
//       console.log(json);
//       // console.log("Form submitted");
//       if(json.success){
//       // redirect if user is logged in to users notes page and save the auth token
//         localStorage.setItem('token', json.authtoken);
//         navigate("/");
//       }
//       else{
//         alert("Invalid details" + json.error);
//       }
// }

// const onChange = (e)=>{
//   setcredentials({...credentials, [e.target.name]: e.target.value})
//   }

//   return (
//     <div className="container my-5">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label"><b>Enter Your Name</b></label>
//           <input type="text" className="form-control" id="name" onChange={onChange}  aria-describedby="emailHelp" required/>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label"><b>Email address</b></label>
//           <input type="email" className="form-control" id="email" onChange={onChange}  aria-describedby="emailHelp" required/>
//           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label"><b>Password</b></label>
//           <input type="password" className="form-control" id="password" onChange={onChange} minLength={5} required/>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="cpassword" className="form-label"><b>Confirm Password</b></label>
//           <input type="password" className="form-control" id="cpassword" onChange={onChange} minLength={5} required/>
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default Signup


// next update

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const host = "http://localhost:5000";

//   let navigate = useNavigate();

//   const [credentials, setcredentials] = useState({name: "", email: "", password: "", cpassword: ""});

//   const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

//   const handleSubmit= async (e)=>{
//     e.preventDefault();
//     const {name, email, password, cpassword} = credentials;
//     // Check if password and confirm password match
//     if (password !== cpassword) {
//       alert("Passwords do not match");
//       return;
//     }
//     try {
//     const response = await fetch(`${host}/api/auth/createuser`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({name, email, password}),
//       });

//       const json = await response.json();
//       console.log(json);
//       // console.log("Form submitted");
//       if(json.success){
//       // redirect if user is logged in to users notes page and save the auth token
//         localStorage.setItem('token', json.authtoken);
//         navigate("/");
//       }
//       else{
//         alert("Invalid details" + json.error);
//       }
//     } catch (error) {
//         console.error("Error during signup:", error);
//         alert("Something went wrong. Please try again later.");
//     }
// }

// const onChange = (e)=>{
//   setcredentials({...credentials, [e.target.name]: e.target.value})
//   }

//   return (
//     <div className="container my-5">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label"><b>Enter Your Name</b></label>
//           <input type="text" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp" required/>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label"><b>Email address</b></label>
//           <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp" required/>
//           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label"><b>Password</b></label>
//           <input type={showPassword ? "text" : "password"} className="form-control" id="password" name='password' onChange={onChange} minLength={5} required/>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="cpassword" className="form-label"><b>Confirm Password</b></label>
//           <input type={showPassword ? "text" : "password"} className="form-control" id="cpassword" name='cpassword' onChange={onChange} minLength={5} required/>
//         </div>
//           <div className="mb-3 form-check">
//             <input
//               type="checkbox"
//               className="form-check-input"
//               id="showPassword"
//               onChange={() => setShowPassword(!showPassword)} // Toggle the state
//             />
//             <label className="form-check-label" htmlFor="showPassword">
//               Show Password
//             </label>
//           </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default Signup



// Notes
// <div className="row my-3">
//             <h2>Your Notes</h2>
//             {notes.length===0 && <b>Let's Note Someting!</b>}
//             {notes.map((note)=>{
//               return <NoteItem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note}/>
//             })}
//       </div>


// const addNote = async (title, description, tag) => {
//   // ToDo: API call
//    // eslint-disable-next-line
//   const response  = await fetch(`${host}/api/notes/addnote`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "auth-token":localStorage.getItem('token')
//     },
//     body: JSON.stringify({ title, description, tag }),
//   });

//   const note = await response.json();
  
//   if (Array.isArray(notes)) {
//     setNotes([...notes, note]); // Use spread operator to add new note
//   } else {
//     console.error("Notes state is not an array:", notes);
//     setNotes([note]); // Reset `notes` to an array if it’s not
//   }

//   // console.log(note);
//   // if (note && note._id) {
//   //   setNotes([...notes, note]); // Spread operator ensures notes remain an array
//   // } else {
//   //   console.error("Invalid note response:", note);
//   // }
//   // setNotes(notes.concat(note));

//   // console.log(json)
// };
