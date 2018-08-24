describe("App is functional", () => {
  beforeEach(async () => {
    await device.reloadReactNative(); // reload the app before running each of the tests
  });

  it("should show loader", async () => {
    await expect(element(by.id("loader"))).toExist(); // we're using toExist() instead of isVisible() because the ActivityIndicator component becomes invisible when a testID prop is passed in
  });

  it("should load cards", async () => {
    // assumes that if one card exists, then all the other cards also exists
    await expect(element(by.id("card-Blaziken"))).toExist();
  });

  it("card changes state when it is clicked", async () => {
    await element(by.id("card-Entei")).tap(); // not favorited by default
    await expect(element(by.id("card-Entei-heart"))).toExist(); // should be marked as favorite
    await element(by.id("card-Entei")).tap(); // clicking for a second time un-favorites it
    await expect(element(by.id("card-Entei-heart-o"))).toExist(); // should not be marked as favorite
  });

  it("card state is kept in local storage", async () => {
    await element(by.id("card-Entei")).tap(); // not favorited by default
    await device.reloadReactNative(); // has the same effect of re-launching the app
    await expect(element(by.id("card-Entei-heart"))).toExist(); // should still be favorited after app is reloaded
  });
});
