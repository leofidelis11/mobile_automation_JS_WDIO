describe('Test case 1', () => {
    it('Fill form and login', async () => {
    await $('//android.widget.EditText[@resource-id="com.androidsample.generalstore:id/nameField"]').addValue("Mickey Mouse");

    await $('//android.widget.TextView[@resource-id="android:id/text1"]').click();

    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Australia")').click();

    await $('//android.widget.Button[@resource-id="com.androidsample.generalstore:id/btnLetsShop"]').click();

    await expect($('//android.widget.TextView[@resource-id="com.androidsample.generalstore:id/toolbar_title"]')).toBeExisting();
    
    });

    it.only('Fill form without a name and get a toast message', async () => {
    await $('//android.widget.TextView[@resource-id="android:id/text1"]').click();

    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Australia")').click();

    await $('//android.widget.Button[@resource-id="com.androidsample.generalstore:id/btnLetsShop"]').click();

    await expect($('//android.widget.Toast[@text="Please enter your name"]')).toBeExisting();    
    });
});