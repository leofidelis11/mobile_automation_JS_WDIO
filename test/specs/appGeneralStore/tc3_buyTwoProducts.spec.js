const cartPage = require("../../pageObjects/appGeneralStore/tc3.page");

describe('Test case 3', () => {
    it('Add two products and verify amount', async () => {
    await cartPage.shortLogin();
        
    await cartPage.addItensAndGoToCart();

    await cartPage.calculateItensPrice();
    });
});