let expectChai = require ('chai').expect

describe('Ecommerce Testing', async () => 
    {
      it('End to End Test', async () => 
      {

        let products= ['iphone X', 'Blackberry']
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        await $('#username').setValue('rahulshettyacademy')
        await $('#password').setValue('learning')
        await $('#signInBtn').click()
        // Wait until checkout button is displayed
        await $(".btn-primary").waitForExist()
        await browser.pause(3000)
        // Wait until text is displayed
        await $("*=Checkout").waitForDisplayed() // When link text(<a) then use this CSS for select locators
        
        // Check Multiple Cards Name

        let cards= await $$(".card.h-100")
        for(let i=0; i<cards.length;i++)
        {
           let cardTitle= await cards[i].$("div h4 a")
           console.log(await cardTitle.getText()) // Print all the card title name
           if(await products.includes(await cardTitle.getText()))
           {
            await cards[i].$(".card-footer button").click()
           }
        }
        let checkoutButton= await $("*=Checkout")
           await checkoutButton.click()
           await browser.pause(3000)

        // Sum of products price

        let productPrices= await $$("tr td:nth-child(4) strong")

        // String to integer, Streams async mode
        
        let sumOfProductPrices= (await Promise.all (await productPrices.map(async (productPrices)=> parseInt((await productPrices.getText()).split(".")[1].trim()))))
        .reduce((accumulate,price)=>accumulate+price,0) //0+100000=100000, 50000+100000=1500000
        
        console.log(sumOfProductPrices)

        let totalValue= await $("h3 strong").getText()
        let totalIntValue= parseInt(totalValue.split(".")[1].trim())
        await expectChai(sumOfProductPrices).to.equal(totalIntValue)

        // Checkout selected products to purchase

        await $(".btn-success").click()
        await browser.pause(3000)
        await $("#country").setValue("ind")
        await $(".lds-ellipsis").waitForExist({reverse:true})
        await $("=India").click()
        await $("input[type=submit]").click()
        await expect($(".alert-dismissible")).toHaveText(("Success! Thank you! Your order will be delivered in next few weeks :-)."))
          // talk to nahid why error showing
      })


    })