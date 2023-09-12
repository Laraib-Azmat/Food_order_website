import { Fragment } from "react";
import MealSummary from "./MealSummary";
import MealList from "./MealList";

const Meals = () => {
    return (
        <Fragment>
            <MealSummary />
            <MealList/>
      </Fragment>  
    );
}

export default Meals;