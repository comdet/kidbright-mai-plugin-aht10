Blockly.Blocks['aht10_init'] = {
  init: function() {
    this.appendValueInput("address")
        .setCheck("Number")
        .appendField("AHT10 Initialize adress");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['aht10_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("AHT10 Read")
        .appendField(new Blockly.FieldDropdown([["Temperature","temp"], ["Humidity","humid"]]), "NAME");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};