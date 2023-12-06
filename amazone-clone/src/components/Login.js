import React, { useState } from 'react'
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



import "./Login.css"
import { auth } from "../firebase"



function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");


  const [errorMsg, setErrorMsg] = useState("");
  const [succesMsg, setSuccessMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);



  const signIn = () => {
    if (!email || !password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        setSuccessMsg("Login sussccessfull");
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
    console.log(password, email)
  }

  function signUp() {
    // console.log("hello")
    navigate("/signUp");
  }

  // const handleGoogleSignIn = async (e) => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       // IdP data available using getAdditionalUserInfo(result)
  //       // ...
  //     }).catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...
  //     });

  // };


  const handleSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      // The signed-in user information can be accessed from the result object
      const user = result.user;
      setSuccessMsg("Login sussccessfull")
      console.log('User signed in:', user);
      navigate("/");
    } catch (error) {
      console.error('Google Sign-In Error:', error.message);
    }
  };

  return (
    <div className='login'>
      <Link to="/">
        <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"></img>
      </Link>
      <div className='login_container'>
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input type='email' value={email} onChange={(e) =>
            setEmail(e.target.value)
          }
          />

          <h5>Password</h5>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />

          <b className="error">{errorMsg}</b>
          <button type='submit' disabled={submitButtonDisabled} onClick={signIn} className='login_signInButton'>Submit</button>


        </form>

        <p>By sign in you agree to view amazone clone terms and condition of use of sales Please see our privacy policies, our cookies Notice  and Internet Based Notice.   </p>
        <GoogleButton className='login_registerButton' onClick={handleSignInWithGoogle} />
        <button className='login_registerButton' onClick={signUp} >Create your Amazone account</button>
      </div>
    </div >
  )
}

export default Login
