// run this test against the following MiniMonkey:
// https://github.com/book-monkey2-build/iteration-3-http

import { BookListPage } from './book-list.po';

describe('Book List Page', () => {
  let listPage: BookListPage;

  beforeEach(() => listPage = new BookListPage());

  it('should display at least two books', () => {/*BS*/
    const bookItems = listPage.navigateTo()
      .getBookItems();/*BE*/
    expect(bookItems.count()).toBeGreaterThan(1);
  });

  it('should navigate to details page by ISBN', () => {/*BS*/
    const detailsPage = listPage.navigateTo()
      .clickOnFirstBook();/*BE*/
    expect(detailsPage.getUrl())
      .toContain('/books/9783864907791');
    expect(detailsPage.getHeaderText()).toBe('Angular');
  });
});
