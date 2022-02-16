import React from 'react';
import PreferencesContext from "../preferences/PreferencesContext";
import { useContext, useState } from 'react';
import BackButton from "../BackButton";

const Costumize = () => {

  const costumizeInfo = useContext(PreferencesContext);

  const [bgColor, setBgColor] = useState("#30384b");
  const [fontFamily, setFontFamily]=useState("Roboto")
  const [color, setColor] = useState("#eeeeee");
  const [fontSize, setFontSize] = useState("24");

const handleSubmit = (event) => {
  event.preventDefault();
  costumizeInfo.setBgColor(bgColor);
  costumizeInfo.setColor(color);
  }


  return (
    <>
      <div className="costumizeForm">
        <form onSubmit={handleSubmit}>
          <label>Background-color: {costumizeInfo.bgColor}
            <input type="color" value={bgColor} onChange={(e)=> setBgColor(e.target.value)}
            />
          </label>          
          <label value={fontFamily} onChange={(e) => setFontFamily(e.target.value)}>
            Font Family: {costumizeInfo.fontFamily}
            <select name="fontFamily" id="fontFamily">
              <option value="poppins">Poppins</option>
              <option value="roboto">Roboto</option>
              <option value="openSans">Open Sans</option>
            </select>
          </label>
          <label>Color: {costumizeInfo.color}
            <input type="color" value={color} onChange={(e)=> setColor(e.target.value)}
            />
          </label>
          <label>Font Size: {costumizeInfo.fontSize}
            <input type="number"  min="24" max="50" value={fontSize} onChange={(e)=> setFontSize(e.target.value)} />
          </label>

          <input type="submit" />
        </form>
        <div style={{marginTop:'20px'}}>
          <BackButton onClick={()=> costumizeInfo.setShowCostumize(false)} />
        </div>
      </div>
      
    </>
    
  )
}

export default Costumize

