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
  const usedIds: Set<string> = new Set();

  // Clear all IDs before starting.
  headings.each((index, element) => {
    const $element = $(element);
    const existingId = $element.attr('id');
    if (existingId) {
      usedIds.add(existingId);
    }
    $element.removeAttr('id');
  });

  headings.each((index, element) => {
    const level = parseInt(element.tagName.slice(1), 10);
    const headingName = $(element).text().trim();
    let headingId = headingName.replace(/\s+/g, '-');

    if (usedIds.has(headingId)) {
      // Append a counter to the ID if it already exists
      let counter = 1;
      let uniqueId = `${headingId}-${counter}`;
      while (usedIds.has(uniqueId)) {
        counter++;
        uniqueId = `${headingId}-${counter}`;
      }
      headingId = uniqueId;
    }

    const currentItem: Item = {
      title: headingName || '',
      url: `#${headingId}`,
    };

    $(element).attr('id', headingId);
    usedIds.add(headingId);

    if (level === 1) {
      toc.items?.push(currentItem);
    } else {
      let parentItems = toc.items;
      for (let i = level - 1; i > 1; i--) {
        parentItems = parentItems[parentItems.length - 1]?.items || [];
      }
      parentItems.push(currentItem);
    }
  });

  const html = $.html();
  const result: TableOfContentsHTML = { toc, html };

  return result;
}
