//const logIn = require('../../helpers/logIn')
const cashInCashOut = require('../../pageobjects/transactions/cashInCashOutObjects')
const cashTransfer = require('../../pageobjects/transactions/cashTransferObjects')
const advanceCashOut = require('../../pageobjects/transactions/advanceCashOutObjects')
const uploadFile = require('../../helpers/uploadFile')

describe('Financfy Automation Test', () => {
  // before(async () => {
  //   await logIn()
  // })
  it('Create Cash Transfer', async () => {
    //Navigate to Cash Transfer Tab
    await cashInCashOut.transactionMenu.click()
    await cashTransfer.transferTab.click()

    //Create Cash Transfer
    await cashTransfer.cashTransferButton.click()
    await cashTransfer.cashTransferTo.click()
    await cashTransfer.cashTransferTo.waitForDisplayed({ timeout: 5000 })
    await cashTransfer.transferToOptions.click()
    await cashTransfer.dateField.click()
    await cashTransfer.dateOptions.click()
    await cashInCashOut.amountField.setValue(2000)
    await cashTransfer.transferViaField.click()
    await cashTransfer.transferViaField.waitForDisplayed({ timeout: 5000 })
    await cashInCashOut.receiveModeOptions.click()
    await cashInCashOut.referenceNoField.setValue('transfer#01')
    await cashTransfer.remarksField.setValue('Cash transfer test')
    await uploadFile(cashInCashOut.voucherImageField, 'image_1.png')
    await cashTransfer.saveButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toHaveText(
      'Successfully transferred cash'
    )
  })

  it('Edit Cash Transfer', async () => {
    //Navigate to Cash Transfer
    await cashInCashOut.transactionMenu.click()
    await cashTransfer.transferTab.click()

    //Edit Cash transfer Remarks Field
    await advanceCashOut.EditActionButton.click()
    await cashTransfer.editText.click()
    await cashTransfer.remarksField.setValue('Cash transfer edited')
    await cashTransfer.saveButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toHaveText(
      'Successfully updated cash transfer'
    )
  })

  it('Delete Cash Transfer', async () => {
    //Navigate to Cash Transfer
    await cashInCashOut.transactionMenu.click()
    await cashTransfer.transferTab.click()

    //Delete Cash transfer
    await advanceCashOut.deleteActionButton.click()
    await cashTransfer.deleteText.click()
    await cashTransfer.deleteModalButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toHaveText(
      'Successfully deleted cash transfer'
    )
  })

  it('Click Sent Filter', async () => {
    //Navigate to Cash Transfer
    await cashInCashOut.transactionMenu.click()
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
