// import React from 'react'
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateStart,
  updateSuccess,
  updateFailure,
} from "../../../redux/user/userSlice";
import Avatars from "./Avatars";

function EditProfile() {
  const dispatch = useDispatch();
  // const userId = useSelector(state => state.userOfRestaurantApp.currentUserOfRestaurantApp?._id?? 'Not signed in');
  const email = useSelector(
    (state) => state.userOfRestaurantApp.currentUserOfRestaurantApp?.email
  );
  const username = useSelector(
    (state) => state.userOfRestaurantApp.currentUserOfRestaurantApp?.username
  );
  const { currentUserOfRestaurantApp } = useSelector(
    (state) => state.userOfRestaurantApp
  );

  const [formData, setFormData] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  const [updateMsg, setUpdateMsg] = useState(false);
  const [loading, setLoading] = useState(false)

const handleChangeInForm = (e) => {
  setFormData((prevData) => ({
    ...prevData,
    [e.target.id]: e.target.value,
  }));
};


  const [currentAvatar, setCurrentAvatar] = useState(
    "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?w=740&t=st=1727435366~exp=1727435966~hmac=feaa25b0c261a180a0e638b048958fdc1f174ad75cd4c83cf34d3f1da437f1a8"
  );
  const [showAvatarSelection, setShowAvatarSelection] = useState(false);

  const handleSaveAvatar = (newAvatar) => {
    setCurrentAvatar(newAvatar);
    setFormData((prevData) => ({
      ...prevData,
      profilePic: newAvatar, 
    }));
    setShowAvatarSelection(false);
  };


  const handleCancel = () => {
    setShowAvatarSelection(false); 
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(formData).length === 0) {
      return setErrorMsg("Change some fields to update");
    }

    try {
      dispatch(updateStart());
      setLoading(true)
      console.log("Form Data Before Submit:", formData); 
      const res = await fetch(
        `http://localhost:3000/api/user/update/${currentUserOfRestaurantApp._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          credentials: "include",
          withCredntials: true,
        }
      );

      const data = await res.json();
      if (res.ok) {
        dispatch(updateSuccess(data));
        setLoading(false)
        setUpdateMsg(true);
        setInterval(() => {
          setUpdateMsg(false);
        }, 5000);

      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setLoading(false);
      dispatch(updateFailure(error.message));
    }
  };
  return (
    <form
      onChange={handleChangeInForm}
      className="rounded-lg border bg-card text-card-htmlForeground shadow-sm w-full max-h-[100%] max-w-2xl"
    >
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
          Profile
        </h3>
        <div className="flex pt-4 items-center gap-4">
          <span className="relative border flex shrink-0 overflow-hidden rounded-md w-[170px] h-[175px]">
            <img
              src={currentUserOfRestaurantApp.profilePic}
              alt="Photo"
              id="profilePic"
              className="w-full mix-blend-multiply border border-solid"
            />
          </span>
          <button
            type="button"
            className="bg-stone-100 px-4 rounded-md text-sm py-2"
            onClick={() => setShowAvatarSelection(true)}
          >
            Change Photo
          </button>

          {showAvatarSelection && (
            <div className="modal-background">
              <Avatars
                onCancel={handleCancel}
                currentAvatar={currentAvatar}
                onSave={handleSaveAvatar}
              />
            </div>
          )}
          {/* <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-htmlForeground h-10 px-4 py-2">
            Upload
          </button> */}
        </div>
      </div>
      {updateMsg && (
        <div
          className="w-[300px] border-black z-999 duration-700 shadow-lg fixed top-5 right-10 text-start mb-4 p-4 bg-green-100 text-green-800 rounded-lg"
          style={{ zIndex: 9999 }}
        >
          <p>
            Changes Saved <strong>Successfully</strong>!!!
          </p>
        </div>
      )}

      <div className="p-6 pt-0 pb-4 grid gap-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="username"
              placeholder="Enter your name"
              defaultValue={username}
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="email"
              placeholder="m@example.com"
              type="email"
              defaultValue={email}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="phone"
            placeholder="(123) 456-7890"
            type="tel"
            defaultValue={currentUserOfRestaurantApp.phone}
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="bio"
          >
            Bio
          </label>
          <textarea
            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]"
            id="bio"
            placeholder="Tell us a bit about yourself..."
            defaultValue={currentUserOfRestaurantApp.bio}
          ></textarea>
        </div>
      </div>
      <div className="flex items-center px-6 pt-1 pb-2">
        <button
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-black text-white hover:bg-white hover:text-black duration-200 border h-10 px-4 py-2 ml-auto`}
          type="submit"
          disabled={loading}
          onClick={handleFormSubmit}
        >
          {loading ? (
            <>
              <span className="pl-3"> Loading....</span>
            </>
          ) : (
            "Save Changes"
          )}
        </button>
      </div>
      {errorMsg && (
        <p className="px-3 py-2 bg-red-600 text-white">{errorMsg}</p>
      )}
    </form>
  );
}

export default EditProfile;
