class cartPage {

    get productPrice() {
        return $$('//android.widget.TextView[@resource-id="com.androidsample.generalstore:id/productPrice"]');
      
    }

}

module.exports = new cartPage();
