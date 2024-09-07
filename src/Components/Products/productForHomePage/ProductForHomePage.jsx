/* eslint-disable react/jsx-no-undef */

import { Link } from "react-router-dom"


export default function ProductForHomePage() {

  return (
    <section className="bg-black px-4 flex flex-col items-center justify-center pb-10">
        <h2 className="sectionTitle flex flex-col items-start py-6">Signature Dishes</h2>
    <div className="bg-black flex flex-row flex-wrap gap-7 items-center justify-around p-0 md:p-6">

      <div className="bg-slate-950 w-[330px] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-950">
        <Link className="block" href="#">
          <img
            alt="Product 1"
            className="w-full h-64 object-cover rounded-t-lg"
            height="300"
            src="https://cdn.pixabay.com/photo/2022/11/09/13/58/cheeseburger-7580676_960_720.jpg"
            style={{
              aspectRatio: "600/600",
              objectFit: "cover",
            }}
            width="300"
          />
          <hr className="mt-5 mx-3 px-3"/>
        </Link>
        <div className="p-3 bg-slate-900"> 
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">Gourmet Burger</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Juicy beef patty, artisanal bun, and fresh toppings.</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-2xl font-bold text-emerald-300">$12.99 <strike className=" text-sm text-[#E32636]">$19.99</strike></span>
            <button size="sm" className="flex flex-row gap-2 text-white text-sm  p-3 rounded-lg bg-stone-900">
              Add to Cart
              <box-icon name="cart-add" color="#E32636"></box-icon>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-slate-950 rounded-lg w-[330px] shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-950">
        <Link className="block" href="#">
          <img
            alt="Product 1"
            className="w-full h-64 object-cover rounded-t-lg"
            height="300"
            src="https://cdn.pixabay.com/photo/2018/11/27/08/20/coffee-3840978_1280.jpg"
            style={{
              aspectRatio: "600/600",
              objectFit: "cover",
            }}
            width="300"
          />
          <hr className="mt-5 mx-3 px-3"/>
        </Link>
        <div className="p-3 bg-slate-950">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">Gourmet Coffee</h3>
          <p className="text-gray-50 dark:text-gray-400 mt-2">Juicy beef patty, artisanal bun, and fresh toppings.</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-2xl font-bold text-emerald-300">$12.99 <strike className=" text-sm text-[#E32636]">$19.99</strike></span>
            <button size="sm" className="flex flex-row gap-2 text-white text-sm  p-3 rounded-lg bg-stone-900">
              Add to Cart
              <box-icon name="cart-add" color="#E32636"></box-icon>
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-slate-950 rounded-lg w-[330px] shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-950">
        <Link className="block" href="#">
          <img
            alt="Product 1"
            className="w-full h-64 object-cover rounded-t-lg"
            height="300"
            src="https://cdn.pixabay.com/photo/2022/09/04/22/55/pizza-7432902_960_720.jpg"
            style={{
              aspectRatio: "600/600",
              objectFit: "cover",
            }}
            width="300"
          />
          <hr className="mt-5 mx-3 px-3"/>
        </Link>
        <div className="p-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">Gourmet Pizza</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Juicy beef patty, artisanal bun, and fresh toppings.</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-2xl font-bold text-emerald-300">$12.99 <strike className=" text-sm text-[#E32636]">$19.99</strike></span>
            <button size="sm" className="flex flex-row gap-2 text-white text-sm  p-3 rounded-lg bg-stone-900">
              Add to Cart
              <box-icon name="cart-add" color="#E32636"></box-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}