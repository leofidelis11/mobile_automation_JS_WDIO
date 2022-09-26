describe('Elements tests', () => {

    it('Find element by Acessibility Id', async () => { //this is the most common way to write, with good practices

        //find element by acessibility id
        const appOption = await $('~App');

        //click on the element
        await appOption.click();

        //assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    });

    it('Find element by class name', async () => {

        const className = await $('android.widget.TextView');

        console.log(await className.getText());

        await expect(className).toHaveText("API Demos");
    });
    
    xit('Find element by xpath', async () => {     //xpath -> //tagname[@attribute="value"]

        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        await $('//android.widget.TextView[@text="Command two"]').click();

        await expect($('android.widget.TextView')).toHaveText("You selected: 1 , Command two");
    });

    it('Find elements by UiAutomator', async () => {
        
        await $('android=new UiSelector().textContains("Alert")').click();

        await expect($('~OK Cancel dialog with a message')).toBeExisting();
    });

    it('Find multiple elements', async () => {
        const expectedList = [
            'API Demos', "Access'ibility", 'Accessibility', 
            'Animation', 'App','Content', 'Graphics', 'Media',
             'NFC', 'OS', 'Preference', 'Text', 'Views'
        ]
        const actualList = []
        
        const textList = await $$('android.widget.TextView');

        for (const element of textList) {
            actualList.push(await element.getText());
        }

        await expect(actualList).toEqual(expectedList);
    });

    it('Type in a text field', async () => {
        
        await $('~Views').click();

        await $('~Auto Complete').click();

        await $('~1. Screen Top').click();

        const country = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        await country.addValue('Brazil');

        await expect(country).toHaveText('Brazil');
    });
});
