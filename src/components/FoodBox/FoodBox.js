import { Card, Button } from "antd";
import './FoodBox.css'


function FoodBox(props) {
    const {name, calories, image, servings} = props.item

  return <div className="FoodBox">

  <Card
    title={name}
    style={{ width: 230, height: 300, margin: 10 }}
  >
    <img src={image} height={60} alt="product"/>
    <p>Calories: {calories}</p>
    <p>Servings: {servings}</p>
    <p>
      <b>Total Calories: {calories * servings} </b> kcal
    </p>
    <Button type="primary" onClick={()=>props.deleteFood(name)}> Delete </Button>
  </Card>
  </div>;
}
export default FoodBox;