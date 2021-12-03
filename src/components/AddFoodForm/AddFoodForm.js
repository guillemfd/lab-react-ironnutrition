import {Input, Button } from "antd";
import { useState } from "react";

function AddFoodForm(props) {
    const {foodsArray, setFoodsArray} = props

    const [inputName, setInputName] = useState("");
    const [inputCalories, setInputCalories] = useState(0);
    const [inputImage, setInputImage] = useState("");
    const [inputServings, setInputServings] = useState("0");

    const addNewFood =()=> {

        const newItem = {
            name: inputName,
            calories: inputCalories,
            image: inputImage, 
            servings: inputServings
        }
        setFoodsArray([...foodsArray, newItem])
    }

  return <div className="AddFoodForm">
    <h3>Add new food</h3>
    <p>Name: </p>
    <Input type="text" onChange={(event) => setInputName(event.target.value)}/>

    <p>Calories: </p>
    <Input type="number" onChange={(event) => setInputCalories(event.target.value)}/>

    <p>Image: </p>
    <Input type="text" onChange={(event) => setInputImage(event.target.value)}/>

    <p>Servings: </p>
    <Input type="number" onChange={(event) => setInputServings(event.target.value)}/>
    <Button onClick={() => addNewFood()}>Create product</Button>

  </div>;
}
export default AddFoodForm;