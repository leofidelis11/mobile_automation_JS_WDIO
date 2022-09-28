describe('Wi-Fi settings', () => {

    it('Edit Wi-Fi', async () => {
        await $('~Preference').click();

        await $('~3. Preference dependencies').click();

        await $('//android.widget.CheckBox[@resource-id="android:id/checkbox"]').click();

        await $('//android.widget.TextView[@text="WiFi settings"]').click();

        await expect($('//android.widget.TextView[@resource-id="android:id/alertTitle"]')).toHaveText('WiFi settings');

        await $('//android.widget.EditText[@resource-id="android:id/edit"]').addValue('Valtech it the best');

        await $('//android.widget.Button[@text="OK"]').click();

        await expect($('//android.widget.CheckBox[@resource-id="android:id/checkbox"]')).toBeEnabled();

    });
    
});