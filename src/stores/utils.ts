const lsGet = (key: string) => window.localStorage.getItem(key);
const lsSet = (key: string, value: string | number | boolean) =>
  window.localStorage.setItem(key, String(value));
const lsClear = () => window.localStorage.clear();

export { lsGet, lsSet, lsClear };
