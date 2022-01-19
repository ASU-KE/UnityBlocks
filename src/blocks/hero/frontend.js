// Load first element with the unityblocks-hero id
const hero = document.querySelector( '#unityblocks-hero' );

const type = hero.dataset.herotype;
const image = JSON.parse( hero.dataset.image );
const subTitle = JSON.parse( hero.dataset.subtitle );
const title = JSON.parse( hero.dataset.title );
const contents = JSON.parse( hero.dataset.contents );
const contentsColor = hero.dataset.contentscolor;

// eslint-disable-next-line
AsuWebCore.initHero( {
	targetSelector: '#unityblocks-hero',
	props: {
		type,
		image,
		subTitle,
		title,
		contents,
		contentsColor,
	},
} );
