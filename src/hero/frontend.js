const { render } = wp.element;

//import { Hero } from "@asu/components-core/dist/libCore.es";
import { Hero } from "../../resources/unity/components-core/src/components/Hero"
// Load first element with the unityblocks-hero id
const hero = document.querySelector("#unityblocks-hero");

const type = hero.dataset.herotype;
const image = JSON.parse(hero.dataset.image);
const subTitle = JSON.parse(hero.dataset.subtitle);
const title = JSON.parse(hero.dataset.title);
const contents = JSON.parse(hero.dataset.contents);
const contentsColor = hero.dataset.contentscolor;

render(
  <Hero
    type={type}
    image={image}
    subTitle={subTitle}
    title={title}
    contents={contents}
    contentsColor={contentsColor}
  />,
  hero
);
