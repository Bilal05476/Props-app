import "./Common.css";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  const tags = props.tags;
  console.log(tags);
  return (
    <div className="common">
      <div className="left">
        <NavLink to={props.compoLink}>{props.compo}</NavLink>
        <h3>{props.title}</h3>
        <h6>{props.desc}</h6>
        <img
          src={props.img}
          alt="componentPic"
          width="400px"
          height="400px"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className="right">
        <h4>Tags</h4>
        <ul>
          {tags.map((tag, ind) => {
            return <li key={ind}>{tag}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Common;
