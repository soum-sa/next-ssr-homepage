import { WithContext, ItemList, ListItem } from 'schema-dts';
import testimonials from './testimonials.json';
import { UserTestimonial } from './TestimonialCard';

const TESTIMONIALS: UserTestimonial[] = testimonials;

function generateItemListElement(t: UserTestimonial, index: number): ListItem {
  return {
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: t.author,
      },
      name: t.title,
      reviewBody: t.body,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 5,
        bestRating: 5,
      },
    },
  };
}

export const reviewSchema: WithContext<ItemList> = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: TESTIMONIALS.map(generateItemListElement),
};
