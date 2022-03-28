// ts-check

/**
 *  @typedef {Object} ComponentType
 *  @property {number} [numItems]
 */

/**
 * @typedef {Object} WpRestDataFilters
 * @property {string} [categories]
 * @property {string} [tags]
 */

/**
 * @typedef {Object} WpDataPagination
 * @property {number} [page]
 * @property {number} [perPage]
 * @property {string} [order]
 * @property {string} [orderBy]
 */

/**
 * @typedef {Object} DrupalDataSource
 * @property {string} [url]
 * @property {string} [filters]
 */

/**
 * @typedef {Object} WpDataSource
 * @property {string} [url]
 * @property {WpRestDataFilters} [filters]
 * @property {WpDataPagination} [pagination]
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 * @ignore
 */
export const JSDOC = 'jsdoc';
