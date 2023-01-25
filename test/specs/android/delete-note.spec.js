describe('Android notes app exercise', () => {
    it('Add & Delete the note', async () => {

        //Getting skip button and clicking it  
        await $('//*[@text="SKIP"]').click();
    
        //Assertion whether add note is present or not
        await expect($('//*[@text="Add note"]')).toBeDisplayed();
        
        //Clicking on new note
        await $('//*[@text="Add note"]').click();

        //Selecting text option
        await $('//*[@text="Text"]').click();

        //Assertion-whether edit area is available or not
        await expect($('//*[@text="Editing"]')).toBeDisplayed();
    
        // Adding title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
          .addValue("Exercise");
    
        // Adding course list
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
          .addValue("Hi there\nMyself Tejesh\nI'm going to delete u\nGud bye");
    
        // Saving text by clicking back 2 times
        await driver.back();
        await driver.back();

        //Storing the exercise title into variable
        const exerciseText = await $('//android.widget.EditText[@text="Exercise"]')

        //Asserting whether title is saved or not
        await expect(exerciseText).toBeDisplayed()

        //Deleting the note
        await $('~More').click()
        await (await $('//android.widget.TextView[@text="Delete"]')).click()

        //Accepting the alert/clicking ok to delete
        await driver.acceptAlert()

        //Clicking on hamburger button
        await $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click()

        //Moving to trash can by clicking on it
        await $('//android.widget.TextView[@text="Trash Can"]').click()

        //Asserting whether deleted note is present or not using its title
        const isPresent = await $('//android.widget.TextView[@text="Exercise"]').isDisplayed()
        
        //Printing a message report in console 
        console.log(`Is the note successfully created, deleted and verified whether it is in trash or not : ${isPresent}`)
        await driver.pause(5000)
      });

})