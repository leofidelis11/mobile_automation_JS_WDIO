const formPage = require("../../pageObjects/appGeneralStore/form.page");

describe('Test case 3', () => {
    it('Add two products and verify amount', async function () {
        this.retries(2)

    await formPage.shortLogin();
        
    await $$('//android.widget.TextView[@resource-id="com.androidsample.generalstore:id/productAddCart"]')[0].click();

    await $$('//android.widget.TextView[@resource-id="com.androidsample.generalstore:id/productAddCart"]')[1].click();

    await $('//android.widget.ImageButton[@resource-id="com.androidsample.generalstore:id/appbar_btn_cart"]').click();

    driver.pause(1500)

    const price0 = await $$('//android.widget.TextView[@resource-id="com.androidsample.generalstore:id/productPrice"]')[0].getText();

    const price1 = await $$('//android.widget.TextView[@resource-id="com.androidsample.generalstore:id/productPrice"]')[1].getText();
    
    const value0 = parseFloat(price0.replace(/[^0-9.-]+/g,""));
    console.log(value0)

    const value1 = parseFloat(price1.replace(/[^0-9.-]+/g,""));
    console.log(value1)

    const totalPrice = value0 + value1;  
    console.log(totalPrice)

    const totalAmount = await $('//android.widget.TextView[@resource-id="com.androidsample.generalstore:id/totalAmountLbl"]').getText();
    
    const amountValue = parseFloat(totalAmount.replace(/[^0-9.-]+/g,""));
    console.log(amountValue)

    await expect(totalPrice).toEqual(amountValue);

    driver.pause(2000)

    });
});