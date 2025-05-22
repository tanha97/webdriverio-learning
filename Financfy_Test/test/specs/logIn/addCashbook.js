const logIn = require('../../helpers/logIn')
const cashBook = require('../../pageobjects/cashbookObjects')

describe('Financfy Automation Test', () => {
  it('Create a New Cashbook Successfully', async () => {
    await logIn()

    // Create a new cashbook
    await cashBook.addCashbook.click()
    await cashBook.mainCashbookField.click()
    await cashBook.cashbookOptions.click()
    await cashBook.cashbookName.setValue('New CashBook')
    await cashBook.saveButton.click()
    await expect(cashBook.toastMsg).toHaveText('Branch cash book created successfully.')
  })
})
