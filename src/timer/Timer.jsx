import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import {useContext, useEffect, useRef, useState} from "react";
import PreferencesContext from "../preferences/PreferencesContext.jsx";

const red = '#f54e4e';
const green = '#4aec8c';
// const blue = '#000f';

function Timer() {
    const preferencesInfo = useContext(PreferencesContext);

    const audioElement = useRef(null);

    const [isPaused, setIsPaused] = useState(true);
    const [mode, setMode] = useState('work'); // work/sbreak/lbreak/null
    const [secondsLeft, setSecondsLeft] = useState(0);

    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);

    function tick() {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current);
    }

    useEffect(() => {

        function switchMode() {
            const nextMode = modeRef.current === 'work' ? 'break' : 'work';
            const nextSeconds = (nextMode === 'work' ? preferencesInfo.workMinutes : preferencesInfo.shortBreakMinutes) * 60;

            setMode(nextMode);
            modeRef.current = nextMode;

            setSecondsLeft(nextSeconds);
            secondsLeftRef.current = nextSeconds;
        }

        secondsLeftRef.current = preferencesInfo.workMinutes * 60;
        setSecondsLeft(secondsLeftRef.current);

        const interval = setInterval(() => {
            if (isPausedRef.current) {
                return;
            }
            if (secondsLeftRef.current === 0) {
                audioElement.current.play();
                return switchMode();
            }

            tick();
        }, 1000);

        return () => clearInterval(interval);
    }, [preferencesInfo]);

    const totalSeconds = mode === 'work'
        ? preferencesInfo.workMinutes * 60
        : preferencesInfo.shortBreakMinutes * 60;
    const percentage = Math.round(secondsLeft / totalSeconds * 100);

    const minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if (seconds < 10) seconds = '0' + seconds;

    return (
        <div className='timer'>
            <CircularProgressbar
                value={percentage}
                text={minutes + ':' + seconds}
                styles={buildStyles({
                  textColor: '#fff',
                    tailColor: 'rgba(255,255,255,.2)',
                    pathColor: (mode === 'work') ? red : green
                  
                //   pathColor: (mode === 'work') ? red : (mode === 'shortBreak') ? green : (mode === 'longBreak') ? blue                  
                })}/>
            <div style={{marginTop: '20px'}}>
                {isPaused
                    ? <PlayButton onClick={() => {
                        setIsPaused(false);
                        isPausedRef.current = false;
                    }}/>
                    : <PauseButton onClick={() => {
                        setIsPaused(true);
                        isPausedRef.current = true;
                    }}/>}
            </div>
            <audio id="beep" ref={audioElement}>
                <source src="https://onlineclock.net/audio/options/default.mp3" type="audio/mpeg" />
            </audio>
        </div>
    );
}

export default Timer;