// import React from 'react'

function Chefs() {
  return (
    <div className="chefs-container paddings bg-stone-950 text-stone-200 flex flex-col items-center justify-center ">
      <h2 className="sectionTitle">Master Chefs</h2>
      <h3 className="sectionSubTitle">Our Professional Chefs</h3>
      <div className="w-full Cards p-5 flex flex-row items-center flex-wrap  justify-center gap-12">
        <div className="card shadow-md shadow-gray-600  w-full
         sm:w-1/4 flex flex-col items-center justify-between">
          <img
            src="https://img.freepik.com/premium-photo/portrait-young-woman-chef-background_488220-23689.jpg?w=740"
            alt="Chef"
            className="w-full rounded"
          />

          <div className="w-full p-5 bg-stone-900 flex flex-col items-center justify-between gap-1">
            <span className="text-2xl text-rose-600 font-semibold">
              Vineet Shinelair
            </span>
            {/* <span className=" font-semibold">Master Chef</span> */}
            <div className="w-1/2 flex flex-row items-stretch justify-between">
              <box-icon
                type="logo"
                name="facebook-circle"
                color="#fafafa"
              ></box-icon>
              <box-icon name="linkedin" type="logo" color="#fafafa"></box-icon>
              <box-icon name="gmail" type="logo" color="#fafafa"></box-icon>
            </div>
            <div className="w-3/2 links lex flex-row items-center justify-between gap-8">
              <box-icon
                name="star"
                color="#E32636"
                size="sm"
                type="solid"
              ></box-icon>
              <box-icon
                name="star"
                color="#E32636"
                size="sm"
                type="solid"
              ></box-icon>
              <box-icon
                name="star"
                color="#E32636"
                size="sm"
                type="solid"
              ></box-icon>
              <box-icon
                name="star-half"
                color="#E32636"
                size="sm"
                type="solid"
              ></box-icon>
              <box-icon name="star" color="#E32636" size="sm"></box-icon>
            </div>
          </div>
        </div>
        <div className="card shadow-md shadow-gray-600 w-full
         sm:w-1/4 flex flex-col items-center justify-between">
          <img
            src="https://img.freepik.com/free-photo/cook-uniform-holding-salad-showing-okay-gesture_171337-5345.jpg?w=740&t=st=1708837119~exp=1708837719~hmac=a11c619680ecce00d6582f030b5c1010892535ffa1743bd051f2fdb49bd5b45f"
            alt="Chef"
            className="w-full rounded"
          />

          <div className="w-full p-5 bg-stone-900 flex flex-col items-center justify-between gap-1">
            <span className="text-2xl text-rose-600 font-semibold">
              Vineet Shinelair
            </span>
            {/* <span className=" font-semibold">Master Chef</span> */}
            <div className="w-1/2 flex flex-row items-stretch justify-between">
              <box-icon
                type="logo"
                name="facebook-circle"
                color="#fafafa"
              ></box-icon>
              <box-icon name="linkedin" type="logo" color="#fafafa"></box-icon>
              <box-icon name="gmail" type="logo" color="#fafafa"></box-icon>
            </div>
            <div className="w-3/2 links lex flex-row items-center justify-between gap-8">
              <box-icon
                name="star"
                color="#E32636"
                size="sm"
                type="solid"
              ></box-icon>
              <box-icon
                name="star"
                color="#E32636"
                size="sm"
                type="solid"
              ></box-icon>
              <box-icon
                name="star"
                color="#E32636"
                size="sm"
                type="solid"
              ></box-icon>
              <box-icon
                name="star-half"
                color="#E32636"
                size="sm"
                type="solid"
              ></box-icon>
              <box-icon name="star" color="#E32636" size="sm"></box-icon>
            </div>
          </div>
        </div>
        <div className="card shadow-md shadow-gray-600  w-full
         sm:w-1/4  flex flex-col items-center justify-between">
          <img
            src="https://img.freepik.com/free-photo/confident-young-male-cook-chef-uniform-standing-with-closed-posture-isolated-orange-wall-with-copy-space_141793-101302.jpg?w=740&t=st=1708837301~exp=1708837901~hmac=86e7a42aa1bb4d4f88758fad80e1d90eb1905aef1f440dd06a8ef8c6a95c8165"
            alt="Chef"
            className="w-full rounded"
          />

          <div className="w-full p-5 bg-stone-900 flex flex-col items-center justify-between gap-1">
            <span className="text-2xl text-rose-600 font-semibold">
              Vineet Shinelair
            </span>
            {/* <span className=" font-semibold">Master Chef</span> */}
            <div className="w-1/2 flex flex-row items-stretch justify-between">
              <box-icon
                type="logo"
                name="facebook-circle"
                color="#fafafa"
              ></box-icon>
              <box-icon name="linkedin" type="logo" color="#fafafa"></box-icon>
              <box-icon name="gmail" type="logo" color="#fafafa"></box-icon>
            </div>
            <div className="w-3/2 links lex flex-row items-center justify-between gap-8">
              <box-icon
                name="star"
                color="#E32636"
                size="sm"
                type="solid"
              ></box-icon>
              <box-icon
                name="star"
                color="#E32636"
                size="sm"
                type="solid"
              ></box-icon>
              <box-icon
                name="star"
                color="#E32636"
                size="sm"
                type="solid"
              ></box-icon>
              <box-icon
                name="star-half"
                color="#E32636"
                size="sm"
                type="solid"
              ></box-icon>
              <box-icon name="star" color="#E32636" size="sm"></box-icon>
            </div>
          </div>
        </div>
      </div>
      <button className="btn-alt flex flex-row justify-center gap-1 items-center">View More<box-icon name='chevrons-right'></box-icon></button>
    </div>
  );
}

export default Chefs;
