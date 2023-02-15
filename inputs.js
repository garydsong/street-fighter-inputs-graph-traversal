const joystick = [
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 9]
]

const buttons = [
    ['👊'],
    ['🦶']
]

// a hadoken is ↓ ↘ → 👊
function hadoken(row, col, joystick, buttons) {
    let input = [joystick[row][col]];

    input.push(joystick[row + 1][col])
    input.push(joystick[row + 1][col + 1])
    input.push(joystick[row][col + 1])
    input.push(buttons[0][0])

    return input;
}

// a shoryuken is → ↓ ↘ 👊
function shoryuken(row, col, joystick, buttons) {
    let input = [joystick[row][col]];

    input.push(joystick[row][col + 1])
    input.push(joystick[row + 1][col])
    input.push(joystick[row + 1][col + 1])
    input.push(buttons[0][0])

    return input;
}

// a tatsumaki is ↓ ↙ ← 🦶
function tatsumaki(row, col, joystick, buttons) {
    let input = [joystick[row][col]];

    input.push(joystick[row + 1][col])
    input.push(joystick[row + 1][col - 1])
    input.push(joystick[row][col - 1])
    input.push(buttons[1][0])

    return input;
}


// console.log(hadoken(1, 1, joystick, buttons), 'HADOKEN') // [ 0, 8, 9, 6, '👊' ]
// console.log(shoryuken(1, 1, joystick, buttons), 'SHORRRRRYUKEN') // [ 0, 6, 8, 9, '👊' ]
// console.log(tatsumaki(1, 1, joystick, buttons), 'TATSUMAKISENPUKYAKU') // [ 0, 8, 7, 4, '🦶' ]
