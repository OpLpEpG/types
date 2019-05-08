import { EStdAttr } from './attr';
import { EMetaType } from './EMetaType';
// Поддерживаемые данные прибора
// Формат (typ|{var_name{|meta}|0)
// Формат массива (arr=59|L|H|typ|{arr_name|meta}|0)
// Дополнительные атрибуты метаданных прибора
// Формат (typ|n) type const attrname: number = n;
// Формат (typ|nn) type const attrname: number = nn;
// Формат (typ|nnnn) type const attrname: number = nnnn;
// Формат (typ=39|{str}|0) type const attrname: string = str;
export type attrMetaVal_t = string | number;
export type setUserAttr_t = (value: attrMetaVal_t, data: Uint8Array) => void; // запись в буфер

export type value_t = number | number[];
export type setval_t = (value: value_t, data: Uint8Array) => void; // запись в буфер

export type getval_t = (data: Uint8Array) => value_t; // чтение буфера

// представление бинарных метаданных буфера
export interface MetaNode {
    readonly tip: EMetaType;
    readonly index: number; // смещение в буфере (например: для записи серийного номера (вычисляемый параметр))
    readonly len: number; // длина в буфере в байтах (вычисляемый параметр или данные record)
    readonly value: attrMetaVal_t; // имя параметра, или значение для атрибута
}
export interface MetaUser extends MetaNode {
    readonly attr: EStdAttr;
    setUserVal?: setUserAttr_t; // запись в буфер метаданных
}
export interface MetaRec extends MetaNode {
    readonly meta?: string; // часть строки метаданных  в формата name|meta
    readonly devSize: number; // длина в байтах в буфере данных от прибора
    readonly child: MetaNode[]; // вложенные ноды для nodeRec
}
// представление бинарных метаданных буфера
export interface MetaValue extends MetaNode {
    readonly meta?: string; // часть строки метаданных  в формата name|meta
    readonly devIndex: number; // вычисляемый параметр: смещение параметра в буфере при приеме данных от прибора
    readonly devLen: number; // длина параметра в буфере при приеме данных от прибора
    readonly arrayLength?: number; // число элементов массива (параметрob) (word) Формат массива (arr=59|L|H|tip|{arr_name|meta}|0)
    getValue: getval_t; // чтение буфера при приеме данных от прибора
    setValue?: setval_t; // запись в буфер при передаче данных прибору
}
// защитники типа
export function isMetaUser(a: MetaNode): a is MetaUser { return (a as MetaUser).attr !== undefined; }
export function isMetaRec(a: MetaNode): a is MetaRec { return (a as MetaRec).child !== undefined; }
export function isMetaValue(a: MetaNode): a is MetaValue { return (a as MetaValue).devIndex !== undefined; }
