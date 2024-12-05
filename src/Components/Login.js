import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login =  (props) => {
    const host = "http://localhost:5000";

    let navigate = useNavigate();

    const [credentials, setcredentials] = useState({email: "", password: ""});

    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password}),
          });
          const json = await response.json();
          console.log(json);
          // console.log("Form submitted");
          if(json.success){
            // redirect if user is logged in to users notes page and save the auth token
            localStorage.setItem('token', json.authtoken);
            props.showAlert(`Logged in Successfully ` , "success");
            navigate("/");
          }
          else{
            props.showAlert("invalid Details", "danger");
          }
    }

    const onChange = (e)=>{
      setcredentials({...credentials, [e.target.name]: e.target.value})
      }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 my-5 ">
            <label htmlFor="email" className="form-label"><b>Email address</b></label>
            <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label"><b>Password</b></label>
            <div className="input-group">
              <input type={showPassword ? "text" : "password"} className="form-control" value={credentials.password} onChange={onChange} name="password" id="password"/>
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

export default Login
