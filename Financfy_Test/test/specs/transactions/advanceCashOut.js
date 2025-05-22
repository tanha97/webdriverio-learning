const logIn = require('../../helpers/logIn')
const cashInCashOut = require('../../pageobjects/transactions/cashInCashOutObjects')
const cashTransfer = require('../../pageobjects/transactions/cashTransferObjects')
const cashInRequest = require('../../pageobjects/transactions/cashinRequestObjects')
const advanceCashOut = require('../../pageobjects/transactions/advanceCashOutObjects')
const uploadFile = require('../../helpers/uploadFile')

describe('Financfy Automation Test', () => {
  before(async () => {
    await logIn()
  })
  it('Create Advance Cash Out', async () => {
    //Navigate to Advance cash out Tab
    await cashInCashOut.transactionMenu.click()
    await advanceCashOut.advanceCashOutTab.click()

    //Advance cash out
    await advanceCashOut.advanceCashOutButton.click()
    await cashTransfer.dateField.click()
    await cashTransfer.dateField.waitForDisplayed({ timeout: 5000 })
    await cashTransfer.dateOptions.click()
    await advanceCashOut.contactField.click()
    await cashInCashOut.contactOptions.click()
    await advanceCashOut.paymentModeField.click()
    await advanceCashOut.paymentModeField.waitForDisplayed({ timeout: 5000 })
    await cashInCashOut.receiveModeOptions.click()
    await advanceCashOut.amountField.setValue(50000)
    await cashInCashOut.referenceNoField.setValue('Advance for office rent')
    await cashInRequest.remarksField.setValue('Advance cash out test')
    await advanceCashOut.saveButton.click()
    await browser.pause(5000)
    await expect(advanceCashOut.toastMsg).toHaveText(
      'Advance cash out has been created successfully.'
    )
  })

  xit('Add cash out from advance cash out', async () => {
    //Navigate to Advance cash out Tab
    await cashInCashOut.transactionMenu.click()
    await advanceCashOut.advanceCashOutTab.click()

    //Add cash out from advance cash out
    await advanceCashOut.actionButton.click()
    await advanceCashOut.addCashOutText.click()
    await advanceCashOut.dateField.click()
    await advanceCashOut.dateField.waitForDisplayed({ timeout: 5000 })
    await advanceCashOut.dateOptions.click()
    await cashInCashOut.amountField.setValue(7000)
    await advanceCashOut.taxField.click()
    await advanceCashOut.taxField.waitForDisplayed({ timeout: 5000 })
    await advanceCashOut.taxOptions.click()
    await cashInCashOut.paymentModeField.click()
    await cashInCashOut.paymentModeField.waitForDisplayed({ timeout: 5000 })
    await cashInCashOut.receiveModeOptions.click()
    await cashInCashOut.cashOutCategoryField.click()
    await cashInCashOut.cashOutCategoryField.waitForDisplayed({ timeout: 5000 })
    await cashInCashOut.categoryOptions.click()
    await cashInRequest.remarksField.setValue(
      '7000 tk given to office employee'
    )
    await uploadFile(cashInCashOut.voucherImageField, 'image_1.png')
    await cashInCashOut.cashOutSaveButton.click()
    await browser.pause(5000)
    await expect(advanceCashOut.toastMsg).toHaveText('Cash out successful')
  })

  xit('Create Advance Return from Advance Cash Out', async () => {
    //Navigate to Advance cash out Tab
    await cashInCashOut.transactionMenu.click()
    await advanceCashOut.advanceCashOutTab.click()

    //Advance return from advance cash out
    await advanceCashOut.actionButton.click()
    await advanceCashOut.advanceReturnText.click()
    await advanceCashOut.advancePaymentMode.click()
    await advanceCashOut.advancePaymentMode.waitForDisplayed({ timeout: 5000 })
    await cashInCashOut.receiveModeOptions.click()
    await cashInCashOut.amountField.setValue(1000)
    await cashInRequest.remarksField.setValue('Advance return test')
    await advanceCashOut.saveButton.click()
    await browser.pause(5000)
    await expect(advanceCashOut.toastMsg).toHaveText(
      'The advance has been returned successfully.'
    )
  })

  xit('Should show advance cash out list after applying selected contact option', async () => {
    //Navigate to Advance cash out Tab
    await cashInCashOut.transactionMenu.click()
    await advanceCashOut.advanceCashOutTab.click()

    //Apply selected contact filter
    await advanceCashOut.contactFilterField.click()
    await advanceCashOut.contactOptions.click()
    await advanceCashOut.filterButton.click()
    await browser.pause(5000)
    if (advanceCashOut.statusElements) {
      let statusText = await advanceCashOut.statusElements.getText()
      await expect(statusText).toEqual('Alina')
    } else {
      console.log('No data found')
    }
  })

  xit('Should filter the list when select payment mode filter', async () => {
    //Navigate to Advance cash out Tab
    await cashInCashOut.transactionMenu.click()
    await advanceCashOut.advanceCashOutTab.click()

    //Apply Payment Mode Filter
    let totalCountBefore = await $("//div[@class='pageinfo']").getText()
    console.log(totalCountBefore)
    await advanceCashOut.paymentModeFilterField.click()
    await advanceCashOut.paymentModeFilterField.waitForDisplayed({
      timeout: 5000,
    })
    await advanceCashOut.paymentOptions.click()
    await advanceCashOut.filterButton.click()
    await browser.pause(5000)
    let totalCountAfter = await $("//div[@class='pageinfo']").getText()
    console.log(totalCountAfter)
    await expect(totalCountAfter).not.toBe(totalCountBefore)
  })

  xit('Edit Advance Cash Out', async () => {
    //Navigate to Advance cash out Tab
    await cashInCashOut.transactionMenu.click()
    await advanceCashOut.advanceCashOutTab.click()

    //Edit Advance Cash Out
    await advanceCashOut.EditActionButton.click()
    await cashTransfer.editText.click()
    await cashInRequest.remarksField.setValue('Advance cash out updated')
    await advanceCashOut.saveButton.click()
    await browser.pause(5000)
    await expect(advanceCashOut.toastMsg).toHaveText(
      'Advance cash out has been updated successfully'
    )
  })

  xit('Delete Advance Cash Out', async () => {
    //Navigate to Advance cash out Tab
    await cashInCashOut.transactionMenu.click()
    await advanceCashOut.advanceCashOutTab.click()

    //Delete Advance Cash Out
    await advanceCashOut.deleteActionButton.click()
    await cashTransfer.deleteText.click()
    await cashTransfer.deleteModalButton.click()
    await browser.pause(5000)
    await expect(advanceCashOut.toastMsg).toHaveText('Successfully deleted')
  })
})
