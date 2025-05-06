/**
 * Add Cash Book Success Test
 */
const logIn = require('../pageobjects/logInObject');
const cashBook = require('../pageobjects/cashbookObjects');

describe('Financfy Automation Test', () => {
  it('Create a New Cashbook', async () => {
    // Navigate to login page
    await browser.url(logInPage.stagingURL);

    // Login to application
    await logIn.mobileNumber.setValue('01500000000');
    await logIn.password.setValue('A12345678a');
    await logIn.signinButton.click();

    // Create a new cashbook
    await cashBook.addCashbook.click();
    await cashBook.mainCashbookField.click();
    await cashBook.cashbookOptions.click();
    await cashBook.cashbookName.setValue('New CashBook');
    await cashBook.saveButton.click();

    // Verify toast message
    await expect(cashBookPage.toastMsg).toHaveText("Branch cash book created successfully.");
  });
});