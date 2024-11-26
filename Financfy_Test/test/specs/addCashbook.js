describe('Financfy Automation Test', async () => 
    {
        it("Create a New Cashbook", async()=>
        {
        await browser.url('https://accounts.financfy.com/')
        await $('input[name=mobileNumber]').setValue('01521257203')
        await browser.pause(3000)
        await $('input[name=password]').setValue('A12345678a')
        let signIn= $('.vs-btn.vs-btn-primary')
        await signIn.waitForClickable({ timeout: 5000 });
        await signIn.click()

        // Wait until Hello text is displayed

        await $(".text-sm").waitForExist()

        await expect(browser).toHaveUrl(expect.stringContaining("dashboard"))
        await expect(browser).toHaveTitle("Dashboard | Financfy")
            
        // Add a new cashbook

        await $("#tour_add_cashbook").click()
        await browser.pause(3000)
        await $(".form-selector__control").click()
        await $(".form-selector__option").click()
        await browser.pause(3000)
        await $(".form-selector__value-container").click()
        await browser.pause(3000)
        await $("input[name='name']").setValue("New CashBook")
        await $("button[name='Save']").click()
        await browser.pause(3000)

        let toastMsg= await $(".Toastify__toast-body").getText()
        await expect(toastMsg).toBe("Branch cash book created successfully.")       
              
        })
        
        
        
        
        
        
        
        
     
    
    
    
    
    
    
    
    
    })

