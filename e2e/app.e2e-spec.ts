import { UdaciMealsPage } from './app.po';

describe('udaci-meals App', () => {
  let page: UdaciMealsPage;

  beforeEach(() => {
    page = new UdaciMealsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
