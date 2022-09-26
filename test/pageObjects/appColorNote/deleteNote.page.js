const AddNotePage = require("./addNote.page");

class DeleteNotePage {

    async skipTutorial() {
        await AddNotePage.skipBtn.click();

        await expect(AddNotePage.addNoteTxt).toBeDisplayed();
    }

    async addNoteAndSave(noteHeading, noteBody){
        await AddNotePage.addNoteBtn.click();
        await AddNotePage.textBtn.click();;
        await expect(AddNotePage.txtEditing).toBeDisplayed();

        await AddNotePage.addTitle.addValue(noteHeading);
        
        await AddNotePage.writeTxt.addValue(noteBody);
        
        await AddNotePage.saveNote();

        await expect(AddNotePage.editBtn).toBeDisplayed();
        await expect(AddNotePage.noteView).toHaveText(noteBody);
    }

    get firstNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get moreBtn(){
        return $('~More');
    }

    get deleteBtn(){
        return $('//*[@text="Delete"]');
    }

    get okBtn(){
        return $('//*[@resource-id="android:id/button1"]');
    }

    get navBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashBtn(){
        return $('//*[@text="Trash Can"]');
    }
}

module.exports = new DeleteNotePage();