const logIn = require('../pageobjects/logInObject')
const cashBook = require('../pageobjects/cashbookObjects')
require('dotenv').config()

describe('Financfy Automation Test', () => {
  it('Create a New Cashbook', async () => {
    // Navigate to login page
    await browser.url(logInPage.stagingURL)

    // Login to application
    await logIn.mobileNumber.setValue(process.env.MOBILE_NUMBER)
    await logIn.password.setValue(process.env.PASSWORD)
    await logIn.signinButton.click()

    // Create a new cashbook
    await cashBook.addCashbook.click()
    await cashBook.mainCashbookField.click()
    await cashBook.cashbookOptions.click()
    await cashBook.cashbookName.setValue('New CashBook')
    await cashBook.saveButton.click()

    // Verify toast message
    await expect(cashBook.toastMsg).toHaveText('Branch cash book created successfully.')
  })
})
