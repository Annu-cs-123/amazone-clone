import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import "../Login.css";
import { auth } from "../../firebase"
function Form() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const signUp = () => {
    if (!userName || !email || !password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: userName,
        });
        navigate("/");
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  return (
    <div className='login'>
      <Link to="/">
        <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"></img>
      </Link>
      <div className='login_container'>
        <h1>Sign Up</h1>
        <form>
          <h5>User Name</h5>
          <input type='email' value={userName} onChange={(e) =>
            setUserName(e.target.value)
          }
          />

          <h5>Email</h5>
          <input type='email' value={email} onChange={(e) =>
            setEmail(e.target.value)
          }
          />

          <h5>Password</h5>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />

          <b className="error">{errorMsg}</b>

          <button className='login_registerButton' onClick={signUp}>Create your Amazone account</button>

        </form>
      </div>
    </div >
  )
}

export default Form
