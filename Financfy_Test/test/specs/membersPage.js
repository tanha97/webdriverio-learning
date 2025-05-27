//const logIn= require('../../helpers/logIn')
const cashTransfer = require('../../pageobjects/cashTransferObjects')
const members = require('../../pageobjects/memberObjects')

describe('Members Page Test', async () => {
  // before(async () => {
  //     await logIn()
  //   })

  it('Search Filter should work', async () => {
    //Navigate to Members Module
    await members.membersMenu.click()

    //Search Filter
    await members.searchField.setValue('tanha')
    await browser.pause(5000)
    if (members.nameElement) {
      let nameText = await members.nameElement.getText()
      await expect(nameText).toContain('Tanha')
    } else {
      console.log('No data found')
    }
  })

  it('Add Member Create', async () => {
    //Navigate to Members Module
    await members.membersMenu.click()

    //Add Member
    await members.addMemberButton.click()
    await members.mobileNumberField.setValue('01700000007')
    await members.memberRoleField.click()
    await members.roleOptions.click()
    await cashTransfer.saveButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toHaveText('Invitation sent successfully')
  })

  it('Edit Member', async () => {
    //Navigate to Members Module
    await members.membersMenu.click()

    //Edit Member
    await members.actionButton.click()
    await cashTransfer.editText.click()
    await cashTransfer.saveButton.click()
    await browser.pause(5000)
    await expect(cashTransfer.toastMsg).toHaveText('Successfully updated member permission')
  })
})
