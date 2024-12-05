import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {

  const host = "http://localhost:5000";

  let navigate = useNavigate();

  const [credentials, setcredentials] = useState({name: "", email: "", password: "", cpassword: ""});

  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const handleSubmit= async (e)=>{
    e.preventDefault();
    const {name, email, password, cpassword} = credentials;
    // Check if password and confirm password match
    if (password !== cpassword) {
      // alert("Passwords do not match");
      props.showAlert("Passwords do not match", "danger");
      return;
    }
    try {
    const response = await fetch(`${host}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name, email, password}),
      });

      const json = await response.json();
      console.log(json);
      // console.log("Form submitted");
      if(json.success){
      // redirect if user is logged in to users notes page and save the auth token
        localStorage.setItem('token', json.authtoken);
        navigate("/");
        props.showAlert(`Account Created Successfully`, "success");
      }
      else{
        props.showAlert("invalid credentials or user with this email already exists", "danger");
      }
    } catch (error) {
        console.error("Error during signup:", error);
        alert("Something went wrong. Please try again later.");
    }
}

const onChange = (e)=>{
  setcredentials({...credentials, [e.target.name]: e.target.value})
  }

  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label"><b>Enter Your Name</b></label>
          <input type="text" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label"><b>Email address</b></label>
          <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp" required/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label"><b>Password</b></label>
          <input type={showPassword ? "text" : "password"} className="form-control" id="password" name='password' onChange={onChange} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label"><b>Confirm Password</b></label>
          <div className="input-group">
            <input type={showPassword ? "text" : "password"} className="form-control" id="cpassword" name='cpassword' onChange={onChange} minLength={5} required/>
            <span
              className="input-group-text"
              style={{
                cursor: "pointer",
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
              }}
              onClick={() => setShowPassword(!showPassword)} // Toggle state on click
            >
              <i
                className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
              ></i>
            </span>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
