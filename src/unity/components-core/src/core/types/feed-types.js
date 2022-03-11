// ts-check

/**
 *  @typedef {Object} ComponentType
 *  @property {number} [numItems]
 */

/**
 * @typedef {Object} WpDataFilters
 * @property {string} [categories]
 * @property {string} [tags]
 */

/**
 * @typedef {Object} DataPagination
 * @property {number} [page]
 * @property {number} [perPage]
 * @property {string} [order]
 * @property {string} [orderBy]
 */

/**
 * @typedef {Object} DataSource
 * @property {string} [type]
 * @property {string} [url]
 * @property {string|WpDataFilters} [filters]
 * @property {DataPagination} [pagination]
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 * @ignore
 */
export const JSDOC = 'jsdoc';
