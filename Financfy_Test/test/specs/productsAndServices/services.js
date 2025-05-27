//const logIn = require('../../helpers/logIn')
const cashTransfer = require('../../pageobjects/transactions/cashTransferObjects')
const products = require('../../pageobjects/products/productObjects')
const services = require('../../pageobjects/products/serviceObjects')

describe('Services Page Functionality Test', async () => {
  // before(async () => {
  //   await logIn()
  // })

  it('Create a New Service Successfully', async () => {
    await products.productsMenu.click()
    await services.serviceTab.click()
    await services.newServiceButton.click()
    await products.nameField.setValue('Test Service')
    await products.categoryField.click()
    await products.categoryField.waitForDisplayed({ timeout: 5000 })
    await services.categoryOptions.click()
    await products.primaryUnitField.click()
    await products.primaryUnitField.waitForDisplayed({ timeout: 5000 })
    await products.unitOptions.click()
    await products.salesPriceField.setValue(6000)
    await products.purchaseInformationText.click()
    await products.costPriceField.setValue(3500)
    await products.saveButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toHaveText(
      'Service created successfully'
    )
  })

  it('Search Filter should work', async () => {
    await products.productsMenu.click()
    await services.serviceTab.click()
    await services.searchFilter.setValue('Test')
    let totalCountTextBefore= await services.paginationText.getText()
    console.log(totalCountTextBefore)
    await browser.pause(5000)
    let totalCountTextAfter = await services.paginationText.getText()
    console.log(totalCountTextAfter)
    await expect(totalCountTextAfter).not.toBe(totalCountTextBefore)
  })
})

