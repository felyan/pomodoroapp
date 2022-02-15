import React from 'react';
import ReactSlider from 'react-slider';
import PreferencesContext from './PreferencesContext';
import { useContext } from "react";
import BackButton from "../BackButton";

const Preferences = () => {
    const preferencesInfo = useContext(PreferencesContext);
    return (
        <>
        <div className="question_box">
            <form>
                <label>What's Your Focus Question?
                    <input type="text" />
                </label>
            </form>
        </div>
        <div className="slider_box">
        <label>work: {preferencesInfo.workMinutes}:00</label>
                <ReactSlider
                    className={'slider'}
                    thumbClassName={'thumb'}
                    trackClassName={'track'}
                    value={preferencesInfo.workMinutes}
                    onChange={newValue => preferencesInfo.setWorkMinutes(newValue)}
                    min={1}
                    max={120}
            />
            <label>Short break: {preferencesInfo.breakMinutes}:00</label>
                <ReactSlider
                    className={'slider green'}
                    thumbClassName={'thumb'}
                    trackClassName={'track'}
                    value={preferencesInfo.breakMinutes}
                    onChange={newValue => preferencesInfo.setBreakMinutes(newValue)}
                    min={1}
                    max={120}
                />
                <label>Long break: {preferencesInfo.breakMinutes}:00</label>
                <ReactSlider
                    className={'slider blue'}
                    thumbClassName={'thumb'}
                    trackClassName={'track'}
                    value={preferencesInfo.breakMinutes}
                    onChange={newValue => preferencesInfo.setBreakMinutes(newValue)}
                    min={1}
                    max={120}
                />
                <div style={{marginTop:'20px'}}>
                    <BackButton onClick={()=> preferencesInfo.setShowPreferences(false)} />
                </div>
    </div>
</>
  )
}

export default Preferences