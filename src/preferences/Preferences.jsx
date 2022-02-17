import React, {useContext, useState} from 'react';
import ReactSlider from 'react-slider';
import PreferencesContext from './PreferencesContext';
import BackButton from "../BackButton";

const Preferences = () => {
    const preferencesInfo = useContext(PreferencesContext);

    const [focusQuestion, setFocusQuestion] = useState("focusQuestion");

    const handleSubmit = (event) => {
        event.preventDefault()
        preferencesInfo.setFocusQuestion(focusQuestion)
    }

    return (
        <>
            <div className="question_box">
                <form onSubmit={handleSubmit}>
                    <label>What's Your Focus Question? { preferencesInfo.FocusQuestion}</label>
                    <input type="text" onChange={(e) => {
                        setFocusQuestion(e.target.value)
                    }} />
                    <input type="submit" value="Set"/>
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
                    max={60}
                />
                <label>Short break: {preferencesInfo.shortBreakMinutes}:00</label>
                <ReactSlider
                    className={'slider green'}
                    thumbClassName={'thumb'}
                    trackClassName={'track'}
                    value={preferencesInfo.shortBreakMinutes}
                    onChange={newValue => preferencesInfo.setShortBreakMinutes(newValue)}
                    min={1}
                    max={15}
                />
                <label>Long break: {preferencesInfo.longBreakMinutes}:00</label>
                <ReactSlider
                    className={'slider blue'}
                    thumbClassName={'thumb'}
                    trackClassName={'track'}
                    value={preferencesInfo.longBreakMinutes}
                    onChange={newValue => preferencesInfo.setLongBreakMinutes(newValue)}
                    min={1}
                    max={30}
                />

                <div style={{marginTop: '20px'}}>
                    <BackButton onClick={() => preferencesInfo.setShowPreferences(false)}/>
                </div>
            </div>
        </>
    )
}

export default Preferences