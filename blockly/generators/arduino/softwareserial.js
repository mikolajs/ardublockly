/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for the Arduino serial blocks.
 *     Arduino Serial library docs: https://www.arduino.cc/en/Reference/Serial
 *
 * TODO: There are more functions that can be added:
 *       http://arduino.cc/en/Reference/Serial
 */
'use strict';

goog.provide('Blockly.Arduino.softwareSerial');

goog.require('Blockly.Arduino');


Blockly.Arduino.BLUETOOTH_NAME = 'bluetooth';
/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
Blockly.Arduino['software_serial_print'] = function(block) {
  var serialId = block.getFieldValue('SERIAL_ID');
  var content = Blockly.Arduino.valueToCode(
      block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var checkbox_name = (block.getFieldValue('NEW_LINE') == 'TRUE');

  var serialPins = Blockly.Arduino.Boards.selected.serialPins[serialId];
  for (var i = 0; i < serialPins.length; i++) {
    Blockly.Arduino.reservePin(block, serialPins[i][1],
        Blockly.Arduino.PinTypes.SERIAL, 'SERIAL ' + serialPins[i][0]);
  }

  if (checkbox_name) {
    var code = serialId + '.println(' + content + ');\n';
  } else {
    var code = serialId + '.print(' + content + ');\n';
  }
  return code;
};

 */

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['software_serial_setup'] = function(block) {
  var rxPin = block.getFieldValue('SS_RX');
  var txPin = block.getFieldValue('SS_TX');
  var softwareSerialName = Blockly.Arduino.BLUETOOTH_NAME;
Blockly.Arduino.reservePin(
      block, rxPin, Blockly.Arduino.PinTypes.SoftwareSerial, 'SoftwareSerial RX');
  Blockly.Arduino.reservePin(
      block, txPin, Blockly.Arduino.PinTypes.SoftwareSerial, 'SoftwareSeria TX');

  Blockly.Arduino.addInclude('softwareSerial', '#include <SoftwareSerial.h>');
  Blockly.Arduino.addDeclaration('softwareSerial_',
          'SoftwareSerial ' + softwareSerialName + '('+ rxPin + ', ' + txPin + ');');
  var serialSetupCode =  softwareSerialName + '.begin(9600);';
  Blockly.Arduino.addSetup(softwareSerialName, serialSetupCode, true);
  var code = '';
  return code;
};

Blockly.Arduino['software_serial_read'] = function(block) {
  var code = Blockly.Arduino.BLUETOOTH_NAME + '.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino['software_serial_available'] = function(block){
  var code = Blockly.Arduino.BLUETOOTH_NAME + '.available()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}
