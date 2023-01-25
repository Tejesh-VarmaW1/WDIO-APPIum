describe('Add Notes', () => {
    it('Skip tutorial', async () => {

      //Getting skip button and clicking it  
      await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
  
      //Assertion whether add note is present or not
      await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });

    it('add a note, save changes & verify note', async () => {
        
        //Clicking on new note
        await $('//*[@text="Add note"]').click();

        //Selecting text option
        await $('//*[@text="Text"]').click();

        //Assertion-whether edit area is available or not
        await expect($('//*[@text="Editing"]')).toBeDisplayed();
    
        // Adding title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
          .addValue("Courses in training");
    
        // Adding course list
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
          .addValue("Healthcare basics\nJS\nTS\nWDIO web\nWDIO appium");
    
        // Saving text by clicking back 2 times
        await driver.back();
        await driver.back();
    
        // Asserting displayed text is expected or not
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'))
          .toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
          .toHaveText("Healthcare basics\nJS\nTS\nWDIO web\nWDIO appium");
      });

})