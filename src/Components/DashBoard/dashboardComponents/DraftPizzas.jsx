import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function DraftPizzas() {
  // const [arrowClicked, setarrowClicked] = useState(false);
  const [draftPizzas, setdraftPizzas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteMsg, setdeleteMsg] = useState(false);
  const [arrowStates, setArrowStates] = useState({});

  const handleUpDown = (pizzaId) => {
    setArrowStates((prevState) => ({
      ...prevState,
      [pizzaId]: !prevState[pizzaId],
    }));
  };
  
  const { currentUserOfRestaurantApp } = useSelector(
    (state) => state.userOfRestaurantApp
  );
  const handleDeletedMsg = () => {
    setdeleteMsg(!deleteMsg);
  }
  // fetching the pizzas from the database
   useEffect(() => {
     const fetchDraftPizzas = async () => {
       try {
         const response = await fetch(
           `/api/products/draftpizzas/${currentUserOfRestaurantApp._id}`,
           {
             method: "GET",
             headers: {
               "Content-Type": "application/json",
             },
             credentials: "include",
           }
         );

         if (!response.ok) {
           throw new Error("Failed to fetch draft pizzas");
         }

         const data = await response.json();
         console.log(data);
         setdraftPizzas(data);         
       } catch (err) {
         console.error("Error fetching draft pizzas:", err);
         //  setError("Failed to fetch draft pizzas. Please try again later.");
       } finally {
         setLoading(false);
       }
     };
     fetchDraftPizzas();
   }, [currentUserOfRestaurantApp._id]);
   // deleting the pizzas from the database
   const handleDeletePizza = async (pizzaId) => {
    
console.log("Pizza ID to delete:", pizzaId);
     try {
       const response = await fetch(
         `/api/products/deletepizza/${pizzaId}`,
         {
           method: "DELETE",
           credentials: "include",
         }
       );

       if (!response.ok) {
         throw new Error("Failed to delete pizza");
       }
       setdraftPizzas((prev) => prev.filter((pizza) => pizza._id !== pizzaId));
       setdeleteMsg(true);
     } catch (err) {
       console.error("Error deleting pizza:", err);
       alert("Failed to delete pizza. Please try again.");
     }
   };
  return (
    <div>
      {deleteMsg && (
        <div className="z-20 shadow-2xl flex gap-2 px-6 py-7 rounded-md bg-white w-[445px] h-[65vh] fixed top-[+15%] sm:top-[30%] sm:left-[+40%]  lg:top-[15%]  opacity-100 flex-col items-center justify-center">
          <div className="absolute top-0 right-0 p-4">
            <span className="cursor-pointer" onClick={handleDeletedMsg}>
              <box-icon name="x" size="md"></box-icon>
            </span>
          </div>
          <div className="icon flex items-center justify-center ">
            <box-icon
              name="trash"
              size="lg"
              color="red"
              type="solid"
            ></box-icon>
          </div>
          <h2 className="text-rose-900 text-center">
            Pizza Deleted SuccessFully
          </h2>
          <p className="mt-3 text-center">
            Pizza Deleted successfully!. You can make a new Pizza in{" "}
            <Link
              className="text-blue-600 font-semibold"
              to="http://localhost:5173/dashboard?tab=make_pizza"
            >
              Make Pizza
            </Link>{" "}
            Section{" "}
          </p>
        </div>
      )}
      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
        Pizzas Customized by you will appear here.
      </h3>
      <div className="flex flex-row justify-start gap-10 items-center flex-wrap">
        {draftPizzas.map((pizza) => (
          <div
            key={pizza._id}
            className={`mt-6 border border-black transition-all duration-500 rounded-md w-5/12 flex flex-col ${
              arrowStates[pizza._id] ? "" : "bg-zinc-100"
            }`}
          >
            {/* Header */}
            <div className="flex p-3 flex-row justify-between items-start">
              <span>{pizza.name || "Pizza Name"}</span>
              <span
                className="cursor-pointer"
                onClick={() => handleUpDown(pizza._id)}
              >
                {arrowStates[pizza._id] ? (
                  <box-icon type="solid" name="up-arrow"></box-icon>
                ) : (
                  <box-icon type="solid" name="down-arrow"></box-icon>
                )}
              </span>
            </div>

            {/* Collapsible Content */}
            <div
              className={`downPart pt-1 flex flex-col justify-start items-start ${
                arrowStates[pizza._id] ? "hidden" : ""
              }`}
            >
              <div className="p-2 Base">
                <h3 className="">
                  {" "}
                  <strong>Base:</strong> {pizza.items.base.join(", ")}
                </h3>
              </div>
              <div className="p-2 Sauce">
                <h3 className="">
                  <strong>Sauce:</strong> {pizza.items.sauce.join(", ")}
                </h3>
              </div>
              <div className="p-2 Cheese">
                <h3 className="">
                  <strong>Cheese:</strong> {pizza.items.cheese.join(", ")}
                </h3>
              </div>
              <div className="p-2 Toppings">
                <h3 className="">
                  <strong>Toppings:</strong> {pizza.items.toppings.join(", ")}
                </h3>
              </div>
              <div className="p-2 Price">
                <h3 className="">
                  {" "}
                  <strong>Price:</strong> ₹{pizza.price}
                </h3>
              </div>
              <div className="p-2 Privacy">
                <h3 className="">
                  <strong>Privacy:</strong> {pizza.privacy}
                </h3>
              </div>
              <div className="p-2 Privacy">
                <h3 className="">
                  <strong>Pizza Id:</strong> {pizza._id}
                </h3>
              </div>

              <hr className="h-[1.6px] w-full bg-black" />
              <div className="w-full text-center bg-white flex justify-start">
                {/* Order Now Button */}
                <button className="p-4 font-semibold w-3/4 text-black bg-gray-200">
                  Order Now
                </button>
                {/* Delete Button */}
                <button
                  className="p-4 font-semibold w-1/4 text-white bg-red-500 "
                  onClick={() => handleDeletePizza(pizza._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DraftPizzas