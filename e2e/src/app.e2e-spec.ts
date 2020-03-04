import { BookMonkeyPage } from './app.po';

describe('book-monkey App', () => {
  let page: BookMonkeyPage;

  beforeEach(() => {
    page = new BookMonkeyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toBe('Home');
  });
});
