export const formatDate = (date: string) => {
  return date
    .split('/')
    .map((item: string) => {
      if (item.length === 1) {
        return `0${item}`;
      }
      return item;
    })
    .join('.');
};

export const getPriceInteger = (price: string | number) => {
  const index = String(price).replace(',', '.').indexOf('.');
  return index !== -1
    ? Number(String(price).slice(0, index)).toLocaleString()
    : Number(price).toLocaleString();
};

export const getPriceDecimals = (price: string | number) => {
  const index = String(price).replace(',', '.').indexOf('.');
  const result = index !== -1 ? String(price).slice(index + 1) : '';
  return result.length === 1 ? result + '0' : result;
};
