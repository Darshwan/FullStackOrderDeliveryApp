// import React from 'react'
import { NavLink } from "react-router-dom"
function SideBar() {
  return (
    <div className="sideBarAndCheck flexCenRow">
        <input type="checkbox" name="checkBox" id="toggleSlide" className="hidden"/>
        <div className="threeDot">
          <label htmlFor="toggleSlide">
            <span className="threeDots"><box-icon color='white' name="dots-vertical-rounded"></box-icon></span>
          </label>
       {/* <label id="overlay" htmlFor="toggleSlide"></label> */}

          </div>
          <div className="sideBar2">
            <label htmlFor="toggleSlide">
            <span className="closeSideBar"><box-icon name='x' size='md' color='white' ></box-icon></span>
            </label>
            <div className="nav_link nav_link_2  flex-col items-center justify-center hidden sm:flex">
            <ul className="nav_links flex flex-col items-center justify-center cup">
            <li className="text-xl"><NavLink to="/Home" className={({isActive})=>{`${isActive ? "text-rose-800" : "text-stone-100"}text-3xl`}}>Home</NavLink></li>
            <li className="text-xl"><NavLink to="/Menu" className={({isActive})=>{`${isActive ? "text-rose-800" : "text-stone-100"}`}}>Menu</NavLink></li>
            <li className="text-xl"><NavLink to="/Pages" className={({isActive})=>{`${isActive ? "text-rose-800" : "text-stone-100"}text-3xl`}}>Pages</NavLink></li>
            <li className="text-xl"><NavLink to="/dashboard" className={({isActive})=>{`${isActive ? "text-rose-800" : "text-stone-100"}text-3xl`}}>User Dashboard</NavLink></li>
          </ul>
        </div>
          </div>
          </div>
  )
}

export default SideBar