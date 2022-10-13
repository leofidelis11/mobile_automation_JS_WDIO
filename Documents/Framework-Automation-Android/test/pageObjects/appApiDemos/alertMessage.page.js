class alertPage{

    get appBtn(){
        return $('~App');
    }

    get alertDialogsBtn(){
        return $('~Alert Dialogs');
    }

    get listDialogBtn(){
        return $('~List dialog');
    }
    
    get commandTwoBtn(){
        return $('//android.widget.TextView[@text="Command two"]');
    }

    get alertTxt(){
        return $('//android.widget.TextView[@resource-id="android:id/message"]');
    }

}

module.exports = new alertPage();