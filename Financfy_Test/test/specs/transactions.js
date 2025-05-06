const logIn = require('../pageobjects/logInObject')
const transactions = require('../pageobjects/transactionObject')
const uploadFile = require('../helpers/uploadFile')

describe('Financfy Automation Test', () => {
  it('Create cash_in transactions', async () => {
    await browser.url(logIn.stagingURL)

    // Login steps
    await logIn.mobileNumber.setValue('01500000000')
    await logIn.password.setValue('A12345678a')
    await logIn.signinButton.click()

    // Navigate to Transactions
    await transactions.transactionMenu.click()
    await transactions.cashinTab.click()
    await transactions.amountField.setValue(2500.65)

    // Select tax
    await transactions.taxField.click()
    await transactions.taxField.waitForDisplayed({ timeout: 5000 })
    await transactions.taxOptions.click()

    // Select contact
    await transactions.contactField.click()
    await transactions.contactField.waitForDisplayed({ timeout: 5000 })
    await transactions.contactOptions.click()

    // Select receive mode
    await transactions.receiveModeField.click()
    await transactions.receiveModeField.waitForDisplayed({ timeout: 5000 })
    await transactions.receiveModeOptions.click()

    // Select category
    await transactions.categoryField.click()
    await transactions.categoryField.waitForDisplayed({ timeout: 5000 })
    await transactions.categoryOptions.click()

    //Input reference no.
    await transactions.referenceNoField.setValue('tanha#01')

    //Upload file (Using helpers function)
    await uploadFile(transactions.voucherImageField, 'IMG_4827.JPG');

    //Verify file size error msg
    await expect(transactions.imageSizeError).toBeDisplayed('File size should be less than 2MB')

    //Save cash in
    await transactions.saveButton.click();
    

    //Verify toast msg
    // await $('.Toastify__toast-container').waitForDisplayed({ timeout: 5000 })
    // await expect($('Toastify__toast-body')).toHaveText('Cash in successful')

    
  })
})
