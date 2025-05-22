const logIn = require('../../helpers/logIn')
const cashTransfer = require('../../pageobjects/transactions/cashTransferObjects')
const invoice = require('../../pageobjects/sales/invoiceObject')
const payment = require('../../pageobjects/sales/paymentObjects')

describe('Payment Functionality Test', async () => {
  before(async () => {
    await logIn()
  })
  xit('Create a Payment Successfully', async () => {
    await invoice.salesMenu.click()
    await invoice.newTransactionButton.click()
    await payment.paymentOption.click()
    await invoice.customerField.click()
    await invoice.customerField.waitForDisplayed({ timeout: 5000 })
    await invoice.customerOptions.click()
    await payment.paymentField.click()
    await payment.paymentModeOption.click()
    await payment.invoice1stRow.click()
    await browser.pause(5000)
    await invoice.saveAndCloseButton.click()
    await payment.confirmButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toHaveText(
      'Payment created successfully'
    )
  })

  xit('Payment from Invoice Action Button', async () => {
    await invoice.salesMenu.click()
    await payment.invoiceActionButton.click()
    await browser.pause(5000)
    await payment.receivePaymentOption.click()
    await payment.amountReceivedField.clearValue()
    await payment.amountReceivedField.setValue(100)
    await payment.saveAndCloseButton.click()
    await payment.confirmButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toHaveText(
      'Payment created successfully'
    )
  })

  xit('Edit Payment', async () => {
    await invoice.salesMenu.click()
    await payment.paymentActionButton.click()
    await payment.editText.click()
    await payment.amountReceivedField.clearValue()
    await payment.amountReceivedField.setValue(142)
    await payment.saveAndCloseButton.click()
    await cashTransfer.toastMsg.waitForExist({ timeout: 5000 })
    await cashTransfer.toastMsg.waitForDisplayed({ timeout: 5000 })
    const toastText = await cashTransfer.toastMsg.getText()
    console.log('Toast text:', toastText)
    await expect(cashTransfer.toastMsg).toHaveText(
      'Payment updated successfully'
    )
    
  })

  it('Delete Payment', async()=>{
    await invoice.salesMenu.click()
    await payment.paymentActionButton.click()
    await payment.deleteText.click()
    await payment.deleteModalButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toHaveText(
      'Payment deleted successfully'
    )

  })

})
