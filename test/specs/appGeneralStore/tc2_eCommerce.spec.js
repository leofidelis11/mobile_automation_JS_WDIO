describe('Test case 2', () => {
    it('Add product to cart', async () => {
    await $('//*[@resource-id="com.androidsample.generalstore:id/nameField"]').addValue("Mickey Mouse");

    await $('//android.widget.Button[@resource-id="com.androidsample.generalstore:id/btnLetsShop"]').click();

    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Jordan 6 Rings")');

    await $$('//android.widget.TextView[@resource-id="com.androidsample.generalstore:id/productAddCart"]')[1].click();

    await $('//android.widget.ImageButton[@resource-id="com.androidsample.generalstore:id/appbar_btn_cart"]').click();

    await expect($('//android.widget.TextView[@text="Jordan 6 Rings"]')).toBeDisplayed();
    });
});