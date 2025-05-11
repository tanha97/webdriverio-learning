const login = require('../pageobjects/logInObject')
const transactions = require('../pageobjects/transactionObject')
const cashTransfer = require('../pageobjects/cashTransferObjects')
const uploadFile = require('../helpers/uploadFile')
require('dotenv').config()

describe('Financfy Automation Test', () => {
  it('Create Cash Transfer', async () => {
    await browser.url(login.stagingURL)

    //LogIn Steps
    await login.mobileNumber.setValue(process.env.MOBILE_NUMBER)
    await login.password.setValue(process.env.PASSWORD)
    await login.signinButton.click()

    //Navigate to Cash Transfer
    await transactions.transactionMenu.click()
    await cashTransfer.transferTab.click()
    await cashTransfer.cashTransferButton.click()
    await cashTransfer.cashTransferTo.click()
    await cashTransfer.cashTransferTo.waitForDisplayed({ timeout: 5000 })
    await cashTransfer.transferToOptions.click()
    await cashTransfer.dateField.click()
    await cashTransfer.dateField.waitForDisplayed({ timeout: 5000 })
    await cashTransfer.dateOptions.click()
    await transactions.amountField.setValue(2000)
    await cashTransfer.transferViaField.click()
    await cashTransfer.transferViaField.waitForDisplayed({ timeout: 5000 })
    await transactions.receiveModeOptions.click()
    await transactions.referenceNoField.setValue('transfer#01')
    await cashTransfer.remarksField.setValue('Cash transfer test')
    await uploadFile(transactions.voucherImageField, 'image_1.png')
    await cashTransfer.saveButton.click()
    await browser.pause(5000)
  })
})
