///For these tests, the recomended is to run only one test at a time.
//To do it, just need to add ".only" after each "it" on the code -> "it.only"
///if you want to skip any test, you write an "x" before "it" -> "xit"

describe('Android native features', () => {
    beforeEach(function () {
        driver.startActivity("io.appium.android.apis", ".ApiDemos");

      });
    it('Access an activity directly', async () => {
        await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples");

        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });

    it('Work with alert boxes', async () => {
        await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples");

        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        //get alert text
        console.log('ALERT TEXT --->', await driver.getAlertText());

        //accept alert
        //await driver.acceptAlert();  //you can accept or dismiss an alert, but in both of them the alert will disapear

        //dismis alert
        //await driver.dismissAlert();

        //click OK button
        //await $('//*[@resource-id="android:id/button1"]').click();

        //click CANCEL button
        await $('//*[@resource-id="android:id/button2"]').click();

        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist(); 
    });

    it('Vertical Scrolling', async () => {
        await $('~App').click();

        await $('~Activity').click();

        //scroll to the end (not stable because the element can get moved in an update)
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        //await $('~Secure Surfaces').click();

        //scroll into text view
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        await expect($('~Secure Dialog')).toExist();
    });

    it('Horizontal Scrolling (Swipe)', async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1")

        //Horizontal scrolling to the end
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollToEnd(1,5)');

        //Horizontal scrolling Foward
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        //Horizontal scrolling Backward
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
    });

    it('change dates', async () => {
       await driver.startActivity("io.appium.android.apis", ".view.DateWidgets1");

       const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
       const currentDate = await date.getText();

       await $('~change the date').click();
        
       await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

       await $('//*[@text="10"]').click();

       await $('//*[@resource-id="android:id/button1"]').click();

       await expect(await date.getText()).not.toEqual(currentDate);

    });

    it('Changes to landscape mode', async () => {
        await $('~Preference').click();

        driver.setOrientation("LANDSCAPE");

        driver.pause(3000);
    });

    it('Copy and paste to clipboard', async () => {
        await $('~Preference').click();

        await $('~3. Preference dependencies').click();

        await $('//android.widget.CheckBox[@resource-id="android:id/checkbox"]').click();

        await $('//android.widget.TextView[@text="WiFi settings"]').click();

        driver.setClipboard("Valtech testing");

        await $('//android.widget.EditText[@resource-id="android:id/edit"]').addValue(driver.getClipboard());

        await $('//android.widget.Button[@text="OK"]').click();
    });
});