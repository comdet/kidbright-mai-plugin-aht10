python.pythonGenerator.forBlock['aht10_init'] = function(block, generator) {
  var value_address = generator.valueToCode(block, 'address', python.Order.ATOMIC);
  generator.definitions_['from_maix_import_i2c'] = 'from maix import i2c';
  generator.definitions_['import_time'] = 'import time';
  generator.definitions_['_i2c'] = '_i2c = i2c.I2C("/dev/i2c-2", '+value_address+')';
  //temp = ((data[3] & 0x0F) << 16) | (data[4] << 8) | data[5]
  //ctemp = ((temp*200) / 1048576) - 50
  //humid = ((data[1] << 16) | (data[2] << 8) | data[3]) >> 4
  //chumid = int(humid * 100 / 1048576)
  generator.provideFunction_(
    'readAht10',
    ['def ' + 'readAht10' + '(key):',
    '  _i2c.write(0xAC, bytes([0x33, 0x00]))',
    '  time.sleep(0.5)',
    '  data = _i2c.ioctl_read(0x0, 6)',
    '  if key == "temp":',
    '    temp = ((data[3] & 0x0F) << 16) | (data[4] << 8) | data[5]',
    '    return ((temp*200) / 1048576) - 50',
    '  if key == "humid":',
    '    humid = ((data[1] << 16) | (data[2] << 8) | data[3]) >> 4',
    '    return int(humid * 100 / 1048576)',    
    '  return False']);
  var code = '_i2c.write(0xE1, bytes([0x08, 0x00]))\n';
  return code;
};

python.pythonGenerator.forBlock['aht10_read'] = function(block, generator) {
  var dropdown_name = block.getFieldValue('NAME');
  var code = 'readAht10("'+dropdown_name+'")';
  return [code, python.Order.ATOMIC];
};