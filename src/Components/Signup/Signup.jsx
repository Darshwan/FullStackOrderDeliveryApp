/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({})
  const [errorMsg, setErrorMsg] = useState(null)

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (!formData.username || !formData.email || !formData.password || formData.username === '' || formData.email === '' || formData.password === '') {
      return setErrorMsg("Please Fill out all the fields")
  }
  try {
    console.log("Sending Data: ", formData);

    // send post request 
   const res =  await fetch("http://localhost:3000/api/auth/signup", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    })
    console.log("Response Status",res.status);

    const data = await res.json()
    console.log("Response Data: ", data);
    if(res.ok){
      navigate("/login")
    }
  } catch (error) {
    console.log("Failed to Fetch", error);
    setErrorMsg("error: ", error);
  }
  }
  const handleChange = (e)=>{
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
    console.log(formData);
  }
  return (
    <div className="signUpContainer flex flex-col items-center justify-center h-screen lg:h-1/2 paddings bg-stone-900 sm:bg-stone-300 gap-1 lg:gap-4">
        <h2 className="sectionTitle text-stone-300 sm:text-stone-900">SignUp</h2>
      <div className="flex flex-row items-center paddings">
        <div className="leftSide">
          <img
            src="https://img.freepik.com/free-vector/organic-flat-design-join-us-concept_23-2148943566.jpg?t=st=1709383127~exp=1709386727~hmac=a3858bcac4ef56c7c9ccd6fcb5500eafc8a73615b666932c016f8786beb1c54c&w=740"
            alt="Signup"
            className="w-9/12 hidden lg:block mix-blend-multiply contrast-100	"
          />
        </div>
        <form onSubmit={handleFormSubmit} className="rightSide mt-10 sm:mt-20 flex flex-col items-start justify-center gap-3">
          <h2 className="text-2xl text-stone-300 sm:text-stone-900">Welcome! Join us</h2>
          <span className="opacity-90 text-stone-300 sm:text-stone-900">Add Your Details.</span>
          <div className="Email flex flex-col items-start justify-center gap-2 w-full">
            <span className="font-bold text-stone-300 sm:text-stone-900">UserName:</span>
            <input
            id="username"
              type="text"
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-1 text-stone-300 sm:text-stone-900 px-4 w-full rounded-md outline-0 bg-transparent border-2 border-slate-500	"
            />
          </div>
          <div className="Email flex flex-col items-start justify-center gap-2 w-full">
            <span className="font-bold text-stone-300 sm:text-stone-900">Email:</span>
            <input
              type="text"
              id="email"
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-1 text-stone-300 sm:text-stone-900 px-4 w-full rounded-md outline-0 bg-transparent border-2 border-slate-500	"
            />
          </div>
          <div className="password flex flex-col items-start justify-center gap-2 w-full">
            <span className="font-bold text-stone-300 sm:text-stone-900">Password:</span>
            <input
              type="text"
              placeholder="Enter password"
              id="password"
              onChange={handleChange}
              className="p-1 text-stone-300 sm:text-stone-900 px-4 w-full rounded-md outline-0 bg-transparent border-2 border-slate-500	"
            />
          </div>
          <div className="rememberAndForgot flex flex-row items-center justify-between gap-7 sm:gap-32 ">
            <label className="flex flex-row items-center">
              <input type="checkbox" className="h-4 w-4 mx-1 " /> <span className="text-stone-300 sm:text-stone-900">Remember Me</span>
            </label>
            <span className="text-red-400 cursor-pointer hover:underline ease-in-out duration-200">
              Forgot Password?
            </span>
          </div>
          <button  className="btn w-11/12 flex items-center justify-center">
            Sign Up
          </button>
          <div className="loginBtn w-full flex items-center justify-center">
            <span className="text-red-600">
              Already Created Account?{" "}
              <span className="text-black hover:underline cursor-pointer  sm:text-stone-900">
                {" "}
                Login Now
              </span>
            </span>
          </div>
          
          {errorMsg ? (<div className="error text-white bg-red-800 w-full px-6 py-2 rounded">{errorMsg} </div>): ('')}
          
        </form>
      </div>
    </div>
  );
}

export default Signup;
