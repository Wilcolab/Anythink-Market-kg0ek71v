/**
 * Converts a string to camelCase.
 * Handles spaces, underscores, hyphens, and uppercase words.
 * Returns a descriptive error message for non-string or malformed inputs.
 * @param {any} input
 * @returns {string}
 */
function toCamelCase(input) {
  if (typeof input !== 'string' || !input.trim()) {
    return 'Input must be a non-empty string.';
  }
  return input
    .toLowerCase()
    .replace(/[_\-\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
    .replace(/^[A-Z]/, c => c.toLowerCase());
}

module.exports = toCamelCase;