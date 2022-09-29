describe('Scroll action', () => {
   it('Perform scroll action', async () => {

    await $('~Views').click();

    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("WebView2")').click();

    await expect($('//android.widget.EditText[@resource-id="i_am_a_textbox"]')).toHaveText("i has no focus");
   }); 
});