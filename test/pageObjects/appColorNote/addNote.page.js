class AddNotePage {
    get skipBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }

    get addNoteTxt() {
        return $('//*[@text="Add note"]');
    }

    get addNoteBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/empty_text"]');
    }

    get textBtn() {
        return $('//*[@text="Text"]')
    }

    get txtEditing() {
        return $('//*[@text="Editing"]');
    }

    get addTitle(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get writeTxt(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    get editBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }

    get noteView(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }

    async saveNote() {
        await driver.back();
        await driver.back();
    }
}



module.exports = new AddNotePage();