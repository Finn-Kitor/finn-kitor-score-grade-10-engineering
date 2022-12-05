let score = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        score = score + 1
        basic.showNumber(score)
    } else if (input.buttonIsPressed(Button.B)) {
        score = 0
        basic.showNumber(score)
    }
})
