const DeleteNotePage = require("../../pageObjects/appColorNote/deleteNote.page");


describe('Delete note activities', () => {

    it('Delete a note, check the empty dashboard and the trash can', async () => {
        await DeleteNotePage.skipTutorial();

        await DeleteNotePage.addNoteAndSave("Top movies 2022", "Top Gun\nJurassic World\nDoctor Strange");

        await driver.back();

        const note = await DeleteNotePage.firstNote.getText();

        await DeleteNotePage.firstNote.click();

        await DeleteNotePage.moreBtn.click();

        await DeleteNotePage.deleteBtn.click();

        await DeleteNotePage.okBtn.click();

        await expect(DeleteNotePage.firstNote).not.toBeExisting();

        await DeleteNotePage.navBtn.click();

        await DeleteNotePage.trashBtn.click();

        const trashItem = await DeleteNotePage.firstNote.getText();

        await expect(trashItem).toEqual(note);

    });
});