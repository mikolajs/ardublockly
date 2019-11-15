/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for the Arduino serial communication functions.
 *     The Arduino built in functions syntax can be found at:
 *     http://arduino.cc/en/Reference/HomePage
 *
 */
'use strict';

goog.provide('Blockly.Blocks.wifi');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.softwareSerial.HUE = 158;

Blockly.Blocks['wifi_server_setup'] = {
  /**
   * Block for setup pins SoftwareSerial
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.softwareSerial.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_WIFI_SERVER_SSID)
        .appendValueInput('SSID_NAME')
        .setCheck(Blockly.Types.TEXT)
        .appendField(Blockly.Msg.ARD_WIFI_SERVER_PASSWORD)
        .appendValueInput('SSID_PASS')
        .setCheck(Blockly.Types.TEXT);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ARD_SOFTWARE_SERIAL_SETUP_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function(event) {
    if (!this.workspace || event.type == Blockly.Events.MOVE ||
        event.type == Blockly.Events.UI) {
        return;  // Block deleted or irrelevant event
    }

    var name = this.getFieldValue('SSID_NAME').trim();
    var pass = this.getFieldValue('SSID_PASS').trim();
    if(name.length < 8 || pass.length < 0){
      this.setWarningText(Blockly.Msg.ARD_WIFI_SERVER_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};


Blockly.Blocks['wifi_server_read'] = {
  init: function(){
    this.setColour(Blockly.Blocks.softwareSerial.HUE);
    this.appendDummyInput()
	.appendField(Blockly.Msg.ARD_SOFTWARE_SERIAL)
	.appendField(Blockly.Msg.ARD_SOFTWARE_SERIAL_READ);
    this.setOutput(true, Blockly.Types.CHARACTER.output);
    this.setInputsInline(true);

  },
  onchange: function(event) {
    if (!this.workspace || event.type == Blockly.Events.MOVE ||
        event.type == Blockly.Events.UI) {
        return;  // Block deleted or irrelevant event
    }

    // Get the Serial instance from this block
    var thisInstanceName = Blockly.Msg.ARD_SOFTWARE_SERIAL;
    // Iterate through top level blocks to find setup instance for the serial id
    var blocks = Blockly.mainWorkspace.getTopBlocks();
    var setupInstancePresent = false;
    for (var x = 0; x < blocks.length; x++) {
      var func = blocks[x].getSoftwareSerialSetupInstance;
      if (func) {
        var setupBlockInstanceName = func.call(blocks[x]);
        if (thisInstanceName == setupBlockInstanceName) {
          setupInstancePresent = true;
          break;
        }
      }
    }

    if (!setupInstancePresent) {
      this.setWarningText(Blockly.Msg.ARD_SOFTWARE_SERIAL_WARN.replace('%1',
          thisInstanceName), 'software_serial_setup');
    } else {
      this.setWarningText(null, 'software_serial_setup');
    }
  },
  getBlockType: function(){
     return Blockly.Types.CHARACTER;
  }
};

Blockly.Blocks['software_serial_available'] = {
  init: function(){
    this.setColour(Blockly.Blocks.softwareSerial.HUE);
    this.appendDummyInput()
	.appendField(Blockly.Msg.ARD_SOFTWARE_SERIAL)
	.appendField(Blockly.Msg.ARD_SOFTWARE_SERIAL_AVAILABLE);
    this.setOutput(true, Blockly.Types.BOOLEAN.output);
   this.setInputsInline(true);
  },
  onchange: function(event) {
    if (!this.workspace || event.type == Blockly.Events.MOVE ||
        event.type == Blockly.Events.UI) {
        return;  // Block deleted or irrelevant event
    }

    // Get the Serial instance from this block
    var thisInstanceName = Blockly.Msg.ARD_SOFTWARE_SERIAL;
    // Iterate through top level blocks to find setup instance for the serial id
    var blocks = Blockly.mainWorkspace.getTopBlocks();
    var setupInstancePresent = false;
    for (var x = 0; x < blocks.length; x++) {
      var func = blocks[x].getSoftwareSerialSetupInstance;
      if (func) {
        var setupBlockInstanceName = func.call(blocks[x]);
        if (thisInstanceName == setupBlockInstanceName) {
          setupInstancePresent = true;
          break;
        }
      }
    }

    if (!setupInstancePresent) {
      this.setWarningText(Blockly.Msg.ARD_SOFTWARE_SERIAL_WARN.replace('%1',
          thisInstanceName), 'software_serial_setup');
    } else {
      this.setWarningText(null, 'software_serial_setup');
    }
  },
  getBlockType: function(){
     return Blockly.Types.BOOLEAN;
  }
};
