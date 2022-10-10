const dragDropPage = require('./dragAndDrop.page')

class scrollPage{
    get viewsBtn(){
        return dragDropPage.viewsBtn;
    }

    get scrollIntoView(){
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("WebView2")');
    }

    get textBox(){
        return $('//android.widget.EditText[@resource-id="i_am_a_textbox"]');
    }
}

module.exports = new scrollPage;