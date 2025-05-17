const logIn = require('../helpers/logIn')
const cashTransfer = require('../pageobjects/cashTransferObjects')
const members = require('../pageobjects/memberObjects')
const settings = require('../pageobjects/settingObjects')

describe('Settings Functionality Test', async () => {
  before(async () => {
    logIn()
  })

  xit('Search Filter should work', async () => {
    await logIn()

    //Navigate to Contact Tab
    await settings.settingsMenu.click()
    await settings.contactTab.click()

    //Search Filter
    let totalCountTextBefore = await $("//div[@class='pageinfo']").getText()
    console.log(totalCountTextBefore)
    await members.searchField.setValue('tanha')
    await browser.pause(5000)
    let totalCountTextAfter = await $("//div[@class='pageinfo']").getText()
    console.log(totalCountTextAfter)
    await expect(totalCountTextAfter).not.toBe(totalCountTextBefore)
  })

  xit('Filter should work', async () => {
    await logIn()

    //Navigate to Contact Tab
    await settings.settingsMenu.click()
    await settings.contactTab.click()

    //Filter
    await cashTransfer.filterField.click()
    await cashTransfer.filterField.waitForDisplayed({ timeout: 5000 })
    await settings.contactFilterOptions.click()
    await browser.pause(5000)
    if (settings.typeStatusElement) {
      let contactTypeText = await settings.typeStatusElement.getText()
      await expect(contactTypeText).toEqual('Others')
    } else {
      console.log('No data found')
    }
  })

  xit('Add Contact', async () => {
    await logIn()

    //Navigate to Contact Tab
    await settings.settingsMenu.click()
    await settings.contactTab.click()

    //Add Contact
    await settings.addContactButton.click()
    await settings.nameField.setValue('Arisha')
    await members.mobileNumberField.setValue('01700000001')
    await settings.contactType.click()
    await settings.contactType.waitForDisplayed({ timeout: 5000 })
    await settings.contactTypeOptions.click()
    await cashTransfer.saveButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toBeDisplayed(
      'Successfully created the contact'
    )
  })

  xit('Edit Contact', async () => {

    //Navigate to Contact Tab
    await settings.settingsMenu.click()
    await settings.contactTab.click()

    //Edit Contact
    await settings.actionButton.click()
    await cashTransfer.editText.click()
    await settings.nameField.setValue('Arishaaaaa')
    await cashTransfer.saveButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toBeDisplayed(
      'Successfully updated the contact'
    )
  })

  xit('Delete Contact', async () => {

    //Navigate to Contact Tab
    await settings.settingsMenu.click()
    await settings.contactTab.click()

    //Delete Contact
    await settings.actionButton.click()
    await browser.pause(5000)
    await cashTransfer.deleteText.click()
    await cashTransfer.deleteModalButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toBeDisplayed(
      'Contact has been deleted successfully'
    )
  })

  xit('Add category create', async () => {
    await logIn()

    //Navigate to Category Tab
    await settings.settingsMenu.click()
    await settings.categoryTab.click()

    //Add Category
    await settings.addCategoryButton.click()
    await settings.nameField.setValue('Home Expenses')
    await cashTransfer.saveButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toBeDisplayed(
      'Successfully created the category'
    )
  })

  xit('Edit Category', async () => {
    //await logIn()

    //Navigate to Category Tab
    await settings.settingsMenu.click()
    await settings.categoryTab.click()

    //Edit Category
    await settings.categoryActionButton.click()
    await cashTransfer.editText.click()
    //await settings.nameField.setValue('Home Expenses@@')
    await cashTransfer.saveButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toBeDisplayed(
      'Successfully updated the category'
    )
  })

  xit('Delete Category', async () => {
    //await logIn()

    //Navigate to Category Tab
    await settings.settingsMenu.click()
    await settings.categoryTab.click()

    //Delete Category
    await settings.categoryActionButton.click()
    await cashTransfer.deleteText.click()
    await cashTransfer.deleteModalButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toBeDisplayed(
      'Category has been deleted successfully'
    )
  })

  xit('Create Payment Mode', async ()=>{
    //await logIn()

    //Navigate to Payment Mode Tab
    await settings.settingsMenu.click()
    await settings.paymentModeTab.click()

    //Create Payment Mode
    await settings.addPaymentModeButton.click()
    await settings.nameField.setValue('Cashless')
    await cashTransfer.saveButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toBeDisplayed(
      'Successfully created the payment mode'
    )
  })

  it('Edit Payment Mode', async ()=>{
    //await logIn()

    //Navigate to Payment Mode Tab
    await settings.settingsMenu.click()
    await settings.paymentModeTab.click()

    //Edit Payment Mode
    await settings.paymentActionButton.click()
    await cashTransfer.editText.click()
    //await settings.nameField.setValue('Cashless@@')
    await cashTransfer.saveButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toBeDisplayed(
      'Successfully updated the payment mode'
    )
  })

  it('Delete Payment Mode', async ()=>{
    //await logIn()

    //Navigate to Payment Mode Tab
    await settings.settingsMenu.click()
    await settings.paymentModeTab.click()

    //Delete Payment Mode
    await settings.paymentActionButton.click()
    await cashTransfer.deleteText.click()
    await cashTransfer.deleteModalButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toBeDisplayed(
      'Payment mode has been deleted successfully'
    )
  })
    
})
