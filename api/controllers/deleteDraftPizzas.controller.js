import draftPizzas from "../models/draftPizza-model.js";

export const deleteDraftPizzas = async (req, res) => {
  const { pizzaId } = req.params;
console.log("Pizza ID to delete:", pizzaId);

  try {
    // Find and delete the pizza by ID
    const deletedPizza = await draftPizzas.findByIdAndDelete(pizzaId);

    if (!deletedPizza) {
      return res.status(404).json({ message: "Pizza not found" });
    }

    return res.status(200).json({ message: "Pizza deleted successfully" });
  } catch (err) {
    console.error("Error deleting pizza:", err);
    return res.status(500).json({ message: "Server error. Please try again." });
  }
};
