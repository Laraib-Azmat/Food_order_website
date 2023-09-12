import Card from "../UI/Card";
import MealsItem from "./MealsItem";

const MealList = () => {

    const dummy_meals = [
        {
            id: "m1",
            name: "Pizza",
            description: "All sizes are availabe",
            price: 20
    },
        {
            id: "m2",
            name: "Burger",
            description: "All sizes are availabe",
            price: 10
    },
        {
            id: "m3",
            name: "SoftDrinks",
            description: "Chill and enjoy with friends",
            price: 15
    },
        {
            id: "m4",
            name: "Sweets",
            description: "Available are cake, brownies and chocolates",
            price: 15
    }
]


    return (
      
        <Card>
        <ul>
            {dummy_meals.map(meal => (
                <MealsItem
                
                    key={meal.id}
                    id={meal.id}
                    name={meal.name}
                    description={meal.description}
                    price={meal.price}
                />
            ))}
            </ul>
        </Card>
    );
}

export default MealList;