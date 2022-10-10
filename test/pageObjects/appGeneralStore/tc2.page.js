class productsPage {

    get scrollToProduct(){
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Jordan 6 Rings")');
    }

    get addProductToCart(){
        return $$('//android.widget.TextView[@resource-id="com.androidsample.generalstore:id/productAddCart"]')[1];
    }

    get goToCart(){
        return $('//android.widget.ImageButton[@resource-id="com.androidsample.generalstore:id/appbar_btn_cart"]');
    }

    get cartProduct(){
        return $('//android.widget.TextView[@text="Jordan 6 Rings"]');
    }

    get emailCheckBox(){
        return $('android.widget.CheckBox');
    }

    get termsBtn(){
        return $('//android.widget.TextView[@resource-id="com.androidsample.generalstore:id/termsButton"]');
    }

    get alertTitle(){
        return $('//android.widget.TextView[@resource-id="com.androidsample.generalstore:id/alertTitle"]');
    }

    async addJordan6RingsToCart() {
    await this.scrollToProduct;

    await this.addProductToCart.click();

    await this.goToCart.click();

    driver.pause(1000);

    await expect(this.cartProduct).toBeDisplayed();
    }

    async sendMeEmails() {
    await this.emailCheckBox.click();
    }

    async termsOfConditions() {
    await this.termsBtn.touchAction('longPress') 

    await expect(this.alertTitle).toHaveText("Terms Of Conditions");
    }
}

module.exports = new productsPage();