const productsPage = require("../../pageObjects/appGeneralStore/tc2.page");

describe('Test case 2', () => {
    it('Add "Jordan 6 Rings" to cart', async () => {
    await productsPage.shortLogin();

    await productsPage.addJordan6RingsToCart();

    await productsPage.sendMeEmails();

    await productsPage.termsOfConditions();
    });
});