const productsPage = require('./tc2.page');

class cartPage {
   get productOne(){
      return $$('//android.widget.TextView[@resource-id="com.androidsample.generalstore:id/productAddCart"]')[0];
   }

   get productTwo(){
      return $$('//android.widget.TextView[@resource-id="com.androidsample.generalstore:id/productAddCart"]')[1];
   }

   get price1(){
      return $$('//android.widget.TextView[@resource-id="com.androidsample.generalstore:id/productPrice"]')[0];
   }  
   
   get price2(){
      return $$('//android.widget.TextView[@resource-id="com.androidsample.generalstore:id/productPrice"]')[1];
   }

   get totalAmount(){
      return $('//android.widget.TextView[@resource-id="com.androidsample.generalstore:id/totalAmountLbl"]');
   }

 async addItensAndGoToCart() {
    await this.productOne.click();

    await this.productTwo.click();

    await productsPage.goToCart.click();
 }

 async calculateItensPrice() {
    const price0 = await this.price1.getText();

    const price1 = await this.price2.getText();
    
    const value0 = parseFloat(price0.replace(/[^0-9.-]+/g,""));
    console.log(value0)

    const value1 = parseFloat(price1.replace(/[^0-9.-]+/g,""));
    console.log(value1)

    const totalPrice = value0 + value1;  
    console.log(totalPrice)

    const totalAmount = await this.totalAmount.getText();
    
    const amountValue = parseFloat(totalAmount.replace(/[^0-9.-]+/g,""));
    console.log(amountValue)

    await expect(totalPrice).toEqual(amountValue);
 }
}

module.exports = new cartPage();
