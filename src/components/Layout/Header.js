import classes from "./Header.module.css";
import MealsImage from "../UI/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>React App</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImage} alt="Meals" />
      </div>
    </>
  );
};

export default Header;
