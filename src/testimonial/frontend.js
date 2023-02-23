const { render } = wp.element;

import { Testimonial } from "@asu/components-core/dist/libCore.es";

// It is possible to load multiple testimonials onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the Testimonial block
const testimonials = document.querySelectorAll(
  ".wp-block-unityblocks-testimonial"
);

testimonials.forEach((testimonial) => {
  const quote = JSON.parse(testimonial.dataset.quote);
  const itemStyle = JSON.parse(testimonial.dataset.itemstyle);
  const imageSource = testimonial.dataset.imagesource;
  const imageAltText = testimonial.dataset.imagealttext;

  render(
    <Testimonial
      quote={quote}
      itemStyle={itemStyle}
      imageSource={imageSource}
      imageAltText={imageAltText}
    />,
    testimonial
  );
});
