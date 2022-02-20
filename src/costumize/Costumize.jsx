import React, {useContext, useState} from 'react';
import BackButton from "../BackButton";
import PreferencesContext from "../preferences/PreferencesContext";

const Costumize = () => {

    const costumizeInfo = useContext(PreferencesContext);
    const [bgColor, setBgColor] = useState("#30384b");
    const [color, setColor] = useState("#eeeeee");
    const [fSize, setFSize] = useState("16");

    const handleSubmit = (event) => {
        event.preventDefault()
        costumizeInfo.setBgColor(bgColor)
        costumizeInfo.setColor(color)
        costumizeInfo.setFSize(fSize)
    }

    return (
        <>        
            <form onSubmit={handleSubmit}>
                <div className="costumizeForm">
                    <div className="container">
                       <input type="color" id="bgColor" value={bgColor} onChange={(e) => { setBgColor(e.target.value) }} />
                        <label>Background-color {costumizeInfo.bgColor}</label> 
                    </div>                    
                    <div className="container">
                        <input type="color" id="color" value={color} onChange={(e) => setColor(e.target.value)} />
                        <label>Text Color {costumizeInfo.color}</label>
                    </div>
                    <div className="container">
                        <input type="number" id="fSize" value={fSize} onChange={(e) => setFSize(e.target.value)} />
                        <label>Font Size {costumizeInfo.fSize}</label>
                    </div>
                </div>
                <input type="submit" value="Set" />
            </form>
            <div style={{marginTop: '20px'}}>
                <BackButton onClick={() => costumizeInfo.setShowCostumize(false)}/>
            </div>
        </>
    )
}



export default Costumize

