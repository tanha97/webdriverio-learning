const logIn = require('../../helpers/logIn')
const cashTransfer = require('../../pageobjects/transactions/cashTransferObjects')
const members = require('../../pageobjects/memberObjects')
const settings = require('../../pageobjects/settingObjects')

describe('Contacts Page Functionality Test', async () => {
  before(async () => {
    await logIn()
  })

  it('Search Filter should work', async () => {
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

  xit('Dropdown Filter should work', async () => {
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
    await expect(cashTransfer.toastMsg).toHaveText(
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
    await expect(cashTransfer.toastMsg).toHaveText(
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
    await expect(cashTransfer.toastMsg).toHaveText(
      'Contact has been deleted successfully'
    )
  })
})
