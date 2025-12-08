// @ts-check
import { format, formatISO, parseISO } from "date-fns";
import { shortenText } from "../utils/shorten-text";
// Transformer data function provided to the high order component
const parser = new DOMParser()
let dateText = ''
let trimmedDate = ''
let trimmedDateIso = ''
let trimmedDateAttr = ''
const transformData = ({ node }, index) => (
  dateText = parser.parseFromString(node.post_date, "text/html"),
  trimmedDate = dateText.body.firstChild.textContent.split('-')[0],
  trimmedDate = new Date(trimmedDate).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
  trimmedDateAttr =dateText.body.firstChild.getAttribute('datetime'),
  trimmedDateIso = new Date(trimmedDateAttr).toISOString(),
  {
  index,
  id: node.nid,
  headerImageUrl: node.image_url,
  headerImageAltText: node.title,
  title: shortenText(node.title, 80),
  excerpt: shortenText(node?.clas_teaser, 140),
  date: trimmedDate,
  dateIso:formatISO(parseISO(trimmedDateIso), {
    format: "basic",
    representation: "date",
  }),
  storyLink: node.path,
  interests: node.interests,
  newsUnits: node.news_units,
  eventTypes: node.event_types,
  author: {
    name: node["contributor-contact-information-name"],
    title: node["contributor-contact-information-title"],
    // affiliation: node[ 'contributor-contact-information-affiliation' ],
    email: node["contributor-contact-information-e-mail"],
    phone: node["contributor-contact-information-phone_number"],
  },
});

export { transformData };
