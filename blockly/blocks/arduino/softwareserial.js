/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for the Arduino serial communication functions.
 *     The Arduino built in functions syntax can be found at:
 *     http://arduino.cc/en/Reference/HomePage
 *
 * TODO: There are more function that can be added:
 *       http://arduino.cc/en/Reference/Serial
 */
'use strict';

goog.provide('Blockly.Blocks.softwareSerial');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.softwareSerial.HUE = 150;

Blockly.Blocks['software_serial_setup'] = {
  /**
   * Block for setup pins SoftwareSerial
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.arduino.cc/en/Reference/SoftwareSerial');
    this.setColour(Blockly.Blocks.softwareSerial.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_SOFTWARE_SERIAL_SETUP)
        .appendField(
            new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.selected.digitalPins), 'SS_RX')
        .appendField('RX')
        .appendField(
            new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.selected.digitalPins), 'SS_TX')
        .appendField('TX');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ARD_SOFTWARE_SERIAL_SETUP_TIP);
  },
  /**
   * Returns the serial instance name.
   * @return {!string} Serial instance name.
   * @this Blockly.Block
   */
  getSerialSetupInstance: function() {
    return this.getFieldValue('');
  },
  /**
   * Updates the content of the the serial related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'SS_RX', 'softwareSerial_rx');
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'SS_TX', 'softwareSerial_tx');
  }
};


/*
Blockly.Blocks['software_serial_print'] = {
  init: function() {
    this.setHelpUrl('http://www.arduino.cc/en/Serial/Print');
    this.setColour(Blockly.Blocks.softwareSerial.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.selected.serial), 'SERIAL_ID')
        .appendField(Blockly.Msg.ARD_SOFTWARE_SERIAL_PRINT);
    this.appendValueInput('CONTENT');
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox('TRUE'), 'NEW_LINE')
        .appendField(Blockly.Msg.ARD_SERIAL_PRINT_NEWLINE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARD_SERIAL_PRINT_TIP);
  },
  onchange: function(event) {
    if (!this.workspace || event.type == Blockly.Events.MOVE ||
        event.type == Blockly.Events.UI) {
        return;  // Block deleted or irrelevant event
    }

    // Get the Serial instance from this block
    var thisInstanceName = this.getFieldValue('SERIAL_ID');
    // Iterate through top level blocks to find setup instance for the serial id
    var blocks = Blockly.mainWorkspace.getTopBlocks();
    var setupInstancePresent = false;
    for (var x = 0; x < blocks.length; x++) {
      var func = blocks[x].getSerialSetupInstance;
      if (func) {
        var setupBlockInstanceName = func.call(blocks[x]);
        if (thisInstanceName == setupBlockInstanceName) {
          setupInstancePresent = true;
          break;
        }
      }
    }

    if (!setupInstancePresent) {
      this.setWarningText(Blockly.Msg.ARD_SERIAL_PRINT_WARN.replace('%1',
          thisInstanceName), 'serial_setup');
    } else {
      this.setWarningText(null, 'serial_setup');
    }
  },
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'SERIAL_ID', 'serial');
  }
};
*/
