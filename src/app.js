var SerialPort = require('serialport');
var port = new SerialPort('COM3', { baudRate: 9600 });

// Open errors will be emitted as an error event
port.on('open', () => {
  console.log('OK');
});
