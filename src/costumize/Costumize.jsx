import React from 'react';
import CostumizeContext from './CostumizeContext';
import { useContext, useState } from 'react';
import BackButton from "../BackButton";

const Costumize = () => {

  const costumizeInfo = useContext(CostumizeContext);

  const [bgColor, setBgColor] = useState("#30384b");
  const [color, setColor] = useState("#eeeeee");

const handleSubmit = (event) => {
  event.preventDefault();
  document.querySelector("main").style.backgroundColor = { bgColor };
  document.querySelector("main").style.color = { color };
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Background-color: {costumizeInfo.bgColor}
          <input type="color" value={bgColor} onChange={(e)=> setBgColor(e.target.value)}
          />
        </label>
        <label>Color: {costumizeInfo.color}
          <input type="color" value={color} onChange={(e)=> setColor(e.target.value)}
          />
        </label>

        <input type="submit" />
      </form>
      <div style={{marginTop:'20px'}}>
        <BackButton onClick={()=> costumizeInfo.setShowCostumize(false)} />
      </div>
    </>
    
  )
}

export default Costumize

