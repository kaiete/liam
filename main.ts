let happiness = 3
let previousHappiness
let noSadness = false
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    noSadness = true
        basic.showString("You gave food to Liam!")
        if (happiness != 3) {
            happiness = happiness + 1
        } else {
            happiness = 0
        }
    noSadness = false
        
})
input.onGesture(Gesture.Shake, function() {
    previousHappiness = happiness
    happiness = 0
    basic.pause(2000)
    happiness = previousHappiness
})
basic.forever(function on_forever() {
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
loops.everyInterval(20000,function() {
    if (happiness != 1 && noSadness != true) {
        happiness = happiness - 1
    }
})
