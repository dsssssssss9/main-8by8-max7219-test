input.onButtonPressed(Button.A, function () {
    max7219_matrix.fillAll()
})
max7219_matrix.setup(
1,
DigitalPin.P2,
DigitalPin.P16,
DigitalPin.P14,
DigitalPin.P15
)
max7219_matrix.brightnessAll(8)
max7219_matrix.clearAll()
basic.forever(function () {
	
})
