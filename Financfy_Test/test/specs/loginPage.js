const logIn= require('../pageobjects/logInObject')
require('dotenv').config()

describe('Financfy Automation Testing', async () => 
    {
      it('Login failed page', async () => 
      {
      
        await browser.url(logIn.stagingURL)
        console.log(await browser.getTitle())
        await logIn.mobileNumber.setValue(process.env.MOBILE_NUMBER)
        await logIn.password.setValue('A12345678as')
        await logIn.signinButton.waitForClickable({ timeout: 5000 });
        await logIn.signinButton.click()
      //await expect(logIn.toastText).toBeDisabled('password or code is incorrect, you have 4 remaining chances')
      //await $('.text-primary').waitForDisplayed()
      
      })

      it('Login success title page', async () =>

      {
        await browser.url(logIn.stagingURL)
        await logIn.mobileNumber.setValue(process.env.MOBILE_NUMBER)
        await logIn.password.setValue(process.env.PASSWORD)
        await logIn.signinButton.click()
        // Wait until Hello text is displayed
        await logIn.helloText.waitForExist()
        await expect(browser).toHaveUrl(expect.stringContaining("dashboard"))
        await expect(browser).toHaveTitle("Dashboard | Financfy")
      })
    })
    