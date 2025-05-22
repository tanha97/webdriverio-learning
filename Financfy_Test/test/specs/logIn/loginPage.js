const logIn = require('../../pageobjects/logInObject')
const cashTransfer = require('../../pageobjects/transactions/cashTransferObjects')
const logInHelper = require('../../helpers/logIn')
require('dotenv').config()

describe('Financfy Automation Testing', async () => {
  it('Login failed page', async () => {
    await browser.url(logIn.stagingURL)

    //LogIn Steps
    await logIn.mobileNumber.setValue(process.env.MOBILE_NUMBER)
    await logIn.password.setValue('A12345678as')
    await logIn.signinButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toHaveText(
      'password or code is incorrect, you have 4 remaining chances'
    )
  })

  it('Login success title page', async () => {
    await logInHelper.logIn()

    // Wait until Hello text is displayed
    await logIn.helloText.waitForExist()
    await expect(browser).toHaveUrl(expect.stringContaining('dashboard'))
    await expect(browser).toHaveTitle('Dashboard | Financfy')
  })
})
