const formPage = require("../../pageObjects/appGeneralStore/tc1.page");
const productsPage = require("../../pageObjects/appGeneralStore/tc2.page");

describe('Test case 2', () => {
    it('Add "Jordan 6 Rings" to cart', async () => {
    await formPage.shortLogin();

    await productsPage.addJordan6RingsToCart();

    await productsPage.sendMeEmails();

    await productsPage.termsOfConditions();
    });
});