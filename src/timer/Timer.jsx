import 'react-circular-progressbar/dist/styles.css';
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import {useContext, useEffect, useRef, useState} from "react";
import PreferencesContext from "../preferences/PreferencesContext.jsx";
import {TimerClock} from "./TimerClock";
import {getNext} from "./getNext";

let shorts = 0

function Timer() {
    const preferencesInfo = useContext(PreferencesContext);

    const audioElement = useRef(null);

    const [isPaused, setIsPaused] = useState(true);
    const [mode, setMode] = useState('work');
    const [secondsLeft, setSecondsLeft] = useState(0);
    const [totalSeconds, setTotalSeconds] = useState(preferencesInfo.workMinutes * 60);

    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);

    function tick() {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current);
    }

    useEffect(() => {

        function switchMode() {
            const { nextMode, nextSeconds } = getNext(modeRef.current, shorts, preferencesInfo);
            if (nextMode === 'shortBreak' || nextMode === 'longBreak') {
                if (shorts === 2) {
                    shorts = 0;
                } else {
                    shorts += 1;
                }
            }

            setTotalSeconds(nextSeconds);

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

    return (
        <div className='timer'>
            <TimerClock
                mode={mode}
                secondsLeft={secondsLeft}
                totalSeconds={totalSeconds} />
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
                <source src="https://onlineclock.net/audio/options/cuckoo-clock.mp3" type="audio/mpeg" />
            </audio>
        </div>
    );
}

export default Timer;