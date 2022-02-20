import React, { useState } from "react";
import './App.css';
import Welcome from './welcome/Welcome';
import Preferences from './preferences/Preferences';
import Costumize from './costumize/Costumize';
import PreferencesContext from "./preferences/PreferencesContext.jsx";



function App() {

    const [showPreferences, setShowPreferences] = useState(false);
    const [showCostumize, setShowCostumize] = useState(false);
    const [focusQuestion, setFocusQuestion] = useState(undefined);
    const [workMinutes, setWorkMinutes] = useState(1);
    const [shortBreakMinutes, setShortBreakMinutes] = useState(1);
    const [longBreakMinutes, setLongBreakMinutes] = useState(2);
    const [bgColor, setBgColor] = useState("bgColor");
    const [color, setColor] = useState("color");
    const [fSize, setFSize] = useState("fSize");

    return (
        <main style={{
            backgroundColor: bgColor,
            color: color,
            fontSize: fSize + 'px',
        }}>
            
            <PreferencesContext.Provider value={{
                showPreferences,
                setShowPreferences,
                focusQuestion,
                setFocusQuestion,
                workMinutes,
                shortBreakMinutes,
                longBreakMinutes,
                setWorkMinutes,
                setShortBreakMinutes,
                setLongBreakMinutes,
                showCostumize,
                setShowCostumize,
                setColor,
                setBgColor,
                setFSize
            }}>
                {showPreferences ? <Preferences /> : showCostumize ? <Costumize /> : <Welcome />}
            </PreferencesContext.Provider>
        </main>
    );
}

export default App;
