input.onButtonPressed(Button.A, function () {
    noSadness = true
    basic.showIcon(IconNames.Yes)
    if (happiness != 3) {
        happiness = happiness + 1
    } else {
        happiness = 0
    }
    noSadness = false
})
function showMood () {
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
}
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(178)
    radio.sendString("init")
})
input.onButtonPressed(Button.B, function () {
    noSadness = true
    basic.showIcon(IconNames.Yes)
    if (happiness == 0) {
        happiness = 2
    }
    noSadness = false
})
input.onGesture(Gesture.Shake, function () {
    previousHappiness = happiness
    happiness = 0
    basic.pause(2000)
    happiness = previousHappiness
})
let y: Image = null
let x = ""
let noSadness = false
let happiness = 0
happiness = 3
let previousHappiness
basic.forever(function () {
    radio.setGroup(178)
    x = radio.receiveString()
    y = images.createBigImage(`
        . . # . . . . # . .
        . # . . . . . . # .
        # # # # . . # # # #
        . # . . . . . . # .
        . . # . . . . # . .
        `)
    if (x == "init") {
        basic.clearScreen()
        y.scrollImage(2, 200)
        happiness = 3
    }
})
basic.forever(function () {
    showMood()
})
loops.everyInterval(900000, function () {
    if (happiness != 1 && noSadness != true) {
        happiness = happiness - 1
        showMood()
    }
})
