class formPage {

    async longLogin(country, name, gender) {
    await $('//android.widget.TextView[@resource-id="android:id/text1"]').click();

    await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${country}")`).click();

    await $('//android.widget.EditText[@resource-id="com.androidsample.generalstore:id/nameField"]').addValue(name);
    
    if (gender == "Female") {
        await $('//android.widget.RadioButton[@resource-id="com.androidsample.generalstore:id/radioFemale"]').click();
    }

    await $('//android.widget.Button[@resource-id="com.androidsample.generalstore:id/btnLetsShop"]').click();
    
    await expect($('//android.widget.TextView[@resource-id="com.androidsample.generalstore:id/toolbar_title"]')).toBeExisting();
    }

    async shortLogin() {
    await $('//android.widget.EditText[@resource-id="com.androidsample.generalstore:id/nameField"]').addValue("Mickey Mouse");

    await $('//android.widget.Button[@resource-id="com.androidsample.generalstore:id/btnLetsShop"]').click();

    await expect($('//android.widget.TextView[@resource-id="com.androidsample.generalstore:id/toolbar_title"]')).toBeExisting();
    }

    async blankLogin(country, gender) {
    await $('//android.widget.TextView[@resource-id="android:id/text1"]').click();

    await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${country}")`).click();

    if (gender == "Female") {
        await $('//android.widget.RadioButton[@resource-id="com.androidsample.generalstore:id/radioFemale"]').click();
    }

    await $('//android.widget.Button[@resource-id="com.androidsample.generalstore:id/btnLetsShop"]').click();

    await expect($('//android.widget.Toast[@text="Please enter your name"]')).toBeExisting();    
    }
}

module.exports = new formPage();