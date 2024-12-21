import draftPizzas from "../models/draftPizza-model.js";

export const getDraftPizzas = async (req, res) => {
    try {
      const { userId } = req.params;
      const fetchedPizzas = await draftPizzas.find({ idOfUser: userId });
      if (fetchedPizzas.length === 0) {
        return res
          .status(404)
          .json({ message: "No draft pizzas found for this user" });
      }
      //the repsonse array is not in proper format in frontend so making it proper format by parsing
      const optimizedPizzas = fetchedPizzas.map((pizza) => ({
        _id: pizza._id,
        name: pizza.name,
        description: pizza.description,
        price: pizza.price,
        privacy: pizza.privacy,
        image: pizza.image,
        items: JSON.parse(pizza.items[0]), // Parse single JSON string
      }));
      res.status(200).json(optimizedPizzas);
    } catch (error) {
    console.error("Error fetching draft Pizzas:", error);
    res.status(500).json({ error: "Failed to fetch draft Pizzas" });
    }
}