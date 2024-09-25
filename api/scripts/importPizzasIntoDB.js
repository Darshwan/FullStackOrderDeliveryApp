import mongoose from 'mongoose';
import pizzas from '../models/pizza-model.js';
import pizzaData from './pizzas.json' assert{type: 'json'}

mongoose.connect('mongodb+srv://lamichhane3848:xiQCvUu3e7czprUq@restaurant.09n6hnt.mongodb.net/restaurant?retryWrites=true&w=majority&appName=restaurant', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log("Connected to MongoDB");
  
  try {
    await pizzas.insertMany(pizzaData);
    console.log("Pizza data imported successfully");
  } catch (error) {
    console.error("Error importing pizza data:", error);
  } finally {
    mongoose.disconnect();
  }
});
