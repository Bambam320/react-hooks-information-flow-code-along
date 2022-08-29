import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState("#FFF")


  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child childColor={childColor} onChangeColor={(e) => {setColor(getRandomColor);setChildColor(getRandomColor);}}/>
      <Child childColor={childColor} onChangeColor={(e) => {setColor(getRandomColor);setChildColor(getRandomColor);}}/>
    </div>
  );
}

export default Parent;
