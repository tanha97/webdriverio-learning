const logIn= require('../../helpers/logIn')
const transactions = require('../../pageobjects/transactionObject')
const cashTransfer = require('../../pageobjects/cashTransferObjects')
const cashInRequest = require('../../pageobjects/cashinRequestObjects')


describe('Financfy Automation Test', () => {
  xit('Create Cash in Request', async () => {
    await logIn()

    //Navigate to Cash in Request Tab
    await transactions.transactionMenu.click()
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
    await transactions.categoryOptions.click()
    await cashInRequest.paymentModeField.click()
    await cashInRequest.paymentModeField.waitForDisplayed({ timeout: 5000 })
    await transactions.receiveModeOptions.click()
    await cashInRequest.remarksField.setValue('Cash in request test')
    await cashInRequest.saveButton.click()
    await browser.pause(5000)
  })

  it('Should show pending status after applying pending filter', async () => {
    await logIn()

    //Navigate to Cash in Request Tab
    await transactions.transactionMenu.click()
    await cashInRequest.cashbookSelectionField.click()
    await cashInRequest.cashbookSelectionField.waitForDisplayed({timeout: 5000})
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
