const swipePage = require('../../pageObjects/appApiDemos/swipe.page');

describe('Swipe (Horizontal Scrolling) action', () => {
    it('Perform swipe action', async () => {
    await swipePage.viewsBtn.click();
    
    await swipePage.galleryBtn.click();

    await swipePage.photosBtn.click();

    const firstImage = await swipePage.firstImage.getAttribute("focusable");

    await expect(firstImage).toEqual("true");

    await swipePage.swipeToEnd;

    await swipePage.firstImage.click();

    const secImage = await swipePage.firstImage.getAttribute("focusable");

    await expect(secImage).toEqual("false");
    });
});