const cartPage = require('./tc3.page');
const productsPage = require('./tc2.page');
const formPage = require('./tc1.page');


class hybridPage {
    async shortLogin(){
        return formPage.shortLogin();
    }

    get proceedBtn(){
        return $('//android.widget.Button[@resource-id="com.androidsample.generalstore:id/btnProceed"]');
    }

    get researchBtn(){
        return $('android.widget.EditText');
    }

    async addProductAndGoToCart() {
    await cartPage.productOne.click();
    
    await productsPage.goToCart.click();
    }

    async clickCompletePurchaseButton() {
    await this.proceedBtn.click();

    driver.pause(5000)

    let contexts = driver.getContexts();
    driver.switchContext(contexts[1]);
    }

    async googleSearch() {
    await this.researchBtn.addValue("Valtech"+"\n");

    driver.keys('Enter');

    driver.pause(3000)
    }

    async goBackToApp() {
    driver.back();

    driver.switchContext('NATIVE_APP');

    driver.pause(5000)
    }
}

module.exports = new hybridPage();