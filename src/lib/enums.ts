/**
 * Статус загрузки данных.
 */
export enum EState {
  IDLE = 'IDLE',
  FETCHING = 'FETCHING',
  SUCCESS = 'SUCCESS',
  FAIL = 'FAIL',
};


export enum EProductType {
  PRINTER = 1,
  SCANER = 2,
  PEN = 3,
  CONSUMABLE = 4,
}
