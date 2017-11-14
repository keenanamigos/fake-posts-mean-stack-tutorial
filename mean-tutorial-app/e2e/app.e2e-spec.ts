import { MeanTutorialAppPage } from './app.po';

describe('mean-tutorial-app App', function() {
  let page: MeanTutorialAppPage;

  beforeEach(() => {
    page = new MeanTutorialAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
