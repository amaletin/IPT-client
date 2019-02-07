export const SET_PRINTERS_SORTING = 'SET_PRINTERS_SORTING';
export const SET_PENS_SORTING = 'SET_PENS_SORTING';
export const SET_SCANNERS_SORTING = 'SET_SCANNERS_SORTING';
export const SET_CONSUMABLES_SORTING = 'SET_CONSUMABLES_SORTING';

export const setPrintersSorting = () => {
  return { type: SET_PRINTERS_SORTING };
};
export const setPensSorting = () => {
  return { type: SET_PENS_SORTING };
};
export const setScannersSorting = () => {
  return { type: SET_SCANNERS_SORTING };
};
export const setConsumablesSorting = () => {
  return { type: SET_CONSUMABLES_SORTING };
};
