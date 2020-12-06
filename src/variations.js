/** @param {string} name */
export function getNumberOfChars(name) {
  return name.length;
}

/** @param {string} name */
export function getFirstChar(name) {
  return name[0];
}

/** @param {string} name */
export function getLastChar(name) {
  return name[name.length - 1];
}

/** @param {string} name */
export function getLower(name) {
  return name.toLowerCase();
}

/** @param {string} name */
export function getUpper(name) {
  return name.toUpperCase();
}

/** @param {string} name */
export function getCapitalized(name) {
  return name[0].toUpperCase() + name.substring(1).toLowerCase();
}

/** @param {string} name */
export function getClean(name) {
  return name.trim();
}
