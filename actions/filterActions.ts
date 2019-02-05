export const SET_PRINTERS_PRICE_FILTER = 'SET_PRINTERS_PRICE_FILTER';
export const SET_PRINTERS_BRAND_FILTER = 'SET_PRINTERS_BRAND_FILTER';
export const SET_PENS_PRICE_FILTER = 'SET_PENS_PRICE_FILTER';
export const SET_SCANNERS_PRICE_FILTER = 'SET_SCANNERS_PRICE_FILTER';
export const SET_CONSUMABLES_PRICE_FILTER = 'SET_CONSUMABLES_PRICE_FILTER';
export const SET_PRINTERS_BRAND_OPEN = 'SET_PRINTERS_BRAND_OPEN';

export const setPrintersPriceFilter = (data) => {
  return { type: SET_PRINTERS_PRICE_FILTER, data }
}

export const setPrintersBrandFilter = (data) => {
  return { type: SET_PRINTERS_BRAND_FILTER, data }
}

export const setPensPriceFilter = (data) => {
  return { type: SET_PENS_PRICE_FILTER, data }
}

export const setScannersPriceFilter = (data) => {
  return { type: SET_SCANNERS_PRICE_FILTER, data }
}

export const setConsumablesPriceFilter = (data) => {
  return { type: SET_CONSUMABLES_PRICE_FILTER, data }
}

export const setPrintersBrandFilterOpen = () => {
  return { type: SET_PRINTERS_BRAND_OPEN }
}
