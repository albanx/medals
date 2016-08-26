import { MedalsPage } from './app.po';

describe('medals App', function() {
  let page: MedalsPage;

  beforeEach(() => {
    page = new MedalsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
