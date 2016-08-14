import { ChatExampleApplicationPage } from './app.po';

describe('chat-example-application App', function() {
  let page: ChatExampleApplicationPage;

  beforeEach(() => {
    page = new ChatExampleApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
