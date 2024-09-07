// import React from 'react'

function NewRecipes() {
  return (
    <div className="NewRecipes-container flex flex-col sm:flex-row items-start justify-center gap-4 sm:gap-5 p-4 bg-black">
      <div className="left-side ">
        <h2 className="sectionTitle">New Recipes</h2>
        <h3 className="sectionSubTitle text-xl color-white">Taste Our New Recipe</h3>
        <p className="sectionDesc">There are many variations of passages of Lorem <br /> Ipsum available,but the majority have suffered alteration in some form,  by injected humour, or randomised words which dont look even slightly believable. </p>
      </div>
      <div className="right-side overflow-x-hidden mw-100vw flex flex-row  gap-1">
        <img src="https://images.pexels.com/photos/8629050/pexels-photo-8629050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="NewRecipe" className="w-1/5  h-[500px] duration-700 ease-in-out object-cover hover:w-full"/>
        <img src="https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="NewRecipe" className="w-1/5  h-[500px] duration-700 ease-in-out  object-cover w-1/5 duration-700 ease-in-out  hover:w-6/12"/>
        <img src="https://images.pexels.com/photos/6287261/pexels-photo-6287261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="NewRecipe" className="w-1/5 h-[500px]   object-cover w-6/12 hover:w-full duration-300 ease-in-out "/>
      </div>
    </div>
  );
}

export default NewRecipes;
