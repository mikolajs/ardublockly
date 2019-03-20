/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Servo library blocks.
 *     The Arduino Servo library docs: http://arduino.cc/en/reference/servo
 *
 * TODO: If angle selector added to blocks edit code here.
 */
'use strict';

goog.provide('Blockly.Arduino.sensor');

goog.require('Blockly.Arduino');


/**
 * Code generator to read an angle value from a servo pin (X).
 * Arduino code: #include <Servo.h>
 *               Servo myServoX;
 *               setup { myServoX.attach(X); }
 *               loop  { myServoX.read();    }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['ultrasonic_read'] = function(block) {
	//rename utlrasonic_read to ultrasonic_echo in blocks
  var pinEcho = block.getFieldValue('ULTRASONIC_READ');
  var pinTrig = block.getFieldValue('ULTRASONIC_TRIG');
  var ultrasonicName = 'sonar';

	//poprawić ustawiając typ pinu
  Blockly.Arduino.reservePin(
      block, pinEcho, Blockly.Arduino.PinTypes.Ultrasonic, 'Ultrasonic Read');
  Blockly.Arduino.reservePin(
      block, pinTrig, Blockly.Arduino.PinTypes.Ultrasonic, 'Ultrasonic Read');

  Blockly.Arduino.addInclude('ultrasonic', '#include <Ultrasonic.h>');
  Blockly.Arduino.addDeclaration('ultrasonic_',
	  'Ultrasonic ' + ultrasonicName + '('+ pinTrig + ', ' + pinEcho  + ', 40000UL);');

  var code = ultrasonicName + '.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
