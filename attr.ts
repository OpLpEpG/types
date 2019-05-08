
export enum EStdAttr {
  // совместимость с БД для XML проекта
  AT_CAPTION = 'Имя',
  AT_PRIORITY = 'Ptiority',
  AT_OBJ = 'ObjData',
  //   Атрибуты
  //   Основные ветви метаданных
  T_WRK = 'WRK',
  T_RAM = 'RAM',
  T_EEPROM = 'EEP',
  T_GLU = 'GLU',
  T_MTR = 'Метрология',
  AT_FILE_NAME = 'FILE_NAME',
  AT_FILE_CLC = 'FILE_NAME_CLC',
  //  свойства прибора
  AT_ADDR = 'ADDR',
  AT_CHIP = 'CHIP_INDEX',
  AT_INFO = 'INFO',
  AT_PSK_BYTE_ADDR = 'PSK_BYTE_ADDR',
  AT_SERIAL = 'SERIAL_NO',
  AT_SPEED = 'COMUNICATION_PROPERTY',   // BIT15:USB  BIT14:SSD BIT7:125Kbt BIT6:500Kbt
  AT_TIMEATT = 'TIME_ATT',
  AT_METROLOG = 'Metrolog',
  AT_DEVNAME = 'DevName',
  AT_DELAYDV = 'DELAY_DEVIDER',
  AT_WORKTIME = 'WORK_TIME_ENABLE',
  AT_DEV_ID = 'DEV_ID', // для проекта

  //  ветви метаданных
  AT_SIZE = 'SIZE',
  // добавка по глубине
  AT_ZND = 'ZND',
  //  дополнительные свойства (для метрологии, форматирования) модуля, данных
  AT_METR = 'METR',
  ME_ANGLE = 'ANGLE', // метрология угол
  // ME_MEDIAN = 'MEDIAN', // метрология медианна
  // если массив данных
  AT_ARRAY = 'ARRAY_SIZE', // число елементов не байт!!!

  // ветвь данные
  // общие атрибуты
  // пока нет AT_ZND AT_METR
  //  Ветви
  T_CLC = 'CLC', //  Ветвь рассчетные данные
  T_DEV = 'DEV', // Ветвь данных с устройства

  // атрибуты
  AT_INDEX = 'INDEX', // для DEV указатель в массиве сырых данных с устройства
  // данные по типу
  AT_TIP = 'TYPE',
  // данные извлеченные по AT_INDEX или рассчитанные или указатель на массив
  AT_VALUE = 'VALUE',
  // данные с форматированием TRR необязательные атрибуты
  //  AT_FMT   = 'VIEW_FMT', // точность после запятой
  AT_EU = 'EU',  // единицы
  AT_TITLE = 'TITLE', // единицы
  AT_RLO = 'RANGE_LO', // диапазон
  AT_RHI = 'RANGE_HI', // диапазон
  AT_DIGITS = 'DIGITS', // длинна
  AT_AQURICY = 'AQURICY', // тoчность
  AT_COLOR = 'COLOR', //
  AT_WIDTH = 'WIDTH', //
  AT_DASH = 'DASH', //
  // фильтры для ветвей T_WRK T_RAM таблиц БД по времени кадрам
  //  AT_DB_SELECT = 'DB_SELECT',

  // чтение памяти
  AT_RAMSIZE = 'RAM_SIZE',
  AT_SSD = 'SSD_SIZE',
  // PSK чтение памяти
  AT_RAMLP = 'RAM_LO_SPEED_PROTOCOL',
  AT_RAMHP = 'RAM_HI_SPEED_PROTOCOL',
  // PSK  протоколы
  AT_SP_HI = 'SP_HI_BYTE',
  AT_WRKP = 'FLOW_PROTOCOL',
  AT_FLOWINTERVAL = 'FLOW_TIMER_INTERVAL',

  // Атрибуты считанной памяти
  AT_START_TIME = 'START_TIME',
  AT_DELAY_TIME = 'DELAY_TIME',
  AT_KOEF_TIME = 'KOEF_TIME',
  AT_FROM_TIME = 'FROM_TIME',
  AT_TO_TIME = 'TO_TIME',
  AT_FROM_ADR = 'FROM_ADR',
  AT_TO_ADR = 'TO_ADR',
  AT_FROM_KADR = 'FROM_KADR',
  AT_TO_KADR = 'TO_KADR',
}

export const ROOTPATH = [
  EStdAttr.T_WRK,
  EStdAttr.T_RAM,
  EStdAttr.T_EEPROM,
  EStdAttr.T_GLU,
  EStdAttr.T_MTR,
];
