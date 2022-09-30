describe('Swipe (Horizontal Scrolling) action', () => {
    it('Perform swipe action', async () => {
    await $('~Views').click();
    
    await $('~Gallery').click();

    await $('~1. Photos').click();

    const firstImage = await $('//android.widget.ImageView[1]').getAttribute("focusable");

    await expect(firstImage).toEqual("true");

    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollToEnd(1,5)');

    await $('//android.widget.ImageView[1]').click();

    const secImage = await $('//android.widget.ImageView[1]').getAttribute("focusable");

    await expect(secImage).toEqual("false");
    });
});