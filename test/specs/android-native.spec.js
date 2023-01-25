describe('Android Native App Feature Tests',()=>{
    xit('Access an Activity directly',async()=>{
        //startActivity("package name","packagename+appactivity")
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples")
        // pause 3s
        await driver.pause(3000);

        // assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
   
    })

    xit('Working with alert box',async()=>{
 
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

        // click on first dialog
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]')
          .click();
    
        // accept Alert
        // await driver.acceptAlert();

        // await driver.dismissAlert()

            // get alert text
        console.log('ALERT TEXT -->', await driver.getAlertText());

        // click on the OK button
        await $('//*[@resource-id="android:id/button1"]').click();

                // assertion - alert box is no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    })

    xit('Verical scroll',async()=>{
        await $('~App').click();
        await $('~Activity').click()

        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        // await $('~Secure Surfaces').click()
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("ecure Surfaces")').click();


        await expect($('~Secure Dialog')).toExist()
    })

    xit("Horizontal Scroll", async () => {
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1");
    
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
       
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
    
        await driver.pause(3000);
      });

    it("Scrolling Exercise",async()=>{
        //Going to the Date widget screen
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.DateWidgets1")

        //Getting current date
        const currentDate = await (await $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/dateDisplay"]')).getText()

        //Printing current date
        console.log("Present date is : ",currentDate)
        
        //Changing the date
        await $('~change the date').click()

        //Scrolling horizontally
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward(5)');

        //Changing date to 10th
        await $('//android.view.View[@text="10"]').click()

        //Accepting the alert
        await driver.acceptAlert()

        //Getting current date
        const updatedDate = await $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText()

        //Asserting date is updated
        await expect(currentDate).not.toEqual(updatedDate)
        
        await driver.pause(3000)
    })
})