/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Stepper library blocks.
 *     The Arduino Stepper library docs: http://arduino.cc/en/Reference/Stepper
 */
'use strict';

goog.provide('Blockly.Arduino.wifi');

goog.require('Blockly.Arduino');


/**
 * Code generator for the stepper generator configuration. Nothing is added
 * to the 'loop()' function. Sets the pins (X and Y), steps per revolution (Z),
 * speed(A) and instance name (B).
 * Arduino code: #include <Stepper.h>
 *               Stepper B(Z, X, Y);
 *               setup() { B.setSpeed(A); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Empty string as no code goes into 'loop()'.
 */
Blockly.Arduino['wifi_connection'] = function(block) {
  var SSIDName = block.getFieldValue('SSID_NAME');
  var SSIDPass = block.getFieldValue('SSID_PASS');
  var globalCode = ''; ///// TODO:
  var loopCode = '';
  var setupCode = 'WiFi.mode(WIFI_AP)';
  setupCode += 'WiFi.softAP("' + SSIDName + '", "' + SSIDPass + '");';

  Blockly.Arduino.addInclude('wifi_esp8266', '#include <ESP8266WiFi.h>');

  Blockly.Arduino.addDeclaration(SSIDName, globalCode);

  Blockly.Arduino.addSetup(setupCode, true);

  return '';
};

/**
 * Code generator for moving the stepper instance (X) a number of steps (Y).
 * Library info in the setHelpUrl link.
 * This block requires the stepper_config block to be present.
 * Arduino code: loop { X.steps(Y) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['wifi_server_read'] = function(block) {
  var code = '';
  return code;
};
