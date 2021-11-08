const Gpio = require('pigpio').Gpio;

const motor = new Gpio(21, {mode: Gpio.OUTPUT});

let pulseWidth = 500;
let increment = 100;

setInterval(() => {

  motor.servoWrite(pulseWidth);

  pulseWidth = pulseWidth + increment

  if(pulseWidth <= 500){

    increment = 100

  }
  
  else if(pulseWidth >= 2000){

    increment = -100

  }

  console.log(pulseWidth)

}, 2500);