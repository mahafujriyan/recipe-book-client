
import React, { useContext, useRef, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';

import { auth } from '../../../firebase.init';
import { sendPasswordResetEmail } from 'firebase/auth';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';

const SingIn = () => {
  const {  signIn,googleLogin } = useContext(AuthContext); 
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef=useRef()
  

  const handleLogIn = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
                Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User has been logIn Successfully",
          showConfirmButton: false,
          timer: 1500
        });

        navigate(location.state?.from?.pathname || "/");

      })
      .catch(error => {
        setError(error.message);
      });
  }
  const handleForgetPassword=()=>{
    console.log(emailRef.current.value)
    const email=emailRef.current.value
    sendPasswordResetEmail(auth, email)
    .then(() => {
     alert("A password reset email has been sent to you email")
    })
    .catch((error) => {
     setError(error.message)
     
    });

  }
 
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
 
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogIn} className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" 
          className="input" 
          placeholder="Email"
          name='email'
          ref={emailRef}
          required />
          <label className="label">Password</label>
          <input type="password"
           className="input" 
           placeholder="Password" 
           name='password'
           required/>
          <button
            type="button"
            onClick={handleForgetPassword}
            className="text-base-200 hover:underline text-sm mt-1 text-left"
          >
            Forgot password?
          </button>

          <button className="btn btn-neutral mt-4">Login</button>
          <p className='py-2 text-accent text-xl'>Don't you have any account? <span className='text-center text-secondary'><Link to='/singUp'  >Register</Link></span> </p>
          <div className='text-center'>
            <h2 className='font-semibold text-2xl'>Or,<br /> </h2>
           <h1 className='flex justify-center'  > <span className='text-lg px-2'>SingUp with</span> <button
          type='button'
        onClick={() => {
          googleLogin()
          .then(() => {
           navigate(location.state?.from?.pathname || "/");
         })
          .catch(err => {
        setError(err.message);
          });
      }}
      >
  <FcGoogle size={24} />
</button>

           
           </h1>
          </div>
          {error && <p className="text-error text-sm mt-2">{error}</p>}

        </fieldset>
      </form>
    </div>
  </div>
</div>
       
    );
};

export default SingIn;
