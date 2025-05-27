//const logIn=require('../../helpers/logIn')
const transaction=require('../../pageobjects/reports/transactionObjects')

describe('Transaction Report',async()=>{
    // before(async()=>{
    //     await logIn()
    // })
    it('Transaction Report',async()=>{
        await transaction.reportsMenu.click()
        await transaction.transactionTab.click()
        await transaction.transactionTypeFilter.click()
        await transaction.transactionTypeFilter.waitForDisplayed({ timeout: 5000 })
        await transaction.transactionOptions.click()
        await transaction.previewButton.click()
        await browser.pause(5000)
    })
    
})