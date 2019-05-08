export enum EMetaType {
  varEmpty = 0,
  varNull,
  varSmallint,
  varInteger,
  varSingle,
  varDouble,
  varCurrency,
  varDate,
  varOleStr,
  varDispatch,
  varError,
  varBoolean,
  varVariant,
  varUnknown,
  varDecimal,
  varUndef0F,
  varShortInt,
  varByte,
  varWord,
  varLongWord,
  varInt64,
  varUInt64,
  varRecord = 0x24,
  //   дополнительные типы данных поддерживаемые парсером
  var_i3,
  var_ui3,
  var_info,
  var_adr,
  var_i2_15b,
  var_ui2_15b,
  varRamSize,
  var_i2_10b,
  var_i2_14b,
  var_ui2_14b,
  var_ui2_kadr_psk4,
  var_ui2_kadr_all,
  var_ui2_8b,
  var_i2_14b_z_inv,
  var_i2_14b_z,
  var_inv_ui3,
  var_inv_ui3_ltr,
  var_inv_word,
  var_inv_i3,
  varChip,
  varSerial,
  var_i2_15b_inv,
  var_array,
  var_i2_14b_GZ,
  varSSDSize,
  varSpeed,
  var_long_adr,
  varString = 0x0100,
}
