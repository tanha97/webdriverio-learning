//const logIn = require('../../helpers/logIn')
const cashInCashOut = require('../../pageobjects/transactions/cashInCashOutObjects')
const cashTransfer = require('../../pageobjects/transactions/cashTransferObjects')
const uploadFile = require('../../helpers/uploadFile')

describe('Financfy Automation Test', () => {
  // before(async () => {
  //   await logIn()
  // })
  it('Create Cash In Transactions', async () => {
    // Navigate to Transactions (Cash in tab)
    await cashInCashOut.transactionMenu.click()
    await cashInCashOut.cashInTab.click()
    await cashInCashOut.amountField.setValue(2500.65)
    await cashInCashOut.taxField.click()
    await cashInCashOut.taxField.waitForDisplayed({ timeout: 5000 })
    await cashInCashOut.taxOptions.click()
    await cashInCashOut.contactField.click()
    await cashInCashOut.contactField.waitForDisplayed({ timeout: 5000 })
    await cashInCashOut.contactOptions.click()
    await cashInCashOut.receiveModeField.click()
    await cashInCashOut.receiveModeField.waitForDisplayed({ timeout: 5000 })
    await cashInCashOut.receiveModeOptions.click()
    await cashInCashOut.categoryField.click()
    await cashInCashOut.categoryField.waitForDisplayed({ timeout: 5000 })
    await cashInCashOut.categoryOptions.click()
    await cashInCashOut.referenceNoField.setValue('tanha#01')
    await uploadFile(cashInCashOut.voucherImageField, 'image_1.png')
    await expect(cashInCashOut.imageSizeError).toHaveText(
      'File size should be less than 2MB'
    )
    await cashInCashOut.saveButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toHaveText('Cash in successful')
  })

  it('Create Cash Out Transaction', async () => {
    // Navigate to Transactions (Cash out tab)
    await cashInCashOut.transactionMenu.click()
    await cashInCashOut.cashOutTab.click()
    await cashInCashOut.amountField.setValue(100)
    await cashInCashOut.cashOutContactField.click()
    await cashInCashOut.cashOutContactField.waitForDisplayed({ timeout: 5000 })
    await cashInCashOut.contactOptions.click()
    await cashInCashOut.paymentModeField.click()
    await cashInCashOut.paymentModeField.waitForDisplayed({ timeout: 5000 })
    await cashInCashOut.receiveModeOptions.click()
    await cashInCashOut.cashOutCategoryField.click()
    await cashInCashOut.cashOutCategoryField.waitForDisplayed({ timeout: 5000 })
    await cashInCashOut.categoryOptions.click()
    await cashInCashOut.referenceNoField.setValue('tanha#02')
    await uploadFile(cashInCashOut.voucherImageField, 'image_1.png')
    await cashInCashOut.cashOutSaveButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toHaveText('Cash out successful')
  })
})
