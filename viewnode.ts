import { EStdAttr } from './attr';
import { MetaRec, MetaValue } from './metanode';

// представление данных буфера для отображения
export type attrVal_t = string | number | number[];
export type attr_t = [EStdAttr, attrVal_t];

export interface IViewNode {
    readonly name: string;
    readonly attr?: attr_t[];
}
export interface IViewDev extends IViewNode {
    readonly dev: attr_t[];
    readonly clc?: attr_t[];
}
export interface IViewClc extends IViewNode {
    readonly clc: attr_t[];
}
export interface IViewRec extends IViewNode {
    readonly child: IViewNode[];
    findClc?: () => void;
}
export interface IDevNode extends IViewNode {
    readonly meta: MetaValue;
    readonly dev: attr_t[];
    readonly clc?: attr_t[];
    findClc?: () => void;
}
export interface IClcNode extends IViewNode {
    readonly clc: attr_t[];
    findClc?: () => void;
}
export interface IRecNode extends IViewNode {
    readonly meta: MetaRec;
    readonly child: IViewNode[];
    findClc?: () => void;
}
// защитники типа
export function isIRecNode(a: IViewNode): a is IRecNode { return (a as IRecNode).child !== undefined; }
export function isIDevNode(a: IViewNode): a is IDevNode { return (a as IDevNode).dev !== undefined; }
export function isIClcNode(a: IViewNode): a is IClcNode { return (a as IDevNode).dev === undefined && (a as IDevNode).clc !== undefined; }
