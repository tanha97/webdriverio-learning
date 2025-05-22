const logIn = require('../../helpers/logIn')
const cashInCashOut = require('../../pageobjects/transactions/cashInCashOutObjects')
const cashTransfer = require('../../pageobjects/transactions/cashTransferObjects')
const cashInRequest = require('../../pageobjects/transactions/cashinRequestObjects')

describe('Financfy Automation Test', () => {
  before(async () => {
    await logIn()
  })
  xit('Create Cash in Request', async () => {
    //Navigate to Cash in Request Tab
    await cashInCashOut.transactionMenu.click()
    await cashInRequest.cashbookSelectionField.click()
    await cashInRequest.cashbookSelectionField.waitForDisplayed({
      timeout: 5000,
    })
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
    await cashInCashOut.categoryOptions.click()
    await cashInRequest.paymentModeField.click()
    await cashInRequest.paymentModeField.waitForDisplayed({ timeout: 5000 })
    await cashInCashOut.receiveModeOptions.click()
    await cashInRequest.remarksField.setValue('Cash in request test')
    await cashInRequest.saveButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toHaveText(
      'Successfully created cash in request'
    )
  })

  it('Should show pending status after applying pending filter', async () => {
    //Navigate to Cash in Request Tab
    await cashInCashOut.transactionMenu.click()
    await cashInRequest.cashbookSelectionField.click()
    await cashInRequest.cashbookSelectionField.waitForDisplayed({
      timeout: 5000,
    })
    await cashInRequest.cashbookList.click()
    await cashInRequest.cashInRequestTab.click()

    //Apply pending filter
    await cashTransfer.filterField.click()
    await cashTransfer.filterField.waitForDisplayed({ timeout: 5000 })
    await cashInRequest.pendingText.click()
    if (cashInRequest.statusElements) {
      let statusText = await cashInRequest.statusElements.getText()
      await expect(statusText).toEqual('Pending')
    } else {
      console.log('No element found with the locator')
    }
  })
})
