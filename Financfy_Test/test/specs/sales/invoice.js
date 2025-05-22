const logIn = require('../../helpers/logIn')
const invoice = require('../../pageobjects/sales/invoiceObject')
const payment= require('../../pageobjects/sales/paymentObjects')

describe('Invoice Functionality Test', async () => {
  before(async () => {
    await logIn()
  })
  
  xit('Create a New Invoice Successfully', async () => {
    await invoice.salesMenu.click()
    await invoice.invoiceTab.click()
    await invoice.createInvoiceButton.click()
    await invoice.customerField.click()
    await invoice.customerField.waitForDisplayed({ timeout: 5000 })
    await invoice.customerOptions.click()
    await invoice.expiredDateField.click()
    await invoice.dateOptions.click()
    await invoice.productRow1.click()
    await invoice.productRow1.waitForDisplayed({ timeout: 5000 })
    await invoice.productOptions1.click()
    await invoice.qtyRow1.setValue(5)
    await invoice.addLineButton.click()
    await invoice.productRow2.click()
    await invoice.productRow2.waitForDisplayed({ timeout: 5000 })
    await invoice.productOptions2.click()
    await invoice.qtyRow2.setValue(2)
    await invoice.shippingCostField.setValue(100)
    await invoice.saveAndCloseButton.click()
    await browser.pause(5000)
    await expect(invoice.toastMsg).toHaveText('Invoice created successfully')
  })

  it ('Invoice Delete', async ()=>{
    await invoice.salesMenu.click()
    await invoice.invoiceTab.click()
    await invoice.invoiceActionButton.click()
    await invoice.deleteText.click()
    await invoice.confirmationModal.click()
    await browser.pause(5000)
    await expect(invoice.toastMsg).toHaveText('Invoice deleted successfully')
  })

  
})
