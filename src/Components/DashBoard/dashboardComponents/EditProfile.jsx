// import React from 'react'
import { useSelector } from "react-redux";

function EditProfile() {
  // const userId = useSelector(state => state.userOfRestaurantApp.currentUserOfRestaurantApp?._id?? 'Not signed in');
  const email = useSelector(state => state.userOfRestaurantApp.currentUserOfRestaurantApp?.email)
  const username = useSelector(state => state.userOfRestaurantApp.currentUserOfRestaurantApp?.username)
  const profilePic = useSelector(state => state.userOfRestaurantApp.currentUserOfRestaurantApp?.profileImgUrl)
  const { currentUserOfRestaurantApp } = useSelector(
    (state) => state.userOfRestaurantApp
  );
// const backupImg = "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?w=740"
  console.log(profilePic);
  
  return (
    <div
      className="rounded-lg border bg-card text-card-htmlForeground shadow-sm w-full max-h-[100%] max-w-2xl"
      data-v0-t="card"
    >
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
          Profile
        </h3>
        <div className="flex pt-4 items-center gap-4">
          <span className="relative flex shrink-0 overflow-hidden rounded-full w-[305px]">
            <img
              src={currentUserOfRestaurantApp.profileImgUrl}
              alt="Photo"
              className="w-4/12 mix-blend-multiply border border-solid"
            />
          </span>
          {/* <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-htmlForeground h-10 px-4 py-2">
            Upload
          </button> */}
        </div>
      </div>
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
              id="name"
              placeholder="Enter your name"
              value={username}
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
              value={email}
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
          ></textarea>
        </div>
      </div>
      <div className="flex items-center px-6 pt-1 pb-2">
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-black text-white hover:bg-white hover:text-black duration-200 border h-10 px-4 py-2 ml-auto"
          type="submit"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
