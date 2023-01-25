import addNoteScreen from "../../screenobjects/android/android/add-note.screen.js";
describe('Add Notes', () => {
  it('Skip tutorial', async () => {
    await addNoteScreen.skipBtn.click();

    await expect(addNoteScreen.addNoteTxt).toBeDisplayed();
  });

  it('add a note, save changes & verify note', async () => {
    await addNoteScreen.addNoteTxt.click();
    await addNoteScreen.textOption.click();
    await expect(addNoteScreen.textEditing).toBeDisplayed();

    // add note title
    await addNoteScreen.noteHeading.addValue("Courses in training");

    // add note body
    await addNoteScreen.noteBody.addValue("Healthcare basics\nJS\nTS\nWDIO web\nWDIO appium");

    // save the changes
    await addNoteScreen.saveNote();

    // assertion
    await expect(addNoteScreen.editBtn).toBeDisplayed();
    await expect(addNoteScreen.viewNote).toHaveText("Healthcare basics\nJS\nTS\nWDIO web\nWDIO appium");
  });
});