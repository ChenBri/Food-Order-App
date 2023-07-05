import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const { name, description, price } = props.meal;

  return (
    <li className={classes.meal}>
      <h3>{name}</h3>
      <div>{description}</div>
      <div>{price}</div>
    </li>
  );
};

export default MealItem;
