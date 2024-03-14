import   { useState } from "react";

const MyInput = (props) => {
  const [adress, setAdress] = useState("");
  const { error, labelText, type } = props;
  return (
    <div>
      <label>
        {labelText} <br />
      </label>
      <input
        type={type ? type : "text"}
        value={adress}
        onChange={(e) => {
          setAdress(e.target.value);
        }}
      />
      {adress === "" ? <p style={{ color: "red" }}>{error}</p> : <p>Верно</p>}
    </div>
  );
};
export default MyInput;