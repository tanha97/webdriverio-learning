// describe('Ecommerce Testing', async () => 
//     {
//       xit('Login failed page', async () => 
//       {
//         //webdriverio Async (Sync)
//         await browser.url('https://accounts.financfy.com/')
//         await browser.pause(3000); // pauses for 3 seconds
//         console.log("\n\n==================================\n")
//         console.log(await browser.getTitle())
//         console.log("====================================\n\n")
    
//         await $('input[name=mobileNumber]').setValue('01912-969336')
//         await browser.pause(3000)
        
//         await $('input[name=password]').setValue('A12345678as')
//         let signIn= $('.vs-btn.vs-btn-primary');
//         await signIn.waitForClickable({ timeout: 5000 });
//         await signIn.click()
//         await browser.pause(3000)
        
//         let text = await $('.Toastify__toast-body').getText()
    
//         console.log(`\n\n----------- \n${text}\n---------------\n\n`)
    
//       await expect(text).toBe('password or code is incorrect, you have 4 remaining chances')
//       await $('.text-primary').waitForDisplayed()

//       //textContaining
      
//       await expect($('.flex.gap-1.align-baseline.text-primary')).toHaveText("Don't have an account?\nSign up")
      
//       })

//       it('Login success title page', async () =>
//       {
//         await browser.url('https://accounts.financfy.com/')
//         await $('input[name=mobileNumber]').setValue('01912-969336')
//         await browser.pause(3000)
//         await $('input[name=password]').setValue('A12345678a')
//         let signIn= $('.vs-btn.vs-btn-primary')
//         await signIn.waitForClickable({ timeout: 5000 });
//         await signIn.click()

//         // Wait until Hello text is displayed

//         await $(".text-sm").waitForExist()

//         await expect(browser).toHaveUrl(expect.stringContaining("dashboard"))
//         await expect(browser).toHaveTitle("Dashboard | Financfy")


//       })
//     })
    