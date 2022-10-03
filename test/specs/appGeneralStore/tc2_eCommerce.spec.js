describe('Test case 2', () => {
    it('Add product to cart', async () => {
    await $('//*[@resource-id="com.androidsample.generalstore:id/nameField"]').addValue("Mickey Mouse");

    await $('//android.widget.TextView[@resource-id="android:id/text1"]').click();

    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Australia")').click();

    await $('//android.widget.Button[@resource-id="com.androidsample.generalstore:id/btnLetsShop"]').click();

    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Jordan 6 Rings")');

    const productName = await $$('//android.widget.TextView[@resource-id="com.androidsample.generalstore:id/productName"]');

    productName.forEach(element => {
        console.log(element.getText()+"***")
        if (element.getText()=="Jordan 6 Rings") {
            $('//*[@resource-id="com.androidsample.generalstore:id/productAddCart"]').click();
        }
    });

    await $('//android.widget.ImageButton[@resource-id="com.androidsample.generalstore:id/appbar_btn_cart"]').click();

    driver.pause(3000);

    await expect($('//android.widget.TextView[@text="Jordan 6 Rings"]')).toBeDisplayed();
    });
});