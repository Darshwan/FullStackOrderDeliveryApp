import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function MakePizza() {
  const [savePizza,setsavePizza] = useState([  ])
  const [savePizzaPopup,setsavePizzaPopup] = useState(false)
  const {currentUserOfRestaurantApp} = useSelector((state) => state.userOfRestaurantApp)
  const [pizzauploading, setpizzauploading] = useState(false)
  const [errorMsg, seterrorMsg] = useState("")
  const [pizzaSavedMsg, setpizzaSavedMsg] = useState(false)

  // const handleSavePizza = () => {
    
  // }
  const handleFormData =(e) => {
    setsavePizza({
      ...savePizza,
      [e.target.id]: e.target.value,
      price: totalPrice,
      idOfUser: currentUserOfRestaurantApp._id,
      image: ""
    });
    // console.log(savePizza);
  }
  const handlesavePizzaPopup = () => {
    setsavePizzaPopup(!savePizzaPopup);
    console.log(savePizza);
    setsavePizza([
      ...savePizza,
      checkedItemsForBase,
      checkedItemsForSauce,
      checkedItemsForVeggies,
      checkedItemsForNonVeggies,
      checkedItemsForCheese,
    ]);
    console.log(savePizza);
  }
  const [checkedItemsForBase, setcheckedItemsForBase] = useState([]);
  const [checkedItemsForSauce, setcheckedItemsForSauce] = useState([]);
  const [checkedItemsForCheese, setcheckedItemsForCheese] = useState([]);
  const [checkedItemsForVeggies, setcheckedItemsForVeggies] = useState([]);
  const [checkedItemsForNonVeggies, setcheckedItemsForNonVeggies] = useState(
    []
  );

  const handleCheckBoxForBase = (e) => {
    const item = e.target.nextSibling.textContent.trim();

    const isChecked = e.target.checked;
    setcheckedItemsForBase((prevItems) =>
      isChecked ? [...prevItems, item] : prevItems.filter((i) => i !== item)
    );
  };
  const handleCheckBoxForSauce = (e) => {
    const item = e.target.nextSibling.textContent.trim();
    const isChecked = e.target.checked;
    setcheckedItemsForSauce((prevItems) =>
      isChecked ? [...prevItems, item] : prevItems.filter((i) => i !== item)
    );
  };
  const handleCheckBoxForVeggies = (e) => {
    const item = e.target.nextSibling.textContent.trim();
    const isChecked = e.target.checked;
    setcheckedItemsForVeggies((prevItems) =>
      isChecked ? [...prevItems, item] : prevItems.filter((i) => i !== item)
    );
  };
  const handleCheckBoxForNonVeggies = (e) => {
    const item = e.target.nextSibling.textContent.trim();
    const isChecked = e.target.checked;
    setcheckedItemsForNonVeggies((prevItems) =>
      isChecked ? [...prevItems, item] : prevItems.filter((i) => i !== item)
    );
  };
  const handleCheckBoxForCheese = (e) => {
    const item = e.target.nextSibling.textContent.trim();
    const isChecked = e.target.checked;
    setcheckedItemsForCheese((prevItems) =>
      isChecked ? [...prevItems, item] : prevItems.filter((i) => i !== item)
    );
  };
  const totalPrice =
    checkedItemsForBase.length * 70 +
    checkedItemsForSauce.length * 20 +
    checkedItemsForCheese.length * 90 +
    checkedItemsForVeggies.length * 20 +
    checkedItemsForNonVeggies.length * 50;

    function transformFormData(savePizza) {
      // Extracting the items array from the indexed keys
      const items = {
        base: savePizza[0] || [],
        sauce: savePizza[1] || [],
        cheese: savePizza[2] || [],
        veggies: savePizza[3] || [],
        toppings: savePizza[4] || [],
      };

      // Constructing the transformed object
      const transformedData = {
        idOfUser: savePizza.idOfUser,
        items: JSON.stringify(items), // Convert items to string if required by backend
        description: savePizza.description,
        name: savePizza.pizzaName, // Updating 'pizzaName' to 'name'
        image: savePizza.image,
        privacy: "private", // Adding a new field for privacy
        price: savePizza.price,
      };

      return transformedData;
    }
  const transformedData = transformFormData(savePizza);
  console.log(transformedData);
const handlePizzaSavedMsg = () => {
  setpizzauploading(!pizzaSavedMsg)
}
    const handlePizzaUpload = async (e) => {
      e.preventDefault();
      setpizzauploading(true)
      try {
        const res = await fetch(
          `http://localhost:3000/api/products/savepizza`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(transformedData),
            credentials: "include",
            withCredntials: true,
          }
        );
        const data = await res.json();
        if (res.ok) {
          setpizzauploading(false)
          setpizzaSavedMsg(true)
        }
      } catch (error) {
        console.log("Failed to Fetch", error);
      }
    }
  return (
    <div>
      {pizzaSavedMsg && (
        <div className="z-20 shadow-2xl flex gap-2 px-6 py-7 rounded-md bg-white w-[445px] h-[65vh] fixed top-[+15%] sm:top-[30%] sm:left-[+40%]  lg:top-[15%]  opacity-100 flex-col items-center justify-center">
          <div className="absolute top-0 right-0 p-4">
            <span className="cursor-pointer" onClick={handlePizzaSavedMsg}>
              <box-icon name="x" size="md"></box-icon>
            </span>
          </div>
          <div className="icon flex items-center justify-center ">
            <box-icon name="check-circle" size="lg" color="green"></box-icon>
          </div>
          <h2 className="text-green-900 text-center">
            Pizza Saved SuccessFully
          </h2>
          <p className="mt-3 text-center">
            Pizza Saved successfully!. You can View your Pizza in{" "}
            <Link className="text-blue-600 font-semibold" to="http://localhost:5173/dashboard?tab=draft_pizza">
              Draft Pizza
            </Link>{" "}
            Section{" "}
          </p>
        </div>
      )}
      {savePizzaPopup && (
        <div className="w-screen fixed top-[-0%] left-0 z-10 sm:px-2 h-screen glass-effect">
          <div
            className={`z-20 shadow-2xl flex gap-2 px-6 py-7 rounded-md bg-white w-[405px] absolute top-[+15%] sm:top-[30%] sm:left-[+40%]  lg:top-[15%]  opacity-100  flex-col`}
          >
            <div
              className=" z-20 absolute w-fit p-3 top-0 right-0 cursor-pointer"
              onClick={handlesavePizzaPopup}
            ></div>
            <div
              onClick={handlesavePizzaPopup}
              className="flex items-end justify-end cursor-pointer"
            >
              <box-icon name="x"></box-icon>
            </div>
            <p className="font-semibold ">
              Enter the Pizza Details to be saved
            </p>
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Name of Pizza
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="pizzaName"
                  onChange={handleFormData}
                  placeholder="Enter a name of your pizza"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Description of your pizza
                </label>
                <textarea
                  id="description"
                  onChange={handleFormData}
                  type="text"
                  required
                  className="border border-black text-sm py-2 px-3 outline-none min-h-[100px] w-full"
                  placeholder="Enter short desciption for you pizza."
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  set Pizza:
                  <br />
                </label>
                <select
                  onChange={handleFormData}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed"
                  id="privacy"
                >
                  <option value="private" className="px-4">
                    Private
                  </option>
                  <option value="public" className="px-4">
                    Public
                  </option>
                </select>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <button
                  className="inline-flex space items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-stone-900 text-stone-100 hover:bg-stone-100  hover:text-stone-900 transtion transition hover:border-2 ease-in-out delay-550 h-10 px-4 py-2 w-full"
                  type="button"
                  disabled={pizzauploading}
                  onClick={handlePizzaUpload}
                >
                  {pizzauploading ? (
                    <>
                      <span className="pl-3"> Loading....</span>
                    </>
                  ) : (
                    "Save Pizza"
                  )}
                </button>
                {errorMsg && (
                  <p className="bg-rose-500 px-1 py-1 rounded-md w-full text-sm text-white">
                    *{errorMsg}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
        Make Your Customized Pizza
      </h3>
      <h5 className="mt-3 text-xl font-semibold leading-none">
        Choose yours favorite Selections
      </h5>
      <div className="PizzaContainer flex flex-col-reverse items-center justify-center w-full gap-10">
        {(checkedItemsForBase.length > 0 &&
          checkedItemsForSauce.length > 0 &&
          checkedItemsForCheese.length > 0 &&
          checkedItemsForNonVeggies.length > 0) ||
        checkedItemsForVeggies.length > 0 ? (
          <>
            {" "}
            <div className="w-full Buttons flex flex-row justify-center items-start gap-4">
              <button className="btn flex items-center justify-center w-2/6">
                Order Now
              </button>
              <button
                onClick={handlesavePizzaPopup}
                className="btn-alt flex items-center justify-center w-2/6"
              >
                Save Pizza
              </button>
            </div>
            <p className="text-2xl tracking-tight">
              Total Pizza Price is : Rs.{totalPrice}
            </p>
          </>
        ) : (
          "You should select atleast 1 from each base, sauce, cheese, veggeies or non veggeies"
        )}
        <div className="imgContainer border rounded-lg p-4 flex flex-col items-start gap-10 h-[450px]">
          {/* <img
            src="https://cdn.leonardo.ai/users/3c5e28a9-153c-4457-9161-1c0039f74914/generations/c04ac0fe-a6dc-4d41-92a6-84a44e2a9a21/Stock_Photography_a_dough_on_a_chopping_board_on_a_table_where_1.jpg"
            className="h-[400px] object-cover"
            alt=""
          /> */}
          <h4 className="text-xl font-bold">
            Your Pizza: <br />
          </h4>
          <div className="SelctedItems grid grid-cols-5 gap-8">
            <div className="basePizza">
              <p className="font-bold">Base: </p>
              {checkedItemsForBase.length > 0 ? (
                checkedItemsForBase.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              ) : (
                <p>No Items Selected.</p>
              )}
            </div>
            <div>
              <p className="font-bold">Sauce: </p>
              {checkedItemsForSauce.length > 0 ? (
                checkedItemsForSauce.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              ) : (
                <p>No Items Selected.</p>
              )}
            </div>
            <div>
              <p className="font-bold">Cheese: </p>
              {checkedItemsForCheese.length > 0 ? (
                checkedItemsForCheese.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              ) : (
                <p>No Items Selected.</p>
              )}
            </div>
            <div>
              <p className="font-bold">Non-Veggies: </p>
              {checkedItemsForVeggies.length > 0 ? (
                checkedItemsForVeggies.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              ) : (
                <p>No Items Selected.</p>
              )}
            </div>
            <div>
              <p className="font-bold">Veggie: </p>
              {checkedItemsForNonVeggies.length > 0 ? (
                checkedItemsForNonVeggies.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              ) : (
                <p>No Items Selected.</p>
              )}
            </div>
          </div>
        </div>
        <div className="items p-6 flex flex-col gap-4 ">
          <div className="grid grid-cols-3">
            <div className="Base">
              <h3 className="font-bold text-xl">1. Base</h3>
              <ul className="mt-3">
                <li className="mt-2">
                  <label>
                    <input type="checkbox" onChange={handleCheckBoxForBase} /> 1
                    teaspoon sugar
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" onChange={handleCheckBoxForBase} /> 2
                    ¼ teaspoons (1 packet) active dry yeast
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" onChange={handleCheckBoxForBase} /> 1
                    ½ cups warm water (about 110°F or 45°C)
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" onChange={handleCheckBoxForBase} /> 3
                    ½ to 4 cups all-purpose flour
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" onChange={handleCheckBoxForBase} /> 2
                    tablespoons olive oil
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" onChange={handleCheckBoxForBase} /> 2
                    teaspoons salt
                  </label>
                </li>
              </ul>
            </div>
            <div className="Sauce">
              <h3 className="font-bold text-xl">2. Sauce</h3>
              <ul className="mt-3">
                <li className="mt-2">
                  <label>
                    <input type="checkbox" onChange={handleCheckBoxForSauce} />1
                    cup tomato sauce (or crushed tomatoes)
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" onChange={handleCheckBoxForSauce} />1
                    teaspoon dried oregano
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" onChange={handleCheckBoxForSauce} />1
                    teaspoon dried basil
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" onChange={handleCheckBoxForSauce} />1
                    clove garlic (minced)
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" onChange={handleCheckBoxForSauce} />
                    Salt and pepper to taste
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" onChange={handleCheckBoxForSauce} />1
                    tablespoon olive oil
                  </label>
                </li>
              </ul>
            </div>
            <div className="Cheese">
              <h3 className="font-bold text-xl">3. Cheese</h3>
              <ul className="mt-3">
                <li className="mt-2">
                  <label>
                    <input type="checkbox" onChange={handleCheckBoxForCheese} />
                    2 cups shredded mozzarella cheese
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" onChange={handleCheckBoxForCheese} />
                    Fresh basil for garnish
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" onChange={handleCheckBoxForCheese} />
                    Pepperoni, mushrooms, bell peppers, onions, olives, etc.
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="Non-Veggies">
              <h3 className="font-bold text-xl">4. Veggie Toppings</h3>
              <ul className="mt-3">
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      data-price="1200"
                      onChange={handleCheckBoxForNonVeggies}
                    />
                    Bell Peppers (Green, Red, Yellow)
                  </label>
                </li>
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxForNonVeggies}
                    />
                    Mushrooms
                  </label>
                </li>
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxForNonVeggies}
                    />
                    Onions (Red or White)
                  </label>
                </li>
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxForNonVeggies}
                    />
                    Olives (Black or Green)
                  </label>
                </li>
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxForNonVeggies}
                    />
                    Tomatoes (Fresh or Sun-dried)
                  </label>
                </li>
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxForNonVeggies}
                    />
                    Spinach
                  </label>
                </li>
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxForNonVeggies}
                    />
                    Zucchini
                  </label>
                </li>
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxForNonVeggies}
                    />
                    Corn
                  </label>
                </li>
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxForNonVeggies}
                    />
                    Broccoli
                  </label>
                </li>
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxForNonVeggies}
                    />
                    Jalapeños
                  </label>
                </li>
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxForNonVeggies}
                    />
                    Pineapple
                  </label>
                </li>
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxForNonVeggies}
                    />
                    Artichokes
                  </label>
                </li>
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxForNonVeggies}
                    />
                    Basil (Fresh)
                  </label>
                </li>
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxForNonVeggies}
                    />
                    Arugula
                  </label>
                </li>
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxForNonVeggies}
                    />
                    Eggplant
                  </label>
                </li>
              </ul>
            </div>
            <div className="Veggies">
              <h3 className="font-bold text-xl">5. Non-Veggie Toppings</h3>
              <ul className="mt-3">
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxForVeggies}
                    />
                    Pepperoni
                  </label>
                </li>
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxForVeggies}
                    />
                    Sausage (Italian, Chicken, or Spicy)
                  </label>
                </li>
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxForVeggies}
                    />
                    Ham
                  </label>
                </li>
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxForVeggies}
                    />
                    Bacon
                  </label>
                </li>
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxForVeggies}
                    />
                    Chicken (Grilled or Barbecue)
                  </label>
                </li>
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxForVeggies}
                    />
                    Ground Beef
                  </label>
                </li>
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxForVeggies}
                    />
                    Salami
                  </label>
                </li>
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxForVeggies}
                    />
                    Anchovies
                  </label>
                </li>
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxForVeggies}
                    />
                    Prosciutto
                  </label>
                </li>
                <li className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCheckBoxForVeggies}
                    />
                    Shrimp (for seafood pizza)
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakePizza;
