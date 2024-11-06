describe('Ecommerce Testing', async () => 
{

 it('Login success page title', async () =>
  {
    await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
    await $('#username').setValue('rahulshettyacademy')
    await $('#password').setValue('learning')
    await browser.pause(3000)
    // If multiple element is exists in a class, user $$
    // var radioButtons= $$(".radiotextsty")
    // var userOption= radioButtons[1]
    // userOption.click() 
    // changing locator- If any class is not exist then use parent to child element 
    let radioButtons= $$(".customradio")
    let userOption= radioButtons[1]
    userOption.$("span").click()  
    await browser.pause(4000)
    let modal=await $(".modal-body")
    await modal.waitForDisplayed()
    await $("#cancelBtn").click()
    await browser.pause(3000)
    let selectButton = await $$(".customradio")[0].$("input").isSelected()
    console.log(`${selectButton}\n\n\n`)
    await userOption.$("span").click()
    await modal.waitForDisplayed()
    await $("#okayBtn").click()
    //console.log(await $$(".customradio")[1].$("input").isSelected())
    // Validate pop not shown up when select adimn button
    await $(".customradio")[0].$("span").click()
    await expect(modal).not.toBeDisplayed()




  })

  
})
