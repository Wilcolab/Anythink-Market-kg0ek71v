/**
 * Converts a string to kebab-case.
 *
 * Handles the following cases:
 * - Detects word boundaries in camelCase, PascalCase, snake_case, and space-separated strings.
 * - Converts all letters to lowercase.
 * - Separates individual words with a single hyphen.
 * - Removes non-word characters except hyphens.
 * - Returns a descriptive error message for non-string or empty inputs.
 *
 * @example
 * toKebabCase('hello world');    // 'hello-world'
 * toKebabCase('HeLloWorld');     // 'hello-world'
 * toKebabCase('HELLOWORLD');     // 'helloworld'
 * toKebabCase('hello_world');    // 'hello-world'
 * toKebabCase('');               // 'Input must be a non-empty string.'
 *
 * @param {any} input - The input value to convert to kebab-case.
 * @returns {string} The kebab-case version of the input string, or an error message for invalid input.
 */
function toKebabCase(input) {
  if (typeof input !== 'string' || !input.trim()) {
    return 'Input must be a non-empty string.';
  }
  return input
    .replace(/([a-z])([A-Z])/g, '$1-$2')      // camelCase or PascalCase to kebab-case
    .replace(/[\s_]+/g, '-')                  // spaces and underscores to hyphens
    .replace(/[^\w-]/g, '')                   // remove non-word characters except hyphen
    .replace(/-+/g, '-')                      // collapse multiple hyphens
    .replace(/^-|-$/g, '')                    // trim leading/trailing hyphens
    .toLowerCase();
}

module.exports = toKebabCase;