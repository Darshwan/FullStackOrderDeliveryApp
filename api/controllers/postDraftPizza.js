import draftPizzas from "../models/draftPizza-model.js";

export const savePizza = async (req, res) => {
    console.log(req.body);
    const { idOfUser, name, image, description, price, items, privacy } = req.body;
    if (!name || !description || !price || name === '' || description === '' || price === '') {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const newPizza = new draftPizzas({
          idOfUser,
          name,
          image,
          description,
          price,
          items,
          privacy,
        });
        await newPizza.save();
        res.json({ message: "Pizza saved successfully", newPizza });
    } catch (error) {
        res.status(500).json({ message: error.message });   
    }
}


