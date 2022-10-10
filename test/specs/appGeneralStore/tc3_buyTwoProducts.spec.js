const formPage = require("../../pageObjects/appGeneralStore/tc1.page");
const cartPage = require("../../pageObjects/appGeneralStore/tc3.page");

describe('Test case 3', () => {
    it('Add two products and verify amount', async () => {
    await formPage.shortLogin();
        
    await cartPage.addItensAndGoToCart();

    await cartPage.calculateItensPrice();
    });
});