const wiFiPage = require('../../pageObjects/appApiDemos/wiFiSettings.page');

describe('Wi-Fi settings', () => {

    it('Edit Wi-Fi', async () => {
        await wiFiPage.preferenceBtn.click();

        await wiFiPage.preferenceDependenciesBtn.click();

        await wiFiPage.checkBox.click();

        await wiFiPage.wiFiSettings.click();

        await expect(wiFiPage.alertTxt).toHaveText('WiFi settings');

        await wiFiPage.wiFiName.addValue('Valtech it the best');

        await wiFiPage.okBtn.click();

        await expect(wiFiPage.checkBox).toBeEnabled();

    });
    
});