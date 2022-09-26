const AddNotePage = require("../../pageObjects/appColorNote/addNote.page");

describe('Add note activities', () => {
    it('Skip tutorial', async () => {
        await AddNotePage.skipBtn.click();

        await expect(AddNotePage.addNoteTxt).toBeDisplayed();

    });    

    it('Add a note, save changes and verify', async () => {
        await AddNotePage.addNoteBtn.click();
        await AddNotePage.textBtn.click();;
        await expect(AddNotePage.txtEditing).toBeDisplayed();

        await AddNotePage.addTitle.addValue("The top series in the world");

        await AddNotePage.writeTxt.addValue("Breaking Bad\nPlanet Earth\nBlue Planet\nThe Sopranos\nThe Wire");

        await AddNotePage.saveNote();

        await expect(AddNotePage.editBtn).toBeDisplayed();
        await expect(AddNotePage.noteView).toHaveText("Breaking Bad\nPlanet Earth\nBlue Planet\nThe Sopranos\nThe Wire");
    });
});