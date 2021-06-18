import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavLink to="/static">Go to Static Component</NavLink>
      <br />
      <NavLink to="/dynamic">Go to Dynamic Component</NavLink>
    </div>
  );
};

export default Home;
