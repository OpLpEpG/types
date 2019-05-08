
export type chip_t = {
  id: number;
  size: number;
  pages: number;
  meta: number;
  name: string;
  bits: number;
  flash: number;
}

export const CHIPS: chip_t[] = [
  { id: 1, size: 64, pages: 128, meta: 0x34, name: 'ATMega88', bits: 8, flash: 0x0000 },
  { id: 2, size: 128, pages: 128, meta: 0x7C, name: 'ATMega164', bits: 8, flash: 0x0000 },
  { id: 3, size: 128, pages: 1024, meta: 0x180, name: 'STM32F103CB', bits: 32, flash: 0x08002000 },
  { id: 4, size: 128, pages: 256, meta: 0x7C, name: 'ATMega664', bits: 8, flash: 0x0000 },
  { id: 5, size: 128, pages: 4096, meta: 0x400, name: 'STM32F401', bits: 32, flash: 0x08004000 },
];
