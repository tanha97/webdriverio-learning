//const logIn = require('../../helpers/logIn')
const cashTransfer = require('../../pageobjects/transactions/cashTransferObjects')
const settings = require('../../pageobjects/settingObjects')

describe('Payment mode Page Functionality Test', async () => {
  // beforeEach(async () => {
  //   await logIn()
  // })
  
  it('Create Payment Mode', async () => {
    //Navigate to Payment Mode Tab
    await settings.settingsMenu.click()
    await settings.paymentModeTab.click()

    //Create Payment Mode
    await settings.addPaymentModeButton.click()
    await settings.nameField.setValue('New Cashless')
    await cashTransfer.saveButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toHaveText(
      'Successfully created the payment mode'
    )
  })

  it('Edit Payment Mode', async () => {
    //Navigate to Payment Mode Tab
    await settings.settingsMenu.click()
    await settings.paymentModeTab.click()

    //Edit Payment Mode
    await settings.paymentActionButton.click()
    await cashTransfer.editText.click()
    //await settings.nameField.setValue('Cashless@@')
    await cashTransfer.saveButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toHaveText(
      'Successfully updated the payment mode'
    )
  })

  it('Delete Payment Mode', async () => {
    //Navigate to Payment Mode Tab
    await settings.settingsMenu.click()
    await settings.paymentModeTab.click()

    //Delete Payment Mode
    await settings.paymentActionButton.click()
    await cashTransfer.deleteText.click()
    await cashTransfer.deleteModalButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toHaveText(
      'Payment mode has been deleted successfully'
    )
  })
})
