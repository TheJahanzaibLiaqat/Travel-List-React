import { useState } from "react"
import "./Packing.css"
const Packing = ({ dataT, dataDel, sortData, deleteAllData }) => {


  // const [sort, setSort] = useState([...dataT]); // Initialize state with a copy of dataT
  const [check, setCheck] = useState(Array(dataT.length).fill(false));

  const checkChange = (index) => {
    setCheck((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Sort the list by the 'value' property (you can change this to 'optValue' or another property)
  // const sortList = () => {
  //   const sortedData = [...sort].sort((a, b) => {
  //     return a.optValue - b.optValue // Sort alphabetically by 'value'
  //   });
  //   setSort(sortedData); // Update state with the sorted data
  // };

  return (
    <div className="packing-main">
      <div className="item">
        <ul>
          {dataT.length > 0 ? (
            dataT.map((item, index) => (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <input
                  type="checkbox"
                  checked={check[index] || false} // Check status based on the array
                  onChange={() => checkChange(index)}
                />
                <li
                  style={check[index] ? { textDecoration: "line-through" } : {}}
                >
                  {item.optValue} {item.value}
                  <span
                    style={{ cursor: "pointer", marginLeft: "10px" }}
                    onClick={() => dataDel(index)}
                  >
                    ❌
                  </span>
                </li>
              </div>
            ))
          ) : (
            <li style={{ textAlign: "center", width: "100%" }}>
              No items available
            </li>
          )}
        </ul>
      </div>

      <div
        id="packBtn"
      >
        <button onClick={sortData}>Sort the List</button>
        <button onClick={deleteAllData}>Clear all List</button>

      </div>
    </div>
  );
};

export default Packing;