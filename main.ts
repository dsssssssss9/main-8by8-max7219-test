input.onButtonPressed(Button.A, function () {
    max7219_matrix.for_4_in_1_modules(
    rotation_direction.clockwise,
    false
    )
    max7219_matrix.displayCustomCharacter(
    c2,
    0,
    true
    )
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    max7219_matrix.for_4_in_1_modules(
    rotation_direction.none,
    false
    )
    max7219_matrix.displayCustomCharacter(
    cust,
    0,
    true
    )
})
let c2: number[] = []
let cust: number[] = []
max7219_matrix.setup(
1,
DigitalPin.P2,
DigitalPin.P16,
DigitalPin.P14,
DigitalPin.P15
)
max7219_matrix.brightnessAll(8)
max7219_matrix.clearAll()
let mat8 = max7219_matrix.getEmptyMatrix()
cust = max7219_matrix.getCustomCharacterArray(
"B00001000,B00001100,B00001110,B11111111,B11111111,B00001110,B00001100,B00001000"
)
c2 = max7219_matrix.getCustomCharacterArray(
"B00111000,B00001100,B00011000,B00110000,B00111100,B00000000,B00000000,B00000000"
)
basic.forever(function () {
	
})
