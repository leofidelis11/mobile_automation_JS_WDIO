const alertPage = require('../../pageObjects/appApiDemos/alertMessage.page');

describe('Alert message demonstration', () => {
    it('Perform steps to get an alert message', async () => {
        await alertPage.appBtn.click();

        await alertPage.alertDialogsBtn.click();

        await alertPage.listDialogBtn.click();

        await alertPage.commandTwoBtn.click();

        const alertText = await alertPage.alertTxt.getText();

        await expect(alertText).toEqual("You selected: 1 , Command two");

    });
});