describe('Alert message demonstration', () => {
    it('Perform steps to get an alert message', async () => {
        await $('~App').click();

        await $('~Alert Dialogs').click();

        await $('~List dialog').click();

        await $("//android.widget.TextView[@text='Command two']").click();

        const alertText = await $('//android.widget.TextView[@resource-id="android:id/message"]').getText();

        await expect(alertText).toEqual("You selected: 1 , Command two");

    });
});