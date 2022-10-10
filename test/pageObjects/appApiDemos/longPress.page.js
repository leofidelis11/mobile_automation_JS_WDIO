const dragDropPage = require('./dragAndDrop.page')

class longPressPage {
    get viewsBtn(){
        return dragDropPage.viewsBtn;
    }

    get expandableListsBtn(){
        return $('~Expandable Lists');
    }

    get customAdapterBtn(){
        return $('~1. Custom Adapter');
    }

    get peopleNameBtn(){
        return $('//android.widget.TextView[@text="People Names"]');
    }

    get sampleMenu(){
        return $('//android.widget.TextView[@text="Sample menu"]');
    }
}

module.exports = new longPressPage;