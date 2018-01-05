import { BikkrWebPage } from './app.po';

describe('bikkr-web App', () => {
  let page: BikkrWebPage;

  beforeEach(() => {
    page = new BikkrWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
