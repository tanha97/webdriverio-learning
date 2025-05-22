const logIn = require('../../helpers/logIn')
const cashTransfer = require('../../pageobjects/cashTransferObjects')
const customer = require('../../pageobjects/customerObject')

describe('Customer Functionality Test', async () => {
  before(async () => {
    logIn()
  })

  xit('Create a New Customer Successfully', async () => {
    await customer.customerMenu.click()
    await customer.addCustomer.click()
    await customer.displayNameField.setValue('Tanvir')
    await customer.currencyTab.click()
    await customer.currencyField.click()
    await customer.currencyField.waitForDisplayed({ timeout: 5000 })
    await customer.currencyOptions.click()
    await customer.currencyField.click()
    await cashTransfer.saveButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toHaveText(
      'Customer created successfully!'
    )
  })

  it('Edit Customer', async ()=>{
    await customer.customerMenu.click()
    await customer.customerActionButton.click()
    await cashTransfer.editText.click()
    await customer.emailField.setValue("tanvir@yopmail.com")
    await cashTransfer.saveButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toHaveText(
      'Customer updated successfully!'
    )
  })

  it('Create Invoice from Customer Page', async ()=>{
    await customer.customerMenu.click()
    await customer.customerActionButton.click()
    await customer.createInvoiceText.click()
    
  })
})
