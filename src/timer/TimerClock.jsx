import {buildStyles, CircularProgressbar} from "react-circular-progressbar";

const red = '#f54e4e';
const green = '#4aec8c';
const blue = '#00f';

export function TimerClock(props) {
    const mode = props.mode;
    const secondsLeft = props.secondsLeft;
    const totalSeconds = props.totalSeconds;


    const percentage = Math.round(secondsLeft / totalSeconds * 100);

    const minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if (seconds < 10) seconds = '0' + seconds;

    return <CircularProgressbar
        value={percentage}
        text={minutes + ':' + seconds}
        styles={buildStyles({
            textColor: '#fff',
            tailColor: 'rgba(255,255,255,.2)',
            pathColor: (mode === 'work') ? red : mode === 'shortBreak' ? green : blue
        })}/>
}