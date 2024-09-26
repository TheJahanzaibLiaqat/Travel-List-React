import { useState } from "react";
import "./Form.css";
const Form = ({addData}) => {
  const [value, setValue] = useState("");
  const [optValue, setOptValue] = useState("");
 

  const changeHandle = (e) => {
    setValue(e.target.value);
  };

  const submitChange = (e) => {
    e.preventDefault();
    // console.log(value)
    if (value.trim() && optValue.trim()) {
      const newAddData = {value, optValue}
      addData(newAddData)
      setValue("");
      setOptValue("")
    }
   
  };
  return (
    <div className="form-main">
      <h3>What do you need for your 😍 trip?</h3>

      <form className="form-sub" onSubmit={submitChange}>


        <select value={optValue} onChange={(e) => setOptValue(e.target.value)}>
          {Array.from({ length: 20 }, (_, s) => s + 1).map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={value}
          placeholder="Item...."
          onChange={changeHandle}
        />
        <button>ADD</button>
      </form>
    </div>
  );
};

export default Form;
