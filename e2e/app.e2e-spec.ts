import { SchoolGradebookPage } from './app.po';

describe('school-gradebook App', () => {
  let page: SchoolGradebookPage;

  beforeEach(() => {
    page = new SchoolGradebookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
