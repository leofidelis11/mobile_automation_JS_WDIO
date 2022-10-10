const formPage = require("../../pageObjects/appGeneralStore/tc1.page");

describe('Test case 1', () => {
    beforeEach(function () {
        driver.reset();
    });
    it('Perform complete login successfully', async () => {
    await formPage.longLogin("Bangladesh", "Maria", "Female");
    });

    it('Perform short login successfully', async () => {
    await formPage.shortLogin();
    });

    it('Perform login with a blanket name and get a toast message', async () => {
    await formPage.blankLogin("Argentina", "Female")
    });
});