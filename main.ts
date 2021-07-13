input.onButtonPressed(Button.A, function () {
    basic.showString("A = food, B = water")
    input.onButtonPressed(Button.A, function () {
        basic.showString("You gave food to Liam!")
        if (happiness != 3) {
            happiness = happiness + 1
        } else {
            happiness = 0
        }
    })
})
let millis = 0
let happiness = 2
basic.forever(function () {
    if (happiness == 3) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (happiness == 2) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    } else if (happiness == 1) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else if (happiness == 0) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            # # # # #
            `)
    }
})
basic.forever(function () {
    millis = millis + 1
})
basic.forever(function () {
    // millis == 1800000 in production
    if (millis == 10000) {
        happiness = happiness - 1
        if (happiness == 0) {
            happiness = happiness + 1
        }
        millis = 0
    }
})
