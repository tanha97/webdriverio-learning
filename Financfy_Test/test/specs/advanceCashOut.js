const logIn = require('../pageobjects/logInObject')
const transactions = require('../pageobjects/transactionObject')
const cashTransfer = require('../pageobjects/cashTransferObjects')
const cashInRequest = require('../pageobjects/cashinRequestObjects')
const advanceCashOut = require('../pageobjects/advanceCashOutObjects')

require('dotenv').config()

describe('Financfy Automation Test', () => {
  it('Create Advance Cash Out', async () => {
    await browser.url(logIn.stagingURL)

    //LogIn Steps
    await logIn.mobileNumber.setValue(process.env.MOBILE_NUMBER)
    await logIn.password.setValue(process.env.PASSWORD)
    await logIn.signinButton.click()

    //Navigate to Advance cash out Tab
    await transactions.transactionMenu.click()

    //Advance cash out
    await advanceCashOut.advanceCashOutTab.click()
    await advanceCashOut.advanceCashOutButton.click()
    await cashTransfer.dateField.click()
    await cashTransfer.dateField.waitForDisplayed({ timeout: 5000 })
    await cashTransfer.dateOptions.click()
    await advanceCashOut.contactField.click()
    await transactions.contactOptions.click()
    await advanceCashOut.paymentModeField.click()
    await advanceCashOut.paymentModeField.waitForDisplayed({ timeout: 5000 })
    await transactions.receiveModeOptions.click()
    await advanceCashOut.amountField.setValue(50000)
    await transactions.referenceNoField.setValue('Advance for office rent')
    await cashInRequest.remarksField.setValue('Advance cash out test')
    await advanceCashOut.saveButton.click()
    await browser.pause(5000)
  })
})
