const dragDropPage = require('../../pageObjects/appApiDemos/dragAndDrop.page');

describe('Drag and drop action', () => {
    it('Perform drag and drop', async () => {
    await dragDropPage.viewsBtn.click();

    await dragDropPage.dragDropBtn.click();
    
    const source = await dragDropPage.dot1;
    const target = await dragDropPage.dot2;

    await source.touchAction('longPress') + source.dragAndDrop(target);

    driver.pause(3000);
    
    const dropMessage = await dragDropPage.dropTxt.getText();

    await expect(dropMessage).toEqual('Dropped!');
    });
});