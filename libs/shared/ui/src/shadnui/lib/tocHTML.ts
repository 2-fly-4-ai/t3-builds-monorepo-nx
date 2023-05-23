interface Item {
  title: string;
  url: string;
  items?: Item[];
}

interface Items {
  items?: Item[];
}

function getItems(node: Element, current: Items, html: string): Items {
  if (!node) {
    return {};
  }

  if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'A') {
    const anchor = node as HTMLAnchorElement;
    current.url = anchor.getAttribute('data-toc-url') || '';
    current.title = anchor.getAttribute('data-toc-title') || '';
    return current;
  }

  if (node.childNodes.length > 0) {
    current.items = Array.from(node.childNodes)
      .filter((child) => child.nodeType === Node.ELEMENT_NODE)
      .map((child) => getItems(child as Element, {}, html));
    return current;
  }

  return {};
}

export type TableOfContentsHTML = {
  toc: Items;
  html: string;
};

export function getTableOfContentsHTML(
  content: string
): Promise<TableOfContentsHTML> {
  return new Promise((resolve) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const toc: Items = {};

    let currentItems: Item[] = [];
    toc.items = currentItems;

    let headingCount = 1;

    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.slice(1), 10);
      const currentItem: Item = {
        title: heading.textContent?.trim() || '',
        url: `#heading-${headingCount}`,
      };

      heading.id = `heading-${headingCount}`;
      headingCount++;

      if (level === 1) {
        currentItems.push(currentItem);
      } else {
        let parentItems = currentItems;
        for (let i = 2; i < level; i++) {
          const lastItem = parentItems[parentItems.length - 1];
          if (!lastItem.items) {
            lastItem.items = [];
          }
          parentItems = lastItem.items;
        }
        parentItems.push(currentItem);
      }
    });

    const html = doc.documentElement.outerHTML;
    const result: TableOfContentsHTML = { toc, html };

    resolve(result);
  });
}
