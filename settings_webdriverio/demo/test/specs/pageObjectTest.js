let loginPage = require('../pageObjects/loginPage')
let shopPage = require('../pageObjects/shopPage')
let reviewPage = require('../pageObjects/reviewPage')
let expectChai = require('chai').expect
let fs = require('fs') // Create JSON file to string
let credentials = JSON.parse(fs.readFileSync('test/testData/loginTest.json')) // How to add JSON file
let productsName = JSON.parse(fs.readFileSync('test/testData/end2EndTest.json'))

describe('Ecommerce Testing', async () =>
{
  credentials.forEach(({ username, password }) => 
  {
    it('Login failed page', async () =>
    {
      
      //webdriverio Async (Sync)
      await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
      console.log(await browser.getTitle())

      await loginPage.Login(username, password)

      let text = await loginPage.alert

      console.log(`\n\n----------- \n${text}\n---------------\n\n`)

      // waitUntil
      await browser.waitUntil(
        async () => (await $('#signInBtn').getAttribute('value')) == 'Sign In',
        {
          timeout: 5000,
          timeoutMsg: 'Error message is not showing up',
        }
      )
      console.log(`\n\n----------- \n${text}\n---------------\n\n`)
      // textContaining
      await expect(await loginPage.textInfo).toHaveText('(username is rahulshettyacademy and Password is learning)')
    })
  })

  productsName.forEach( ({products}) =>
 {
console.log("/n/n/n**********************************/n/n/n")
  it('End to End Test', async () => {
    // let products = ['iphone X', 'Blackberry']
    await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
    await loginPage.Login('rahulshettyacademy', 'learning')
    await shopPage.checkout.waitForExist()
    await browser.pause(3000)
    await shopPage.checkout.waitForDisplayed() // When link text(<a) then use this CSS for select locators

    // Check Multiple Cards Name
    await shopPage.addProductsToCard(products)
    await shopPage.checkout.click()
    await browser.pause(3000)

    // Sum of products price

    let sumOfProductPrices = await reviewPage.sumOfProducts()
    console.log(sumOfProductPrices)
    let totalIntValue = await reviewPage.totalFormattedPrice()
    await expectChai(sumOfProductPrices).to.equal(totalIntValue)

    // Checkout selected products to purchase

    await $('.btn-success').click()
    await browser.pause(3000)
    await $('#country').setValue('ind')
    await $('.lds-ellipsis').waitForExist({ reverse: true })
    await $('=India').click()
    await $('input[type=submit]').click()
    await expect($('.alert-dismissible')).toHaveText(
      'Success! Thank you! Your order will be delivered in next few weeks :-).'
    )
    // talk to nahid why error showing
  })
 })

})
