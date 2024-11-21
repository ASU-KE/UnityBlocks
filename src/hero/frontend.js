import { createRoot } from 'react-dom/client'
import { Hero } from "../../resources/asu-unity-stack/packages/components-core/src/components/Hero"

const hero = document.getElementById("unityblocks-hero")
const root = createRoot(hero)

const type = hero.dataset.herotype
const image = JSON.parse(hero.dataset.image)
const subTitle = JSON.parse(hero.dataset.subtitle)
const title = JSON.parse(hero.dataset.title)
const contents = JSON.parse(hero.dataset.contents)
const contentsColor = hero.dataset.contentscolor

const props = {
  type: type,
  image: image,
  subTitle: subTitle,
  title: title,
  contents: contents,
  contentsColor: contentsColor
}

root.render(<Hero { ...props}/>)
