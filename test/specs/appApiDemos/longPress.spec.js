const longPressPage = require('../../pageObjects/appApiDemos/longPress.page');

describe('Long press action', () => {
    it('Perform long press action', async () => {
        await longPressPage.viewsBtn.click();

        await longPressPage.expandableListsBtn.click();

        await longPressPage.customAdapterBtn.click();
        
        await longPressPage.peopleNameBtn.touchAction('longPress');

        await expect(longPressPage.sampleMenu).toHaveText("Sample menu");

    });
    
});