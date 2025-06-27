
import React, { useContext, useState } from 'react';
import { PiPassword } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router';

import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Context/AuthContext';

const SingUp = () => {
    const{setUser,createUser,updateUser,googleLogin}=useContext(AuthContext)
    const navigate=useNavigate()
   
    const[error,setError]=useState("")
    const validatePassword = (password) => {
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const isLongEnough = password.length >= 6;
        return hasUppercase && hasLowercase && isLongEnough;
      };
    
      const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
      
        
      
        if (!validatePassword(password)) {
          setError("Password must be at least 6 characters and include both uppercase and lowercase letters.");
          return;
        } else {
          setError("");
        }
      
         createUser(email, password)
    .then(async (result) => {
      const user = result.user;


      await updateUser({
        displayName: name,
        photoURL: photo,
      });

      // Update local state
      setUser({
        ...user,
        displayName: name,
        photoURL: photo,
      });

      alert("Registration successful!");
      form.reset();
    })
    .catch((err) => {
      console.error(err);
      alert("Registration failed.");
    });
};

  
    return (
        <div>
        <div className="hero bg-base-200 min-h-screen">

<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
  <form  onSubmit={handleRegister} className="card-body">
  <h1 className="text-4xl font-bold">Register Your Now</h1>
    <fieldset className="fieldset">
        {/* name */}
        <label className="label">Name</label>
        <input type="text" 
        className="input" 
        placeholder="Your name"
        required
        name='name' />
       
        {/* Photo url */}
        <label className="label">Photo URl</label>
        <input type="text"
         className="input"
          placeholder="Photo URl"
          name='photo'
          required />
        {/* email */}
      <label className="label">Email</label>
      <input type="email"
       className="input"
        placeholder="Email"
        name='email'
        required />
      {/* password */}
      <label className="label">Password</label>
      <input type="password"
       className="input"
        placeholder="Password" 
        name='password'
        required />
        
          {error && <p className="text-error text-xs">{error}</p>}

        
     
      <button className="btn btn-neutral mt-4">Register</button>
      <p className='py-2 text-accent text-xl'>Already  have an account? <span className='text-center text-red-700'><Link to='/auth/singIn'  >Login</Link></span> </p>
    </fieldset>
     <div className='text-center'>
                <h2 className='font-semibold text-2xl'>Or,<br /> </h2>
                <h1 className='flex justify-center'  > <span className='text-lg px-2'>SingUp with</span> 
                <button
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
  </form>
</div>
</div>
</div>
    );
};

export default SingUp;