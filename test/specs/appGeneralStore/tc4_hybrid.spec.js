const formPage = require("../../pageObjects/appGeneralStore/tc1.page");
const hybridPage = require("../../pageObjects/appGeneralStore/tc4.page");

describe('Test case 4 - hybrid feature', () => {
    it('Add product to cart and go to browser', async () =>  {
    await hybridPage.shortLogin();

    await hybridPage.addProductAndGoToCart();

    await hybridPage.clickCompletePurchaseButton();

    await hybridPage.googleSearch();

    await hybridPage.goBackToApp();
    });
});