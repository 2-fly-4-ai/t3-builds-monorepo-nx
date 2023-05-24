import cheerio from 'cheerio';

interface Item {
  title: string;
  url: string;
  items?: Item[];
}

interface Items {
  items?: Item[];
}

export type TableOfContentsHTML = {
  toc: Items;
  html: string;
};

export async function getTableOfContentsHTML(
  content: string
): Promise<TableOfContentsHTML> {
  const $ = cheerio.load(content);
  const headings = $('h1, h2, h3, h4, h5, h6');
  const toc: Items = { items: [] };

  let headingCount = 1;

  headings.each((index, element) => {
    const level = parseInt(element.tagName.slice(1), 10);
    const currentItem: Item = {
      title: $(element).text().trim() || '',
      url: `#heading-${headingCount}`,
    };

    $(element).attr('id', `heading-${headingCount}`);
    headingCount++;

    if (level === 1) {
      toc.items?.push(currentItem);
    } else {
      let parentItems = toc.items;
      for (let i = 2; i < level; i++) {
        const lastItem = parentItems?.[parentItems.length - 1];
        if (!lastItem.items) {
          lastItem.items = [];
        }
        parentItems = lastItem.items;
      }
      parentItems?.push(currentItem);
    }
  });

  const html = $.html();
  const result: TableOfContentsHTML = { toc, html };

  return result;
}
