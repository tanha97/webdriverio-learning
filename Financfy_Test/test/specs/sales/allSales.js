const logIn = require('../../helpers/logIn')
const invoice = require('../../pageobjects/sales/invoiceObject')
const allSales = require('../../pageobjects/sales/allSalesObjects')

describe('All Sales Filter Functionality Test', async () => {
  before(async () => {
    await logIn()
  })
  xit('Overdue Invoices Card Filter Should Work', async () => {
    await invoice.salesMenu.click()
    await allSales.overdueInvoicesCard.click()
    await browser.pause(5000)
    if (allSales.overdueStatusElement) {
      let statusText = await allSales.overdueStatusElement.getText()
      await expect(statusText).toBe('Overdue')
    } else {
      console.log('No data found')
    }
  })

  xit('Open Invoices Card Filter Should Work', async () => {
    await invoice.salesMenu.click()
    await allSales.openInvoicesCard.click()

    let table = await $('table')
    let allowedStatuses = ['Partial paid', 'Payment pending']
    let rows = await table.$$('tbody tr')

    for (const row of rows) {
      const cells = await row.$$('td')
      if (cells.length > 5) {
        const statusCell = cells[5]
        const statusDiv = await statusCell.$('div > div')
        const statusText = await statusDiv.getText()
        await expect(allowedStatuses).to.include(statusText)
      }
    }
  })

  xit('Receive Payment Card Filter Should Work', async () => {
    await invoice.salesMenu.click()
    await allSales.receivePaymentStatusCard.click()
    await browser.pause(5000)
    let table = await $('table')
    let multipleStatus = ['Unapplied', 'Closed', 'Paid', 'Partial applied']
    let rows = await table.$$('tbody tr')

    for (let row of rows) {
      let cells = await row.$$('td')
      if (cells.length > 5) {
        let statusCell = cells[5]
        let statusDiv = await statusCell.$('div > div')
        let statusText = await statusDiv.getText()
        console.log('==================>>>>>> ', statusText)
        await expect(multipleStatus).to.include(statusText)
      }
    }
  })

  it('Customer Name Filter Test', async()=>{
    await invoice.salesMenu.click()
    await allSales.customerFilter.click()
    await allSales.customerOptions.click()
    await allSales.filterButton.click()
    let names = await Promise.all(await allSales.customerNameElement.map(el=>el.getText()))
    await expect(names.some(name=>name.includes('Tanvir'))).toBe(true)

  })
})
