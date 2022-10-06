const formPage = require("../../pageObjects/appGeneralStore/form.page");

describe('Test case 4 - hybrid feature', () => {
    it('Add product to cart and go to browser', async function ()  {
        this.retries(2)

    await formPage.shortLogin();

    await $$('//android.widget.TextView[@resource-id="com.androidsample.generalstore:id/productAddCart"]')[0].click();
    
    await $('//android.widget.ImageButton[@resource-id="com.androidsample.generalstore:id/appbar_btn_cart"]').click();

    driver.pause(1000)

    await $('//android.widget.Button[@resource-id="com.androidsample.generalstore:id/btnProceed"]').click();

    driver.pause(5000)

    let contexts = driver.getContexts();
    driver.switchContext(contexts[1]);

    await $('android.widget.EditText').click();

    await $('android.widget.EditText').addValue("Valtech"+"\n");

    driver.keys('Enter');
    
    driver.pause(3000)

    driver.back();

    driver.switchContext('NATIVE_APP');

    driver.pause(5000)


    });
});