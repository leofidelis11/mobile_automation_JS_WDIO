class dragDropPage {
    get viewsBtn(){
        return $('~Views');
    }

    get dragDropBtn(){
        return $('~Drag and Drop');
    }

    get dot1(){
        return $('//android.view.View[@resource-id="io.appium.android.apis:id/drag_dot_1"]');
    }

    get dot2(){
        return $('//android.view.View[@resource-id="io.appium.android.apis:id/drag_dot_2"]');
    }

    get dropTxt(){
        return $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/drag_result_text"]');
    }

}

module.exports = new dragDropPage;