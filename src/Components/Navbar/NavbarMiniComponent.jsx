// import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import "./Navbar2.css";
import { useDispatch, useSelector } from "react-redux";
import { signoutSuccess } from "../../redux/user/userSlice";

export default function NavbarMiniComponent() {
    const dispatch = useDispatch();
    const [dialogBoxOpen, setdialogBoxOpen] = useState(false);
    const [clicked, setclicked] = useState(false);
    const handleDropDown = () => {
        setclicked(!clicked);
    };
    const { currentUserOfRestaurantApp } = useSelector(
        (state) => state.userOfRestaurantApp
    );
    // console.log("image URL: ",currentUserOfRestaurantApp.profileImgUrl);

    // console.log("username URL: ",currentUserOfRestaurantApp.username);

    // Logout Setup
    const handleDialogBox = () => {
        setdialogBoxOpen(!dialogBoxOpen);
    };
    const handleSignout = () => {
        dispatch(signoutSuccess());
    };
    return (
        <>
            <nav className="miniNavbar flex items-center justify-between flex-row flex-wrap gap-3">
                {/* Logo */}
                <div className="logo flexCenRow">
                    <box-icon
                        type="solid"
                        name="florist"
                        size="md"
                        color="red"
                    ></box-icon>
                    <h2>A.C Zone</h2>
                </div>
                <div className="nav_link">
                    <ul className="nav_links flexCenRow cup">
                        <li>
                            <NavLink
                                to="/"
                                className='text-rose-800 hover:text-rose-600'
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Menu"
                                className='text-rose-800 hover:text-rose-600'
                            >
                                Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/products"
                                className='text-rose-800 hover:text-rose-600'
                            >
                                Pizzas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className='text-rose-800 hover:text-rose-600'
                            >
                                User Dashboard
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="searchBar flexCenRow">
                    <input type="text" placeholder="Search Food..." />
                    <box-icon name="search" color="#E32636"></box-icon>
                </div>
                <div className="lg:flex gap-4 flex-row items-center justify-center sm:hidden">
                <Link to='/cart' className="flex items-center justify-center p-2 border border-red-600 rounded-full">
                    <box-icon name='cart' type='solid' color="#E32636"></box-icon>
                </Link>
                <Link to='/wishlist' className="flex items-center justify-center p-2 border border-red-600 rounded-full"><box-icon type='solid' name='heart' color="#E32636"></box-icon></Link>
                </div>
                
                <div className="otherNavLinks flexCenRow">
                    {currentUserOfRestaurantApp ? (
                        <div className=" dropdown">
                            <div
                                onClick={handleDropDown}
                                className="container bg-stone-800 h-[42px] w-[42px] overflow-hidden rounded-full cursor-pointer "
                            >
                                <img
                                    src={currentUserOfRestaurantApp.profileImgUrl}
                                    className="h-full w-full"
                                    alt="photo"
                                />
                            </div>
                            {clicked && (
                                <div className="dropdownMenu transition-all duration-200 ease-in-out p-4 absolute top-16 right-0 bg-slate-900 text-stone-300">
                                    <p className="text-sm">
                                        @{currentUserOfRestaurantApp.username}
                                    </p>
                                    <p className="text-sm">{currentUserOfRestaurantApp.email}</p>
                                    <hr className="w-full h-[1px] my-1 bg-white" />
                                    <div className="flex flex-col gap-2 items-center justify-center">
                                        <Link
                                            to="/dashboard?tab=profile"
                                            className="text-sm w-full inline p-3 bg-stone-900"
                                        >
                                            Profile
                                        </Link>
                                        <Link
                                            onClick={handleDialogBox}
                                            className="text-sm w-full p-3 bg-stone-900"
                                        >
                                            Sign Out
                                        </Link>
                                        {dialogBoxOpen && (
                                            <div className="w-screen fixed top-0 left-0 z-10 sm:px-2 h-screen bg-gray-400 text-slate-900 opacity-90">
                                                <div
                                                    className={`z-20 flex gap-2 px-6 py-7 rounded-md bg-white w-[405px] absolute top-[+15%] sm:top-[30%] sm:left-[+40%]  lg:top-[30%]  opacity-100  flex-col`}
                                                >
                                                    <div
                                                        className=" z-20 absolute w-fit p-3 top-0 right-0 cursor-pointer"
                                                        onClick={handleDialogBox}
                                                    >
                                                        {/* <AiOutlineX className="z-20 text-md"  color="red" /> */}
                                                    </div>
                                                    <p className="font-semibold pt-5">
                                                        Are you sure you want to log out ?
                                                    </p>
                                                    <div className="w-full items-start flex flex-row justify-between">
                                                        <button
                                                            type="button"
                                                            onClick={handleSignout}
                                                            className="mt-8 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors bg-slate-900 text-white hover:bg-primary/90 px-4 py-2"
                                                        >
                                                            Logout
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={handleDialogBox}
                                                            className={` mt-8 px-4 text-sm  py-2 rounded border text-slate-800 bg-white font-semibold`}
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <button className="loginBtn btn">
                                
                            <Link to="/login">login</Link>
                            </button>
                            <button className="miniSignUpBtn btn">
                                <Link to="/signup">Sign up</Link>
                            </button>
                        </>
                    )}

                    {/* <span className="loginAndSignIcon">
            <box-icon color="#E32636" name="user-plus" size="md"></box-icon>
          </span> */}
                </div>
                <div className="searchBar2 flexCenRow">
                    <input type="text" placeholder="Search Food..." />
                    <box-icon name="search" color="#E32636"></box-icon>
                </div>
            </nav>
        </>
    );
}
