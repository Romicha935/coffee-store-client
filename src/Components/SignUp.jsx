import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider';


const SignUp = () => {

  const {createUser} = useContext(AuthContext)
  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password);
    createUser(email,password)
  .then(result => {
    console.log(result.user);
    

      //new user has been created
      const createdAt = result.user.metadata.creationTime;
      const user = {email,createAt: createdAt}
      fetch('http://localhost:5000/user', {
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
   
    .then(res=> res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        console.log('user added to database');
        
      }
    })
    })
  
    
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Sign Up now!</h1>
      
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSignUp} className="card-body">
          <fieldset className="fieldset">
          <label className="fieldset-label">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" />
            <label className="fieldset-label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />
            <label className="fieldset-label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" />
            <div><a className="link link-hover">Forgot password?</a></div>
            <button className="btn btn-neutral mt-4">Sign Up</button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
  )
}

export default SignUp