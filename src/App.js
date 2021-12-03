import "./App.css";
import FoodBox from "./components/FoodBox/FoodBox";
import {Col } from "antd";
import foods from "./foods.json";
import { useState } from "react";
import AddFoodForm from './components/AddFoodForm/AddFoodForm'

function App() {
  const[foodsArray, setFoodsArray] = useState(foods)

  const deleteFood = (itemNameToDelete) => {
    const filteredFoodArray = foodsArray.filter((item) => {
      return itemNameToDelete !== item.name;
    });
    setFoodsArray(filteredFoodArray)
  }

  return <div className="App">
  <AddFoodForm foodsArray={foodsArray} setFoodsArray={setFoodsArray}/>
  <h2>Food List: </h2>
  <Col>
    {foodsArray.map((item, index) => {
      return (
      <FoodBox item={item} key={index + Date.now()} deleteFood={deleteFood}/>
      )
    })}
  </Col>
  </div>;
}
export default App;