import React from 'react';
import CostumizeButton from './CostumizeButton';
import PreferencesButton from './PreferencesButton';
import {useContext} from "react";
import PreferencesContext from "../preferences/PreferencesContext";
import CostumizeContext from "../costumize/CostumizeContext";
import Timer from '../timer/Timer';

const Welcome = () => {
  const preferencesInfo = useContext(PreferencesContext);
  const costumizeInfo = useContext(CostumizeContext);

  return (
    <>
      <div className="settings">
        <PreferencesButton onClick={()=> preferencesInfo.setShowPreferences(true)} />
        <CostumizeButton onClick={()=> costumizeInfo.setShowCostumize(true)} />
      </div>

      <Timer />
    </>
    
  )
}

export default Welcome