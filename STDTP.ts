import { EMetaType } from './EMetaType';
import { EStdAttr } from './attr';
// Поддерживаемые данные прибора
// Формат (typ|{var_name{|meta}|0) type var_name: {value: number; readonly META?: string; readonly Type:typ; readonly index: number }
// Формат массива (arr=59|L|H|typ|{arr_name}|0) type arr_name: {value: number[HL]; const META=meta; const Type = typ; index: number}
export const STDTP = [
  {
    tip: EMetaType.varShortInt, attr: EStdAttr.AT_TIP, cname: 'int8_t', metalen: 'string', devlen: 1,
    sv: (v: number, d: Buffer, idx: number) => d.writeInt8(v, idx),
    gv: (d: Buffer, idx: number): number => d.readInt8(idx),
  },
  {
    tip: EMetaType.varByte, attr: EStdAttr.AT_TIP, cname: 'uint8_t', metalen: 'string', devlen: 1,
    sv: (v: number, d: Buffer, idx: number) => d.writeUInt8(v, idx),
    gv: (d: Buffer, idx: number): number => d.readUInt8(idx),
  },
  {
    tip: EMetaType.varSmallint, attr: EStdAttr.AT_TIP, cname: 'int16_t', metalen: 'string', devlen: 2,
    sv: (v: number, d: Buffer, idx: number) => d.writeInt16LE(v, idx),
    gv: (d: Buffer, idx: number): number => d.readInt16LE(idx),
  },
  {
    tip: EMetaType.varWord, attr: EStdAttr.AT_TIP, cname: 'uint16_t', metalen: 'string', devlen: 2,
    sv: (v: number, d: Buffer, idx: number) => d.writeUInt16LE(v, idx),
    gv: (d: Buffer, idx: number): number => d.readUInt16LE(idx),
  },
  {
    tip: EMetaType.varInteger, attr: EStdAttr.AT_TIP, cname: 'int32_t', metalen: 'string', devlen: 4,
    sv: (v: number, d: Buffer, idx: number) => d.writeInt32LE(v, idx),
    gv: (d: Buffer, idx: number): number => d.readInt32LE(idx),
  },
  {
    tip: EMetaType.varLongWord, attr: EStdAttr.AT_TIP, cname: 'uint32_t', metalen: 'string', devlen: 4,
    sv: (v: number, d: Buffer, idx: number) => d.writeUInt32LE(v, idx),
    gv: (d: Buffer, idx: number): number => d.readUInt32LE(idx),
  },
  {
    tip: EMetaType.varSingle, attr: EStdAttr.AT_TIP, cname: 'float', metalen: 'string', devlen: 4,
    sv: (v: number, d: Buffer, idx: number) => d.writeFloatLE(v, idx),
    gv: (d: Buffer, idx: number): number => d.readFloatLE(idx),
  },
  {
    tip: EMetaType.varDouble, attr: EStdAttr.AT_TIP, cname: 'double', metalen: 'string', devlen: 8,
    sv: (v: number, d: Buffer, idx: number) => d.writeDoubleLE(v, idx),
    gv: (d: Buffer, idx: number): number => d.readDoubleLE(idx),
  },
];
// Дополнительные атрибуты метаданных прибора
// Формат (typ|n) type const attrname: number = n;
// Формат (typ|nn) type const attrname: number = nn;
// Формат (typ|nnnn) type const attrname: number = nnnn;
// Формат (typ=39|{str}|0) type const attrname: string = str;
export const USRTP = [
  { tip: EMetaType.var_adr, attr: EStdAttr.AT_ADDR, cname: 'Adr', metalen: 1 },
  { tip: EMetaType.var_long_adr, attr: EStdAttr.AT_ADDR, cname: 'LongAdr', metalen: 4 },
  { tip: EMetaType.var_info, attr: EStdAttr.AT_INFO, cname: 'Info', metalen: 'string' },
  { tip: EMetaType.varChip, attr: EStdAttr.AT_CHIP, cname: 'Chip', metalen: 1 },
  { tip: EMetaType.varSerial, attr: EStdAttr.AT_SERIAL, cname: 'Serial', metalen: 2 },
  { tip: EMetaType.varRamSize, attr: EStdAttr.AT_RAMSIZE, cname: 'RamSize', metalen: 2 },
  { tip: EMetaType.varSSDSize, attr: EStdAttr.AT_SSD, cname: 'SSDSize', metalen: 4 },
  { tip: EMetaType.varSpeed, attr: EStdAttr.AT_SPEED, cname: 'MaskSpeed', metalen: 2 },
];
