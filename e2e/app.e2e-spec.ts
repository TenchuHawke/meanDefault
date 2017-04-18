import { DefaultPage } from './app.po';

describe('default App', () => {
  let page: DefaultPage;

  beforeEach(() => {
    page = new DefaultPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
