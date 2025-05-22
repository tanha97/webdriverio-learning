const logIn = require('../../helpers/logIn')
const cashTransfer= require('../../pageobjects/transactions/cashTransferObjects')
const products = require('../../pageobjects/products/productObjects')

describe('Products Page Functionality Test', async () => {
  before(async () => {
    await logIn()
  })

  it('Create a New Product Successfully', async () => {
    await products.productsMenu.click()
    await products.newProductButton.click()
    await products.nameField.setValue('Test Product')
    await products.categoryField.click()
    await products.categoryField.waitForDisplayed({ timeout: 5000 })
    await products.categoryOptions.click()
    await products.primaryUnitField.click()
    await products.primaryUnitField.waitForDisplayed({ timeout: 5000 })
    await products.unitOptions.click()
    await products.salesPriceField.setValue(6000)
    await products.purchaseInformationText.click()
    await products.costPriceField.setValue(3500)
    await products.saveButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toHaveText('Product created successfully')



  })
})
