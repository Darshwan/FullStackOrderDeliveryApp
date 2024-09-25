/* eslint-disable no-unused-vars */
// import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInStart, signInSuccess, signInFailure } from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";


function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { currentUserOfRestaurantApp } = useSelector(
    (state) => state.userOfRestaurantApp
  );
  const { loading, error: errorMsg } = useSelector((state) => state.userOfRestaurantApp);

  // Handle Form Change 
  const [formData, setFormData] = useState({})
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value})
    console.log(formData);
  }

  const submitForm = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      return dispatch(signInFailure("please fill out all the fields"));
    }
    try {
      dispatch(signInStart());

    console.log('Sending Data: ',formData);

    const res = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData),
      credentials:"include"
    })
    const data = await res.json()
    console.log(data);
    if (data.success === false) {
      dispatch(signInFailure(data.message));
    }
    if (res.ok) {
      navigate("/dashboard");
      dispatch(signInSuccess(data.user));
    }
    // if (data && data.user) {
    //   navigate("/dashboard/?tab=profile");
    //   dispatch(signInSuccess(data.user));
    // } else {
    //   dispatch(signInFailure('User data not received'));
    // }
    } catch (error) {
      console.log("Fetch Error",error);
      dispatch(signInFailure(error.message));
    }
  }
  // Toogle Passsword Visibility
  //   const [passwordVisible, setPasswordVisible] = useState(false);
  // const [password, setPassword] = useState('');
  // console.log(password);
  // const togglePasswordVisibility = () => {
  //   setPasswordVisible(!passwordVisible);
  // };

  return (
    <div className="card flex items-center justify-center h-screen">
    <div className="rounded-lg border bg-card text-card-foreground shadow-md mx-auto max-w-sm p-2">
      <div className="flex flex-col px-6 py-3 space-y-1">
        <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold">
          Login
        </h3>
        <p className="text-sm text-muted-foreground">
          Enter your UserName below to login to your account
        </p>
      </div>
      <div className="px-6 py-3">
        <form onSubmit={submitForm} className="space-y-4">
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              UserName
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="username"
              onChange={handleChange}
              placeholder="Enter your userName"
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="password"
              >
                Password
              </label>
              <Link class="ml-auto inline-blocLink text-sm underline" href="#">
                Forgot your password?
              </Link>
            </div>
            <div className="inputAndEye flex justify-center align-center gap-3">
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="password"
              required
              onChange={handleChange}
              placeholder="Enter your Password"
              // onChange={(e) => setPassword(e.target.value)}
              // type={passwordVisible ? "text" : "password"}
              
            />
            {/* <span onClick={togglePasswordVisibility}><box-icon name={passwordVisible ? "bullseye" : "low-vision"} type="solid" color="black"></box-icon></span> */}
            </div>
          </div>
          <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-stone-900 text-stone-100 hover:bg-stone-100  hover:text-stone-900 transtion transition hover:border-2 ease-in-out delay-550 h-10 px-4 py-2 w-full"
            type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="pl-3"> Loading....</span>
                      </>
                    ) : (
                      "Sign in"
                    )}
                  </button>
          {errorMsg &&  <p className="bg-rose-500 px-3 py-2 w-full text-white" >{errorMsg}</p>}
        </form>
        <div className="mt-4 text-center text-sm">
          Dont have an account?
          <Link class="underline" to="/signup">
            Sign up
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
