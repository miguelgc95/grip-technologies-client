//MOVER ESTE ARCHIVO AL REPO DE SERVIDOR (SI SE QUIERE PROBAR EN ESTE REPO, INSTALAR SERIALPORT DEPENDENCY CON NPM)

// Import dependencies
const SerialPort = require('serialport');

// Defining the serial port
const port = new serialPort('/dev/ttyAMA0', {
    baudRate: 9600,
});

// The Serial port parser
const parser = new serialPort.parsers.Readline();
port.pipe(parser);

// Read the data from the serial port
parser.on('data', line => console.log(line));

// Write the data to the serial port
port.write('ROBOT POWER ON');
