const dragDropPage = require('./dragAndDrop.page')

class swipePage{
    get viewsBtn(){
        return dragDropPage.viewsBtn;
    }

    get galleryBtn(){
        return $('~Gallery');
    }

    get photosBtn(){
        return $('~1. Photos');
    }

    get firstImage(){
        return $('//android.widget.ImageView[1]');
    }

    get swipeToEnd(){
        $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollToEnd(1,5)');
    }

}

module.exports = new swipePage;