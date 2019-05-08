import { MetaNode } from './metanode';
import { chip_t } from './CHIPS';

export interface IParseBootFile {
    readonly chip?: chip_t;
    readonly addr: number;
    readonly serial?: number;
    readonly meta: MetaNode;
}
// защитники типа
export function isParseBootFile(a: IParseBootFile): a is IParseBootFile { 
    return ((a as IParseBootFile).addr !== undefined) && ((a as IParseBootFile).meta !== undefined); 
}
