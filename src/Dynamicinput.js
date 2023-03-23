import { useState } from "react";

// only add and delete functionality implemented

function Dynamicinput() {
  // const [hobby,setHobby] = useState(['play','sing']);
  const [hobby, setHobby] = useState([]);

  return (
    <div>
      <h1> Add / remove input dynamically </h1>
      {/* setHobby([...hobby, ""]); means take prev input feild 
        and add 1 more field from hobby  */}
      <button
        onClick={() => {
          setHobby([...hobby, ""]);
        }}
      >
        Add hobby
      </button>
      {hobby.map((item, index) => {
        return (
          <div style={{ display: "flex" }}>
            {" "}
            <input value={item} />
            <br />
            {/* delete input box and button dynamically */}
            <button
              onClick={() => {
                const newarry = hobby.filter(
                  (ele, delindex) => index !== delindex
                );
                setHobby(newarry);
              }}
            >
              {" "}
              Delete
            </button>{" "}
          </div>
        );
      })}
    </div>
  );
}

export default Dynamicinput;
