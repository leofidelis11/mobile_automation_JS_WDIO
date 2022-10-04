const formPage = require("../../pageObjects/appGeneralStore/form.page");

describe('Test case 2', () => {
    it('Add product to cart', async () => {
    await formPage.shortLogin();

    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Jordan 6 Rings")');

    await $$('//android.widget.TextView[@resource-id="com.androidsample.generalstore:id/productAddCart"]')[1].click();

    await $('//android.widget.ImageButton[@resource-id="com.androidsample.generalstore:id/appbar_btn_cart"]').click();

    driver.pause(1000);

    await expect($('//android.widget.TextView[@text="Jordan 6 Rings"]')).toBeDisplayed();

    await $('android.widget.CheckBox').click();

    await $('//android.widget.TextView[@resource-id="com.androidsample.generalstore:id/termsButton"]').touchAction('longPress');

    await expect($('//android.widget.TextView[@resource-id="com.androidsample.generalstore:id/alertTitle"]')).toHaveText("Terms Of Conditions");
    });
});