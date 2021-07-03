def on_button_pressed_a():
    for index in range(8):
        max7219_matrix.set_value_in_matrix(mat8, index, index, 1)
    max7219_matrix.display_le_ds_for_one(mat8, 0)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

mat8: List[List[number]] = []
max7219_matrix.setup(1,
    DigitalPin.P2,
    DigitalPin.P16,
    DigitalPin.P14,
    DigitalPin.P15)
max7219_matrix.brightness_all(12)
max7219_matrix.clear_all()
mat8 = max7219_matrix.get_empty_matrix()

def on_forever():
    pass
basic.forever(on_forever)
