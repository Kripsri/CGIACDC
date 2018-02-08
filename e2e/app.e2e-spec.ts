import { GoTPage } from './app.po';

describe('go-t App', function() {
  let page: GoTPage;

  beforeEach(() => {
    page = new GoTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
