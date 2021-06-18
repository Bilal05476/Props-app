import Common from "./Common";

const StaticComponent = () => {
  return (
    <div>
      <Common
        title="Static Component"
        desc="Static Component is the Static Component"
        img="https://5.imimg.com/data5/HI/EO/PU/SELLER-72737271/static-website-development-500x500.jpg"
        tags={["Html5", "Css3", "JavaScript"]}
        compo="Dynamic"
        compoLink="/dynamic"
      />
    </div>
  );
};

export default StaticComponent;
