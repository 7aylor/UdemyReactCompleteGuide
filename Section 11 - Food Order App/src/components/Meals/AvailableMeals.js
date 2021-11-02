import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Vegan Pad Thai",
    description: "Your favorite Thai dish, without the pain <3",
    price: 14.99,
  },
  {
    id: "m2",
    name: "Vegan Philly CheezSteak",
    description: "Cheezy goodness in every bite!",
    price: 11.5,
  },
  {
    id: "m3",
    name: "Vegan Margarita Pizza",
    description: "Simple, and elegant",
    price: 18.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 12.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
