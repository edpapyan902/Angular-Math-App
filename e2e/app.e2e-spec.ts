import { AngularMathApp } from './app.po';

describe('angular-calc App', () => {
  let page: AngularMathApp;

  beforeEach(() => {
    page = new AngularMathApp();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
