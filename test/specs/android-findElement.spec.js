//D1
describe('Android elements tests',()=>{
//D1 I1
    it('Find element by accessibility id', async () => {
        // find element by accessibility id
        const appOption = await $('~App');
    
        // click on element
        await appOption.click();
    
        // Assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
      })

//D1 I2    
      it('Find element by class name', async () => {
        // find element by class name
        const className = await $('android.widget.TextView');
    
        // Assertion
        await expect(className).toHaveText("API Demos");
      });
    
//D1 I3      
      xit('Find elements by Xpath', async () => {
        // xpath - (//tagname[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
    
        // Find list dialogs by resource tag
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();
    
        // Find command two by text
        await $('//android.widget.TextView[@text="Command two"]').click();
    
        // Find by class
        const textAssertion = await $('//android.widget.TextView');

        //Assertion
        await expect(textAssertion).toHaveText("You selected: 1 , Command two");
      });

//D1 I4
      xit('Find elements by UI automator',async()=>{
        //find by text contains
        await $('android=new UiSelector().textContains("Alert")').click();
       })

//D1 I5
       it.only('Find multiple tests',async()=>{
        //Expecting this array as test result
        const expectedList = [
            'API Demos', "Access'ibility",
            'Accessibility', 'Animation',
            'App', 'Content',
            'Graphics', 'Media',
            'NFC', 'OS',
            'Preference', 'Text',
            'Views'
          ]

        //Storing the result in this
        const actualList = [] 

        //Accessing multiple elements
        const textList = await $$('android.widget.TextView');

        //Getting and storing each element
        for(const element of textList){
            actualList.push(await element.getText())
        }

        //Assertion
        await expect(actualList).toEqual(expectedList)

       })

//D1 I6
       it.only('Working with text field', async () => {
        // Go to views
        await $('~Views').click();
        //Go to autocomplete
        await $('//*[@text="Auto Complete"]').click();
        //Go to screen top
        await $('//*[@content-desc="1. Screen Top"]').click();
    
        // enter the country name
        const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        await textField.addValue('Canada');
    
        // Assertion
        await expect(textField).toHaveText('Canada');
      });
})