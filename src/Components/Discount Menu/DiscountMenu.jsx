// import React from 'react'

function DiscountMenu() {
  return (
    <div className="DiscountMenu-container bg-stone-900 p-3 flex flex-col items-center justify-center">
      <h3 className="sectionTitle">Todays Discount Menu</h3>
      <div className="Cards w-full py-5 flex flex-row items-center justify-start lg:justify-center flex-wrap gap-4">
        <div className="card bg-slate-800 rounded-md p-7 sm:p-3 w-full sm:w-5/12 object-cover flex flex-col lg:flex-row items-start justify-between gap-2">
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Burger"
            className="h-full w-full lg:w-5/12 object-cover rounded-lg"
          />
          <div className="Details text-stone-200 flex flex-col items-start justify-between gap-1">
            <p className="Food-Name text-lg font-bold ">
              Pancake with sliced Strawberry
            </p>
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
            <span className="food-desc">Pancakes with Sliced Strawberry.</span>
            <span className="price text-2xl">
              $25.00 <span className="line-through text-base">$30</span>
            </span>
            <button className="btn flex items-center justify-center w-10/12">Order Now</button>
          </div>
        </div>
        <div className="card bg-slate-800 rounded-md p-7 sm:p-3 w-full sm:w-5/12  object-cover flex flex-col lg:flex-row items-start justify-between gap-2">
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Burger"
            className="h-full w-full lg:w-5/12 object-cover rounded-lg"
          />
          <div className="Details text-stone-200 flex flex-col items-start justify-between gap-1">
            <p className="Food-Name text-lg font-bold ">
              Pancake with sliced Strawberry
            </p>
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
            <span className="food-desc">Pancakes with Sliced Strawberry.</span>
            <span className="price text-2xl">
              $25.00 <span className="line-through text-base">$30</span>
            </span>
            <button className="btn flex items-center justify-center w-10/12">Order Now</button>
          </div>
        </div>
        
        <div className="hideForSm w-full py-5 hidden sm:flex flex-row items-center justify-center flex-wrap gap-4">
        <div className="card bg-slate-800 rounded-md p-7 sm:p-3 w-full sm:w-5/12 object-cover flex flex-col lg:flex-row items-start justify-between gap-2">
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Burger"
            className="h-full w-full lg:w-5/12 object-cover rounded-lg"
          />
          <div className="Details text-stone-200 flex flex-col items-start justify-between gap-1">
            <p className="Food-Name text-lg font-bold ">
              Pancake with sliced Strawberry
            </p>
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
            <span className="food-desc">Pancakes with Sliced Strawberry.</span>
            <span className="price text-2xl">
              $25.00 <span className="line-through text-base">$30</span>
            </span>
            <button className="btn flex items-center justify-center w-10/12">Order Now</button>
          </div>
        </div>
        <div className="card bg-slate-800 rounded-md p-7 sm:p-3 w-full sm:w-5/12  object-cover flex flex-col lg:flex-row items-start justify-between gap-2">
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Burger"
            className="h-full w-full lg:w-5/12 object-cover rounded-lg"
          />
          <div className="Details text-stone-200 flex flex-col items-start justify-between gap-1">
            <p className="Food-Name text-lg font-bold ">
              Pancake with sliced Strawberry
            </p>
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
            <span className="food-desc">Pancakes with Sliced Strawberry.</span>
            <span className="price text-2xl">
              $25.00 <span className="line-through text-base">$30</span>
            </span>
            <button className="btn flex items-center justify-center w-10/12">Order Now</button>
          </div>
        </div>
        </div>

{/* 
        <div className="card bg-slate-900 rounded-md p-3  w-5/12 object-cover bg-white flex flex-row items-start justify-between gap-2">
          <img
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Burger"
            className="w-5/12 rounded"
          />
          <div className="Details text-stone-200 flex flex-col items-start justify-between gap-2">
            <p className="Food-Name text-lg font-bold ">
              Pancake with sliced Strawberry
            </p>
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
            <span className="food-desc">Pancakes with Sliced Strawberry.</span>
            <span className="price text-2xl">
              $25.00 <span className="line-through text-base">$30</span>
            </span>
            <button className="btn">Order Now</button>
          </div>
        </div>

        <div className="card bg-slate-900  rounded-md p-3  w-5/12 object-cover bg-white flex flex-row items-start justify-between gap-2">
          <img
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Burger"
            className="w-5/12 rounded"
          />
          <div className="Details text-stone-200 flex flex-col items-start justify-between gap-2">
            <p className="Food-Name text-lg font-bold ">
              Pancake with sliced Strawberry
            </p>
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
            <span className="food-desc">Pancakes with Sliced Strawberry.</span>
            <span className="price text-2xl">
              $25.00 <span className="line-through text-base">$30</span>
            </span>
            <button className="btn">Order Now</button>
          </div>
        </div>

        <div className="card bg-slate-900 rounded-md p-3  w-5/12 object-cover bg-white flex flex-row items-start justify-between gap-2">
          <img
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Burger"
            className="w-5/12 rounded"
          />
          <div className="Details text-stone-200 flex flex-col items-start justify-between gap-2">
            <p className="Food-Name text-lg font-bold ">
              Pancake with sliced Strawberry
            </p>
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
            <span className="food-desc">Pancakes with Sliced Strawberry.</span>
            <span className="price text-2xl">
              $25.00 <span className="line-through text-base">$30</span>
            </span>
            <button className="btn">Order Now</button>
          </div>
        </div>

        <div className="card bg-slate-900  rounded-md p-3  w-5/12 object-cover bg-white flex flex-row items-start justify-between gap-2">
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Burger"
            className="h-full w-5/12 object-cover rounded"
          />
          <div className="Details text-stone-200 flex flex-col items-start justify-between gap-2">
            <p className="Food-Name text-lg font-bold ">
              Pancake with sliced Strawberry
            </p>
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
            <span className="food-desc">Pancakes with Sliced Strawberry.</span>
            <span className="price text-2xl">
              $25.00 <span className="line-through text-base">$30</span>
            </span>
            <button className="btn">Order Now</button>
          </div>
        </div>

        <div className="card bg-slate-900 rounded-md p-3  w-5/12 object-cover bg-white flex flex-row items-start justify-between gap-2">
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Burger"
            className="h-full w-5/12 object-cover rounded"
          />
          <div className="Details text-stone-200 flex flex-col items-start justify-between gap-2">
            <p className="Food-Name text-lg font-bold ">
              Pancake with sliced Strawberry
            </p>
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
            <span className="food-desc">Pancakes with Sliced Strawberry.</span>
            <span className="price text-2xl">
              $25.00 <span className="line-through text-base">$30</span>
            </span>
            <button className="btn">Order Now</button>
          </div>
        </div> */}
      </div>
      <button className="btn-alt flex flex-row justify-center gap-1 items-center">View More<box-icon name='chevrons-right'></box-icon></button>
    </div>
  );
}

export default DiscountMenu;
