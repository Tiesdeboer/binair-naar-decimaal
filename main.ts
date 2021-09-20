input.onButtonPressed(Button.A, function () {
    binair = "" + binair + "1"
})
function converteer (binairgetal: string) {
    Totaal = 0
    for (let index = 0; index <= binairgetal.length - 1; index++) {
        Totaal = Totaal + 2 ** index * parseFloat(binairgetal.charAt(index))
    }
    return Totaal
}
input.onButtonPressed(Button.AB, function () {
    omgekeerdetekst = Omkeren(binair)
    basic.showNumber(converteer(omgekeerdetekst))
})
function Omkeren (binair: string) {
    omgekeerd = ""
    for (let waarde of binair) {
        omgekeerd = "" + waarde + omgekeerd
    }
    return omgekeerd
}
input.onButtonPressed(Button.B, function () {
    binair = "" + binair + "0"
})
let omgekeerd = ""
let omgekeerdetekst = ""
let Totaal = 0
let binair = ""
binair = ""
