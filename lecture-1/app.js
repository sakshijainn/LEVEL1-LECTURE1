import "./styles.css";
import React, { useState } from "react";

function ProuductCard({ title, desc, price, disc }) {
  const [count, setcount] = useState(0);

  function clickHandler() {
    console.log("clicked", count);
    setcount((count) => count + 1);
  }
  return (
    <div style={{ padding: "1rem", border: "1px solid black" }}>
      <div>
        <img
          alt="tshirtpic"
          style={{ width: "150px" }}
          src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15966300/2021/10/29/136544a9-eae8-484f-a239-dd7b7fd1c20c1635489380563minnowGirlsPeach-Coloured3PrintedAppliqueT-shirt1.jpg"
        ></img>{" "}
      </div>
      <h3>{title}</h3>
      <h5>{desc}</h5>
      <p>
        {price} <span>{disc}</span>
      </p>
      <button onClick={clickHandler}>add </button>
      <p>{count}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <ProuductCard
        img=""
        title="minnow"
        desc="Girl Pack 3 of Tshirt"
        price="Rs 849"
        disc="70% off"
      />
    </div>
  );
}
