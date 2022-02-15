import './App.css';
import Welcome from './welcome/Welcome';
import Preferences from './preferences/Preferences';
import Costumize from './costumize/Costumize';
import { useState } from 'react';
import PreferencesContext from "./preferences/PreferencesContext.jsx";
import CostumizeContext from "./costumize/CostumizeContext";

function App() {

  const [showPreferences, setShowPreferences] = useState(false);
  const [showCostumize, setShowCostumize] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <main>
      <PreferencesContext.Provider value={{
        showPreferences,
        setShowPreferences,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes
      }}>
        {showPreferences ? <Preferences /> : <Welcome />} 
      </PreferencesContext.Provider>
      <CostumizeContext.Provider value={{
        showCostumize,
        setShowCostumize
      }}>
        {showCostumize ? <Costumize /> : <Welcome />} 
      </CostumizeContext.Provider> 
    </main>
  );
}

export default App;
