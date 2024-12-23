// import React from 'react'
// import Navbar from "../Navbar/Navbar"
import GoBackButton from "../GoBackButton/GoBackButton";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EditProfile from "./dashboardComponents/EditProfile";
import MakePizza from "./dashboardComponents/MakePizza";
import { signoutSuccess } from "../../redux/user/userSlice";
// import Orders from "./dashboardComponents/Orders";
import NavbarMiniComponent from "../Navbar/NavbarMiniComponent";
import DraftPizzas from "./dashboardComponents/DraftPizzas";
import Address from "./dashboardComponents/Address";
import Orders from "./dashboardComponents/Orders";


function DashBoard() {
  
  const dispatch = useDispatch();
  const [dialogBoxOpen, setdialogBoxOpen] = useState(false);
  const userId = useSelector(state => state.userOfRestaurantApp.currentUserOfRestaurantApp?._id?? 'Not signed in');
  const username = useSelector(state => state.userOfRestaurantApp.currentUserOfRestaurantApp?.username)
  const {currentUserOfRestaurantApp} = useSelector(state => state.userOfRestaurantApp)
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
const handleSignout = () => {
  dispatch(signoutSuccess());
}

  const handleDialogBox = () => {
    setdialogBoxOpen(!dialogBoxOpen)
  }
  return (
    <>
      <NavbarMiniComponent />
      <GoBackButton className="z-20 top-33 mt-5 bg-transparent" />

      <div className="dashboard-container sm:px-0 py-4 min-h-screen px-4 text-stone-900 flex flex-row items-start justify-start gap-4">
        <aside className="bg-stone-200 w-[305px] min-h-fit p-3 py-4 rounded-lg flex flex-col justify-center items-center gap-6 ">
          <div className="profileDetails flex flex-col justify-center items-center gap-1">
            <div className="profileImg w-full flex flex-col justify-center items-center">
              <img
                src={currentUserOfRestaurantApp.profilePic}
                alt="Photo"
                className="w-6/12 mix-blend-multiply border border-solid border-rose-500 rounded-full"
              />
            </div>
            <h2 className="userName text-xl font-black">{username}</h2>
            <span className="text-md">{userId}</span>
          </div>
          <hr className="w-[100%] h-[3px] bg-stone-600 " />
          <div className="LinksContainer flex flex-col justify-start items-start gap-6">
            <div className="asideLink flex flex-row justify-center items-center gap-2">
              <box-icon
                type="solid"
                name="user-account"
                color="#E32636"
              ></box-icon>
              <span className="font-semibold opacity-90">
                <Link to="/dashboard?tab=profile">Edit Profile</Link>
              </span>
            </div>
            <div className="asideLink flex flex-row justify-center items-center gap-2">
              <box-icon
                type="solid"
                name="edit-location"
                color="#E32636"
              ></box-icon>
              <Link
                to="/dashboard?tab=address"
                className="font-semibold opacity-90"
              >
                Address
              </Link>
            </div>
            <div className="asideLink flex flex-row justify-center items-center gap-2">
              <box-icon name="clipboard" color="#E32636"></box-icon>
              <Link
                to="/dashboard?tab=orders"
                className="cursor-pointer font-semibold opacity-90"
              >
                Order & Reordering
              </Link>
            </div>
            <div className="asideLink flex flex-row justify-center items-center gap-2">
              <box-icon type="solid" name="heart" color="#E32636"></box-icon>
              <span className="font-semibold opacity-90">
                <Link to="/wishlist">WishList</Link>
              </span>
            </div>
            <div className="asideLink flex flex-row justify-center items-center gap-2">
              <box-icon type="solid" name="cart" color="#E32636"></box-icon>
              <span className="font-semibold opacity-90">
                <Link to="/cart">Cart</Link>
              </span>
            </div>
            {/* <div className="asideLink flex flex-row justify-center items-center gap-2">
            <box-icon name="lock-alt" type="solid" color="#E32636"></box-icon>
            <span className="font-semibold opacity-90">Change password</span>
          </div> */}
            <div className="asideLink flex flex-row justify-center items-center gap-2">
              <box-icon name="pizza" type="solid" color="#E32636"></box-icon>
              <span className="font-semibold opacity-90">
                <Link to="/dashboard?tab=make_pizza">Make Pizza</Link>
              </span>
            </div>
            <div className="asideLink flex flex-row justify-center items-center gap-2">
              <box-icon type="solid" name="baguette" color="#E32636"></box-icon>
              <span className="font-semibold opacity-90">
                <Link to="/dashboard?tab=draft_pizza">Draft Pizzas</Link>
              </span>
            </div>
            <div className="asideLink flex flex-row justify-center items-center gap-2">
              <box-icon
                type="solid"
                name="user-account"
                color="#E32636"
              ></box-icon>
              <span className="font-semibold opacity-90">
                <Link onClick={handleDialogBox}>Logout</Link>
              </span>
            </div>
          </div>
        </aside>
        {dialogBoxOpen && (
          <div className="w-screen fixed top-0 left-0 z-10 sm:px-2 h-screen bg-gray-400  opacity-90">
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
        <div className="Dashboard w-full pr-3">
          {tab === "orders" && (
            <>
              <h2 className="text-2xl font-black text-slate-900">Your orders</h2>
              <span className="opacity-90">
                Lets check your orders.
              </span>{" "}
              <Orders />
            </>
          )}
          {tab === "profile" && <EditProfile />}

          {tab === "make_pizza" && <MakePizza />}

          {tab === "draft_pizza" && <DraftPizzas />}

          {tab === "address" && <Address />}

          {tab === "orders" && <Orders />}
        </div>
      </div>
    </>
  );
}

export default DashBoard;
