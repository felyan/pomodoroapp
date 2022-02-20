import React, {useContext} from 'react';
import InfoModal from './InfoModal';
import CostumizeButton from './CostumizeButton';
import PreferencesButton from './PreferencesButton';
import PreferencesContext from "../preferences/PreferencesContext";
import Heading from './Heading';
import Timer from '../timer/Timer';

const Welcome = () => {
    const preferencesInfo = useContext(PreferencesContext);

    return (
        <>
        <div className="settings">
          <InfoModal />
            <PreferencesButton onClick={() => preferencesInfo.setShowPreferences(true)}/>
            <CostumizeButton onClick={() => preferencesInfo.setShowCostumize(true)}/>
          </div>
          <Heading />
          <Timer/>
        </>
    )
}

export default Welcome