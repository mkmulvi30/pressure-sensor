let value = 0
basic.forever(function () {
    value = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(value)
})
