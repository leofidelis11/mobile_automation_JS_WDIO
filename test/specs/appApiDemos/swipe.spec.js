describe('Swipe (Horizontal Scrolling) action', () => {
    it('Perform swipe action', async () => {
    await $('~Views').click();
    
    await $('~Gallery').click();

    await $('~1. Photos').click();

    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollToEnd(1,5)');

    await $('//android.widget.ImageView').click();

    const toastMessage = await $('/hierarchy/android.widget.Toast').getText();

    console.log(toastMessage);

    await expect(toastMessage).toEqual('6');


    });
});