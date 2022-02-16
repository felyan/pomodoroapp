import './App.css';
import Welcome from './welcome/Welcome';
import Preferences from './preferences/Preferences';
import Costumize from './costumize/Costumize';
import { useState } from 'react';
import PreferencesContext from "./preferences/PreferencesContext.jsx";


function App() {

  const [showPreferences, setShowPreferences] = useState(false);
  const [showCostumize, setShowCostumize] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  const [bgColor, setBgColor] = useState("#30384b");
  const [fontFamily, setFontFamily]=useState("Roboto")
  const [color, setColor] = useState("#eeeeee");
  const [fontSize, setFontSize] = useState("24");

  return (
    <main style={{
      backgroundColor: bgColor,
      color: color,
      fontFamily: fontFamily,
      dontSize: fontSize
            
    }}>
      <PreferencesContext.Provider value={{
        showPreferences,
        setShowPreferences,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
        showCostumize,
        setShowCostumize,
        setColor,
        setBgColor,
        setFontFamily,
        setFontSize
      }}>
      {showPreferences ? <Preferences/> : showCostumize ? <Costumize/> : <Welcome/>}
      </PreferencesContext.Provider> 
    </main>
  );
}

export default App;
