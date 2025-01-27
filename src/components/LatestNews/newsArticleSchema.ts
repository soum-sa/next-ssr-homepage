import { WithContext, ItemList, ListItem } from 'schema-dts';
import latestNews from './latestNews.json';
import { NewsType } from './LatestNews';

const ARTICLES: NewsType[] = latestNews;

function generateItemListElement(t: NewsType, index: number): ListItem {
  return {
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'NewsArticle',
      headline: t.title,
      description: t.briefSummary,
      url: t.fullNewsURL,
    },
  };
}

export const newsArticleSchema: WithContext<ItemList> = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: ARTICLES.map(generateItemListElement),
};
