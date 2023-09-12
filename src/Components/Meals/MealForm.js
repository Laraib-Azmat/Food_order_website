import { useRef } from "react";
import Input from "../UI/Input";
import styles from './MealForm.module.css'
const MealForm = (props) => {

    const inputRef = useRef();


    const formHandler = (e) => {
        e.preventDefault();

        const enteredAmount = inputRef.current.value;
        const enteredInput = +enteredAmount;

        props.onAdd(enteredInput);
    }

    return (

        <form onSubmit={formHandler} className={styles.form}>
            <Input 
                ref={inputRef}
                label="Amount"
            
                input={{
                  id : 'amount'+ props.id,  
                type: "number",
                min:'1',
                max : '5',
                step: '1',
                defaultValue: '1'}}
            />

            <button>+Add</button>
        </form>

        );
}
export default MealForm;