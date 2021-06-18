import Common from "./Common";

const DynamicComponent = () => {
  return (
    <div>
      <Common
        title="Dynamic Component"
        desc="Dynamic Component is the Dynamic Component"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMpjoYeBrnq-u1jfQrU0IFLMTJbphhQTF4E1zZ1752SXWK_mYpj2DF7dqmsba6P7_CrQI&usqp=CAU"
        
        tags={["ReactJs", "NodeJs", "NodeJs"]}
        compo="Static"
        compoLink="/static"
      />
    </div>
  );
};

export default DynamicComponent;
