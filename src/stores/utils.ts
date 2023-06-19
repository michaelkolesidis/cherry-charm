// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

const lsGet = (key: string) => window.localStorage.getItem(key);
const lsSet = (key: string, value: string | number | boolean) =>
  window.localStorage.setItem(key, String(value));
const lsClear = () => window.localStorage.clear();

export { lsGet, lsSet, lsClear };
