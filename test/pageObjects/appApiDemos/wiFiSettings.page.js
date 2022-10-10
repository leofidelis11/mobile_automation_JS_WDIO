class wiFiPage {
    get preferenceBtn(){
        return $('~Preference');
    }

    get preferenceDependenciesBtn(){
        return $('~3. Preference dependencies');
    }

    get checkBox(){
        return $('//android.widget.CheckBox[@resource-id="android:id/checkbox"]');
    }

    get wiFiSettings(){
        return $('//android.widget.TextView[@text="WiFi settings"]');
    }

    get alertTxt(){
        return $('//android.widget.TextView[@resource-id="android:id/alertTitle"]');
    }

    get wiFiName(){
        return $('//android.widget.EditText[@resource-id="android:id/edit"]');
    }

    get okBtn(){
        return $('//android.widget.Button[@text="OK"]');
    }
}

module.exports = new wiFiPage;