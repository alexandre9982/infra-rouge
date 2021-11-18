let etat_actuel = 0
let etta_passer = 0
basic.forever(function () {
    etat_actuel = pins.digitalReadPin(DigitalPin.P1)
    while (etat_actuel != etta_passer) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        if (input.buttonIsPressed(Button.A)) {
            etat_actuel = 0
            basic.clearScreen()
        }
    }
})
