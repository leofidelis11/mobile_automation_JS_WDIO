class formPage {

    get countryBtn(){
        return $('//android.widget.TextView[@resource-id="android:id/text1"]');
    }

    get setName(){
        return $('//android.widget.EditText[@resource-id="com.androidsample.generalstore:id/nameField"]');
    }

    get FemaleGender(){
        return $('//android.widget.RadioButton[@resource-id="com.androidsample.generalstore:id/radioFemale"]');
    }

    get shopBtn(){
        return $('//android.widget.Button[@resource-id="com.androidsample.generalstore:id/btnLetsShop"]');
    }

    get productsBatTitle() {
        return $('//android.widget.TextView[@resource-id="com.androidsample.generalstore:id/toolbar_title"]');
    }

    get toastMessage(){
        return $('//android.widget.Toast[@text="Please enter your name"]');
    }

    async longLogin(country, name, gender) {
    await this.countryBtn.click();

    await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${country}")`).click();

    await this.setName.addValue(name);
    
    if (gender == "Female") {
        await this.FemaleGender.click();
    }

    await this.shopBtn.click();
    
    await expect(this.productsBatTitle).toBeExisting();
    }

    async shortLogin() {
    await this.setName.addValue("Mickey Mouse");

    await this.shopBtn.click();

    await expect(this.productsBatTitle).toBeExisting();
    }

    async blankLogin(country, gender) {
    await this.countryBtn.click();

    await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${country}")`).click();

    if (gender == "Female") {
        await this.FemaleGender.click();
    }

    await this.shopBtn.click();

    await expect(this.toastMessage).toBeExisting();    
    }
}

module.exports = new formPage();