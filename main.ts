let strip: neopixel.Strip = null
ESP8266_IoT.connectThingSpeak()
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
})
