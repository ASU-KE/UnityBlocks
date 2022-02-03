/**
 * WordPress dependencies
 */
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );

/**
 * Internal dependencies
 */
const postcssConfig = require( './postcss.config' );
const { hasBabelConfig } = require( './utils' );

/**
 * External dependencies
 */
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const path = require( 'path' );
const FixStyleOnlyEntriesPlugin = require( 'webpack-fix-style-only-entries' );
const nodeSassGlobImporter = require( 'node-sass-glob-importer' );

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	entry: {
		unityblocks: path.resolve( process.cwd(), 'src/blocks.js' ),

		// Styles
		'unityblocks-editor': path.resolve(
			process.cwd(),
			'src/styles/editor.scss'
		),
		'unityblocks-style': path.resolve(
			process.cwd(),
			'src/styles/style.scss'
		),

		// Front-End Scripts
		'js/unityblocks-anchormenu': path.resolve(
			process.cwd(),
			'src/blocks/anchor-menu/frontend.js'
		),
		'js/unityblocks-degree-detail': path.resolve(
			process.cwd(),
			'src/blocks/degree-detail/frontend.js'
		),
		'js/unityblocks-hero': path.resolve(
			process.cwd(),
			'src/blocks/hero/frontend.js'
		),
		'js/unityblocks-events-grid': path.resolve(
			process.cwd(),
			'src/blocks/events-grid/frontend.js'
		),
		'js/unityblocks-events-list': path.resolve(
			process.cwd(),
			'src/blocks/events-list/frontend.js'
		),
		'js/unityblocks-news-carousel': path.resolve(
			process.cwd(),
			'src/blocks/news-carousel/frontend.js'
		),
		'js/unityblocks-news-grid': path.resolve(
			process.cwd(),
			'src/blocks/news-grid/frontend.js'
		),
		'js/unityblocks-news-list': path.resolve(
			process.cwd(),
			'src/blocks/news-list/frontend.js'
		),
		'js/unityblocks-testimonial': path.resolve(
			process.cwd(),
			'src/blocks/testimonial/frontend.js'
		),
	},

	output: {
		filename: '[name].js',
		path: path.resolve( process.cwd(), 'dist/' ),
		libraryTarget: 'window',
	},

	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
	},

	module: {
		rules: [
			{
				test: /\.svg$/,
				use: [ '@svgr/webpack', 'url-loader' ],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					require.resolve( 'thread-loader' ),
					{
						loader: require.resolve( 'babel-loader' ),
						options: {
							// Babel uses a directory within local node_modules
							// by default. Use the environment variable option
							// to enable more persistent caching.
							cacheDirectory:
								process.env.BABEL_CACHE_DIRECTORY || true,

							// Provide a fallback configuration if there's not
							// one explicitly available in the project.
							...( ! hasBabelConfig() && {
								babelrc: false,
								configFile: false,
								presets: [
									require.resolve(
										'@wordpress/babel-preset-default'
									),
								],
							} ),
						},
					},
				],
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false,
							sourceMap: ! isProduction,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							...postcssConfig,
							sourceMap: ! isProduction,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: ! isProduction,
							sassOptions: {
								importer: nodeSassGlobImporter(),
							},
						},
					},
				],
			},
		],
	},

	stats: {
		children: false,
		modules: false,
		warnings: false,
	},

	plugins: [
		new CleanWebpackPlugin(),
		new DependencyExtractionWebpackPlugin( { injectPolyfill: true } ),
		new MiniCssExtractPlugin( {
			filename: '[name].css',
		} ),
		new FixStyleOnlyEntriesPlugin(),
	],
};
