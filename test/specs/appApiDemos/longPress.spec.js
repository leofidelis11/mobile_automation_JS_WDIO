describe('Long press action', () => {
    it('Perform long press action', async () => {
        await $('~Views').click();

        await $('~Expandable Lists').click();

        await $('~1. Custom Adapter').click();
        
        await $('//android.widget.TextView[@text="People Names"]').touchAction('longPress');

        await expect($('//android.widget.TextView[@text="Sample menu"]')).toHaveText("Sample menu");

    });
    
});