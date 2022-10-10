const scrollPage = require('../../pageObjects/appApiDemos/scroll.page');

describe('Scroll action', () => {
   it('Perform scroll action', async () => {

    await scrollPage.viewsBtn.click();

    await scrollPage.scrollIntoView.click();

    await expect(scrollPage.textBox).toHaveText("i has no focus");
   }); 
});