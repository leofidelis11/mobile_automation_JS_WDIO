describe('Drag and drop action', () => {
    it('Perform drag and drop', async () => {
    await $('~Views').click();

    await $('~Drag and Drop').click();
    
    const source = await $('//android.view.View[@resource-id="io.appium.android.apis:id/drag_dot_1"]');
    const target = await $('//android.view.View[@resource-id="io.appium.android.apis:id/drag_dot_2"]');

    await source.touchAction('longPress') + source.dragAndDrop(target);

    driver.pause(1500);
    
    const dropMessage = await $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/drag_result_text"]').getText();

    await expect(dropMessage).toEqual('Dropped!');
    });
});