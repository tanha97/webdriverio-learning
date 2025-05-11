const logIn = require('../pageobjects/logInObject')
const transactions = require('../pageobjects/transactionObject')
const cashTransfer = require('../pageobjects/cashTransferObjects')
const cashInRequest = require('../pageobjects/cashinRequestObjects')
require('dotenv').config()

describe('Financfy Automation Test', () => {
  it('Create Cash in Request', async () => {
    await browser.url(logIn.stagingURL)

    //LogIn Steps
    await logIn.mobileNumber.setValue(process.env.MOBILE_NUMBER)
    await logIn.password.setValue(process.env.PASSWORD)
    await logIn.signinButton.click()

    //Navigate to Cash in Request Tab
    await transactions.transactionMenu.click()
    await cashInRequest.cashbookSelectionField.click()
    await cashInRequest.cashbookSelectionField.waitForDisplayed({timeout: 5000,})
    await cashInRequest.cashbookList.click()
    await cashInRequest.cashInRequestTab.click()
    await cashInRequest.cashInRequestDropdown.click()
    await cashInRequest.cashInRequestButton.click()
    await cashTransfer.dateField.click()
    await cashTransfer.dateField.waitForDisplayed({ timeout: 5000 })
    await cashTransfer.dateOptions.click()
    await cashInRequest.amountField.setValue(4000.45)
    await cashInRequest.categoryField.click()
    await cashInRequest.categoryField.waitForDisplayed({ timeout: 5000 })
    await transactions.categoryOptions.click()
    await cashInRequest.paymentModeField.click()
    await cashInRequest.paymentModeField.waitForDisplayed({ timeout: 5000 })
    await transactions.receiveModeOptions.click()
    await cashInRequest.remarksField.setValue('Cash in request test')
    await cashInRequest.saveButton.click()
    await browser.pause(5000)


  })
})
