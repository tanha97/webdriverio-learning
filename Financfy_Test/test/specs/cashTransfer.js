const logIn = require('../helpers/logIn')
const transactions = require('../pageobjects/transactionObject')
const cashTransfer = require('../pageobjects/cashTransferObjects')
const advanceCashOut = require('../pageobjects/advanceCashOutObjects')
const uploadFile = require('../helpers/uploadFile')

describe('Financfy Automation Test', () => {
  xit('Create Cash Transfer', async () => {
    await logIn()

    //Navigate to Cash Transfer Tab
    await transactions.transactionMenu.click()
    await cashTransfer.transferTab.click()

    //Create Cash Transfer
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
    await expect(cashTransfer.toastMsg).toBeDisplayed(
      'Successfully transferred cash'
    )
  })

  xit('Edit Cash Transfer', async () => {
    await logIn()

    //Navigate to Cash Transfer
    await transactions.transactionMenu.click()
    await cashTransfer.transferTab.click()

    //Edit Cash transfer Remarks Field
    await advanceCashOut.EditActionButton.click()
    await cashTransfer.editText.click()
    await cashTransfer.remarksField.setValue('Cash transfer edited')
    await cashTransfer.saveButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toBeDisplayed(
      'Successfully updated cash transfer'
    )
  })

  xit('Delete Cash Transfer', async () => {
    await logIn()

    //Navigate to Cash Transfer
    await transactions.transactionMenu.click()
    await cashTransfer.transferTab.click()

    //Delete Cash transfer
    await advanceCashOut.deleteActionButton.click()
    await cashTransfer.deleteText.click()
    await cashTransfer.deleteModalButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toBeDisplayed(
      'Successfully deleted cash transfer'
    )
  })

  it('Click Sent Filter', async () => {
    await logIn()

    //Navigate to Cash Transfer
    await transactions.transactionMenu.click()
    await cashTransfer.transferTab.click()

    //Click Sent Filter
    await cashTransfer.filterField.click()
    await cashTransfer.filterField.waitForDisplayed({ timeout: 5000 })
    await cashTransfer.receivedText.click()
    await expect(
      cashTransfer.cashTransferButton.getAttribute('disabled')
    ).not.toBeNull()
  })
})
