<?php
// This file is generated. Do not modify it manually.
return array(
	'anchor-menu' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'unityblocks/anchor-menu',
		'version' => '3.0.0',
		'title' => 'Unity Anchor Menu',
		'category' => 'unityblocks',
		'keywords' => array(
			'unityblocks',
			'menu',
			'navigation'
		),
		'icon' => 'menu',
		'description' => 'Provide sticky menu bar to jump to anchor points on the current page.',
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			)
		),
		'textdomain' => 'unityblocks',
		'viewScript' => array(
			'unityblocks-anchor-menu-view-script'
		),
		'editorScript' => 'file:./index.js',
		'attributes' => array(
			'itemIcons' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'itemTexts' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'itemTargets' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'firstElementId' => array(
				'type' => 'string',
				'default' => ''
			),
			'focusFirstFocusableElement' => array(
				'type' => 'boolean',
				'default' => false
			)
		)
	),
	'asu-events' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'unityblocks/asu-events',
		'version' => '1.2.0',
		'title' => 'ASU Events',
		'category' => 'unityblocks',
		'keywords' => array(
			'unityblocks',
			'events',
			'grid'
		),
		'icon' => 'grid-view',
		'description' => 'Dsiplay a grid layout for ASU Events.',
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			)
		),
		'textdomain' => 'unityblocks',
		'viewScript' => array(
			'file:./frontend.js',
			'unityblocks-asu-events-view-script'
		),
		'editorScript' => 'file:./index.js',
		'attributes' => array(
			'enableHeader' => array(
				'type' => 'boolean',
				'default' => true
			),
			'headerText' => array(
				'type' => 'string',
				'default' => 'Events Grid'
			),
			'headerColor' => array(
				'type' => 'string',
				'enum' => array(
					'white',
					'dark'
				),
				'default' => 'dark'
			),
			'ctaColor' => array(
				'type' => 'string',
				'enum' => array(
					'gold',
					'maroon',
					'gray',
					'dark'
				),
				'default' => 'maroon'
			),
			'ctaText' => array(
				'type' => 'string',
				'default' => 'Click to see more events'
			),
			'ctaUrl' => array(
				'type' => 'string',
				'default' => 'https://asuevents.asu.edu/'
			),
			'dataSourceUrl' => array(
				'type' => 'string',
				'default' => 'https://cors.api.rtd.asu.edu/asuevents.asu.edu/feed-json/'
			),
			'dataSourceFilters' => array(
				'type' => 'string',
				'default' => ''
			),
			'noResultsText' => array(
				'type' => 'string',
				'default' => 'No events found.'
			),
			'maxItems' => array(
				'type' => 'number',
				'default' => 6
			)
		)
	),
	'events-grid' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'unityblocks/events-grid',
		'version' => '1.0.0',
		'title' => 'KE Events Grid (DEPRECATED)',
		'category' => 'unityblocks',
		'keywords' => array(
			'unityblocks',
			'events',
			'grid'
		),
		'icon' => 'grid-view',
		'description' => 'Provide a grid layout for ASU and KE Events.',
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			)
		),
		'textdomain' => 'unityblocks',
		'viewScript' => array(
			'file:./frontend.js',
			'unityblocks-events-grid-view-script'
		),
		'editorScript' => 'file:./index.js',
		'attributes' => array(
			'enableHeader' => array(
				'type' => 'boolean',
				'default' => true
			),
			'headerText' => array(
				'type' => 'string',
				'default' => 'Events Grid'
			),
			'headerColor' => array(
				'type' => 'string',
				'enum' => array(
					'white',
					'dark'
				),
				'default' => 'dark'
			),
			'ctaText' => array(
				'type' => 'string',
				'default' => 'Click to see more events'
			),
			'ctaUrl' => array(
				'type' => 'string',
				'default' => 'https://asuevents.asu.edu/'
			),
			'ctaColor' => array(
				'type' => 'string',
				'enum' => array(
					'gold',
					'maroon',
					'gray',
					'dark'
				),
				'default' => 'maroon'
			),
			'dataSourceType' => array(
				'type' => 'string',
				'enum' => array(
					'asuDrupal',
					'keGraphql'
				),
				'default' => 'keGraphql'
			),
			'dataSourceAsuUrl' => array(
				'type' => 'string',
				'default' => 'https://cors.api.rtd.asu.edu/asuevents.asu.edu/feed-json/'
			),
			'dataSourceKeUrl' => array(
				'type' => 'string',
				'default' => 'https://infonet.api.rtd.asu.edu/graphql/'
			),
			'keEventBasePath' => array(
				'type' => 'string',
				'default' => 'events/view'
			),
			'dataSourceFeed' => array(
				'type' => 'string',
				'default' => 'online'
			),
			'asuFilterUnits' => array(
				'type' => 'string',
				'default' => ''
			),
			'keFilterUnits' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'keSortEvents' => array(
				'type' => 'string',
				'enum' => array(
					'ASC',
					'DESC'
				),
				'default' => 'ASC'
			),
			'keShowPastEvents' => array(
				'type' => 'boolean',
				'default' => false
			),
			'keShowFutureEvents' => array(
				'type' => 'boolean',
				'default' => true
			),
			'noResultsText' => array(
				'type' => 'string',
				'default' => 'No events found.'
			),
			'maxItems' => array(
				'type' => 'number',
				'default' => 6
			)
		)
	),
	'hero' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'unityblocks/hero',
		'version' => '2.1.0',
		'title' => 'Unity Hero',
		'category' => 'unityblocks',
		'keywords' => array(
			'unityblocks',
			'images',
			'layout'
		),
		'icon' => 'cover-image',
		'description' => 'Provide Hero for page headers.',
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			)
		),
		'textdomain' => 'unityblocks',
		'viewScript' => array(
			'file:./frontend.js',
			'unityblocks-hero-view-script'
		),
		'editorScript' => 'file:./index.js',
		'attributes' => array(
			'heroType' => array(
				'type' => 'string',
				'enum' => array(
					'heading-hero',
					'story-hero'
				),
				'default' => 'heading-hero'
			),
			'mediaId' => array(
				'type' => 'number',
				'default' => 0
			),
			'mediaUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'mediaAltText' => array(
				'type' => 'string',
				'default' => ''
			),
			'mediaCssClass' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'mediaSize' => array(
				'type' => 'string',
				'enum' => array(
					'small',
					'medium',
					'large'
				),
				'default' => 'medium'
			),
			'subTitleText' => array(
				'type' => 'string',
				'default' => ''
			),
			'subTitleHighlightColor' => array(
				'type' => 'string',
				'enum' => array(
					'gold',
					'white',
					'black',
					'none'
				),
				'default' => 'white'
			),
			'subTitleMaxWidth' => array(
				'type' => 'string',
				'default' => ''
			),
			'subTitleCssClass' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'titleText' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleHighlightColor' => array(
				'type' => 'string',
				'enum' => array(
					'gold',
					'white',
					'black',
					'none'
				),
				'default' => 'gold'
			),
			'titleMaxWidth' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleCssClass' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'contentsText' => array(
				'type' => 'string',
				'default' => ''
			),
			'contentsMaxWidth' => array(
				'type' => 'string',
				'default' => ''
			),
			'contentsCssClass' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'contentsHighlightColor' => array(
				'type' => 'string',
				'enum' => array(
					'gold',
					'white',
					'black'
				),
				'default' => 'white'
			),
			'contentsColor' => array(
				'type' => 'string',
				'enum' => array(
					'white',
					'black'
				),
				'default' => 'white'
			)
		)
	),
	'image-gallery' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'unityblocks/image-gallery',
		'version' => '1.0.0',
		'title' => 'Unity Image Gallery (UNFINISHED)',
		'category' => 'unityblocks',
		'keywords' => array(
			'unityblocks',
			'images',
			'gallery'
		),
		'icon' => 'cover-image',
		'description' => 'Renders an ASU-branded image gallery.',
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			)
		),
		'textdomain' => 'unityblocks',
		'viewScript' => array(
			'file:./frontend.js',
			'unityblocks-image-gallery-view-script'
		),
		'editorScript' => 'file:./index.js',
		'attributes' => array(
			'images' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'hasContent' => array(
				'type' => 'boolean',
				'default' => true
			),
			'imageAutoSize' => array(
				'type' => 'boolean',
				'default' => true
			),
			'width' => array(
				'type' => 'string',
				'default' => ''
			),
			'maxWidth' => array(
				'type' => 'string',
				'default' => ''
			)
		)
	),
	'news-grid' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'unityblocks/news-grid',
		'version' => '2.3.0',
		'title' => 'Unity News Grid',
		'category' => 'unityblocks',
		'keywords' => array(
			'unityblocks',
			'news',
			'grid'
		),
		'icon' => 'grid-view',
		'description' => 'Provide a grid layout for ASU and KE News.',
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			)
		),
		'textdomain' => 'unityblocks',
		'viewScript' => array(
			'file:./frontend.js',
			'unityblocks-news-grid-view-script'
		),
		'editorScript' => 'file:./index.js',
		'example' => array(
			'attributes' => array(
				'enableHeader' => true,
				'headerText' => 'News Grid',
				'enableAsuDataSource' => true,
				'maxItems' => 6,
				'numberColumns' => '3'
			)
		),
		'attributes' => array(
			'displayType' => array(
				'type' => 'string',
				'enum' => array(
					'grid',
					'list',
					'carousel'
				),
				'default' => 'grid'
			),
			'enableHeader' => array(
				'type' => 'boolean',
				'default' => true
			),
			'headerText' => array(
				'type' => 'string',
				'default' => 'News Grid'
			),
			'headerColor' => array(
				'type' => 'string',
				'enum' => array(
					'dark',
					'white'
				),
				'default' => 'dark'
			),
			'ctaText' => array(
				'type' => 'string',
				'default' => 'Click to see more news'
			),
			'ctaUrl' => array(
				'type' => 'string',
				'default' => 'https://news.asu.edu/'
			),
			'ctaColor' => array(
				'type' => 'string',
				'enum' => array(
					'gold',
					'maroon',
					'gray',
					'dark'
				),
				'default' => 'maroon'
			),
			'cardButtonText' => array(
				'type' => 'string',
				'default' => 'Read'
			),
			'cardButtonColor' => array(
				'type' => 'string',
				'enum' => array(
					'gold',
					'maroon',
					'gray',
					'dark'
				),
				'default' => 'gold'
			),
			'cardButtonSize' => array(
				'type' => 'string',
				'enum' => array(
					'default',
					'small',
					'medium',
					'large'
				),
				'default' => 'default'
			),
			'useCardButton' => array(
				'type' => 'boolean',
				'default' => true
			),
			'cardLinkText' => array(
				'type' => 'string',
				'default' => 'Read'
			),
			'enableStoryDate' => array(
				'type' => 'boolean',
				'default' => true
			),
			'enableStoryAuthor' => array(
				'type' => 'boolean',
				'default' => false
			),
			'enableCardTags' => array(
				'type' => 'boolean',
				'default' => false
			),
			'enableAsuDataSource' => array(
				'type' => 'boolean',
				'default' => true
			),
			'asuDataSourceUrl' => array(
				'type' => 'string',
				'default' => 'https://cors.api.rtd.asu.edu/news.asu.edu:443/feeds-json/'
			),
			'asuDataSourceFeed' => array(
				'type' => 'string',
				'default' => 'biodesign_institute'
			),
			'asuDataSourceFilters' => array(
				'type' => 'string',
				'default' => ''
			),
			'enableKeDataSource' => array(
				'type' => 'boolean',
				'default' => false
			),
			'keDataSourceUrl' => array(
				'type' => 'string',
				'default' => 'https://ke.news.prod.rtd.asu.edu/wp-json/wp/v2/'
			),
			'keStoryBasePath' => array(
				'type' => 'string',
				'default' => 'news/story'
			),
			'keDataSourceUnits' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'keDataSourceInterests' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'keDataSourceLocations' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'keDataSourcePage' => array(
				'type' => 'string',
				'default' => '1'
			),
			'keDataSourcePerPage' => array(
				'type' => 'string',
				'default' => '100'
			),
			'maxItems' => array(
				'type' => 'number',
				'default' => 6
			),
			'numberColumns' => array(
				'type' => 'string',
				'enum' => array(
					'2',
					'3'
				),
				'default' => '3'
			)
		)
	),
	'ranking-card' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'unityblocks/ranking-card',
		'version' => '1.0.0',
		'title' => 'Ranking Card',
		'category' => 'unityblocks',
		'keywords' => array(
			'unityblocks',
			'ranking',
			'card'
		),
		'icon' => 'index-card',
		'description' => 'A UDS default design - ranking card with an interactive show more.',
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			)
		),
		'textdomain' => 'unityblocks',
		'viewScript' => array(
			'file:./frontend.js',
			'unityblocks-ranking-card-view-script'
		),
		'editorScript' => 'file:./index.js',
		'attributes' => array(
			'imageSize' => array(
				'type' => 'string',
				'enum' => array(
					'small',
					'large'
				),
				'default' => 'large'
			),
			'image' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => ''
			),
			'heading' => array(
				'type' => 'string',
				'default' => ''
			),
			'body' => array(
				'type' => 'string',
				'default' => ''
			),
			'readMoreLink' => array(
				'type' => 'string',
				'default' => ''
			),
			'citation' => array(
				'type' => 'string',
				'default' => ''
			)
		)
	),
	'testimonial' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'unityblocks/testimonial',
		'version' => '1.0.0',
		'title' => 'Unity Testimonial',
		'category' => 'unityblocks',
		'keywords' => array(
			'unityblocks',
			'quotes',
			'testimonials'
		),
		'icon' => 'format-quote',
		'description' => 'Provide Testimonial block.',
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			)
		),
		'textdomain' => 'unityblocks',
		'viewScript' => array(
			'file:./frontend.js',
			'unityblocks-testimonial-view-script'
		),
		'editorScript' => 'file:./index.js',
		'attributes' => array(
			'quoteTitle' => array(
				'type' => 'string',
				'default' => ''
			),
			'quoteContent' => array(
				'type' => 'string',
				'default' => ''
			),
			'quoteCiteName' => array(
				'type' => 'string',
				'default' => ''
			),
			'quoteCiteDescription' => array(
				'type' => 'string',
				'default' => ''
			),
			'mediaId' => array(
				'type' => 'number',
				'default' => 0
			),
			'mediaUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'mediaAltText' => array(
				'type' => 'string',
				'default' => ''
			),
			'containerCssClass' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleCssClass' => array(
				'type' => 'string',
				'default' => ''
			),
			'contentCssClass' => array(
				'type' => 'string',
				'default' => ''
			)
		)
	),
	'wchm' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'unityblocks/wchm',
		'version' => '2.1.0',
		'title' => 'WCHM',
		'category' => 'unityblocks',
		'keywords' => array(
			'asu',
			'unityblocks',
			'ho',
			'can',
			'help',
			'me',
			'wchm'
		),
		'icon' => 'database-import',
		'description' => 'Display a contact list for WCHM',
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			)
		),
		'textdomain' => 'unityblocks',
		'viewScript' => array(
			'file:./frontend.js',
			'unityblocks-wchm-view-script'
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'useProdApi' => array(
				'type' => 'boolean',
				'default' => true
			)
		)
	)
);
