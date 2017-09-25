import { FriendsAppPage } from './app.po';

describe('friends-app App', () => {
  let page: FriendsAppPage;

  beforeEach(() => {
    page = new FriendsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
