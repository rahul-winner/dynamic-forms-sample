import { DynamicFormsSamplePage } from './app.po';

describe('dynamic-forms-sample App', function() {
  let page: DynamicFormsSamplePage;

  beforeEach(() => {
    page = new DynamicFormsSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
