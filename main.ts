input.onButtonPressed(Button.A, function () {
    radio.sendValue("kfd", 12345678901234567000)
})
radio.onReceivedValue(function (name, value) {
    basic.showString(name)
    basic.showString("" + (value))
})
radio.setGroup(9)
