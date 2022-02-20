export function getNext(currentMode, shorts, preferencesInfo) {
    if (currentMode === 'work') {
        if (shorts === 2) {
            return {
                nextMode: 'longBreak',
                nextSeconds: preferencesInfo.longBreakMinutes * 60,
            }
        } else {
            return {
                nextMode: 'shortBreak',
                nextSeconds: preferencesInfo.shortBreakMinutes * 60,
            }
        }
    } else {
        return {
            nextMode: 'work',
            nextSeconds: preferencesInfo.workMinutes * 60,
        }
    }
}