// import React from "react";
import { useState } from "react";

function MakePizza() {
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
  return (
    <div>
        
      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
        Make Your Customized Pizza
      </h3>
      <h5 className="mt-3 text-xl font-semibold leading-none">
        Choose yours favorite Selections
      </h5>
      <div className="PizzaContainer flex flex-col-reverse items-center justify-center w-full gap-10">
                
{(checkedItemsForBase.length > 0) && (checkedItemsForSauce.length > 0) && (checkedItemsForCheese.length>0) &&(checkedItemsForNonVeggies.length >0) || (checkedItemsForVeggies.length > 0) ? <> <div className="w-full Buttons flex flex-row justify-center items-start gap-4">
    <button className="btn flex items-center justify-center w-2/6">Order Now</button>
     <button className="btn-alt flex items-center justify-center w-2/6">Save Pizza</button> 
</div>
<p className="text-2xl tracking-tight">Total Pizza Price is : Rs.{totalPrice}</p></> : "You should select atleast 1 from each base, sauce, cheese, veggeies or non veggeies"}
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
                    <input type="checkbox" onChange={handleCheckBoxForSauce} />
                    1 cup tomato sauce (or crushed tomatoes)
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" onChange={handleCheckBoxForSauce} />
                    1 teaspoon dried oregano
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" onChange={handleCheckBoxForSauce} />
                    1 teaspoon dried basil
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" onChange={handleCheckBoxForSauce} />
                    1 clove garlic (minced)
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
                    <input type="checkbox" onChange={handleCheckBoxForSauce} />
                    1 tablespoon olive oil
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
