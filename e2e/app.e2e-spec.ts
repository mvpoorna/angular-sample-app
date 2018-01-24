import { AngularHerosPage } from './app.po';

describe('angular-heros App', function() {
  let page: AngularHerosPage;

  beforeEach(() => {
    page = new AngularHerosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
