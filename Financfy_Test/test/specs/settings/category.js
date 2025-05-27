//const logIn = require('../../helpers/logIn')
const cashTransfer = require('../../pageobjects/transactions/cashTransferObjects')
const settings = require('../../pageobjects/settingObjects')

describe('Category Page Functionality Test', async () => {
  // beforeEach(async () => {
  //   await logIn()
  // })

  it('Add category create', async () => {
    //Navigate to Category Tab
    await settings.settingsMenu.click()
    await settings.categoryTab.click()

    //Add Category
    await settings.addCategoryButton.click()
    await settings.nameField.setValue('Home Expenses//')
    await cashTransfer.saveButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toHaveText(
      'Successfully created the category'
    )
  })

  it('Edit Category', async () => {
    //Navigate to Category Tab
    await settings.settingsMenu.click()
    await settings.categoryTab.click()

    //Edit Category
    await settings.categoryActionButton.click()
    await cashTransfer.editText.click()
    //await settings.nameField.setValue('Home Expenses@@')
    await cashTransfer.saveButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toHaveText(
      'Successfully updated the category'
    )
  })

  it('Delete Category', async () => {
    //Navigate to Category Tab
    await settings.settingsMenu.click()
    await settings.categoryTab.click()

    //Delete Category
    await settings.categoryActionButton.click()
    await cashTransfer.deleteText.click()
    await cashTransfer.deleteModalButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toHaveText(
      'Category has been deleted successfully'
    )
  })
})
