let expectChai= require('chai').expect

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
    // let radioButtons= await $$(".customradio")
    // let userOption= await $$(".customradio")[1]
    // await userOption.$("span").click()  
    // await browser.pause(4000)

    // let modal=await $(".modal-body")
    // await modal.waitForDisplayed()
    // await $("#cancelBtn").click()
    // await browser.pause(3000)
    // // validate admin radio button is selected

    // let selectButton = await $$(".customradio")[0].$("input").isSelected()
    // console.log(`${selectButton}\n\n\n`)

    // await userOption.$("span").click();
    // await browser.pause(4000)

    // await modal.waitForDisplayed()
    // await $("#okayBtn").click()

    // //console.log(await $$(".customradio")[1].$("input").isSelected())
    // // Validate pop not shown up when select admin button
    // await $(".customradio")[0].$("span").click()
    // await expect(modal).not.toBeDisplayed()

    // Static dropdown select

    let dropdown= await $("select.form-control") // Always use select in a class to select dropdown
    await dropdown.selectByAttribute("value","teach")
    await browser.pause(3000)
    await dropdown.selectByVisibleText("Consultant")
    await browser.pause(3000)
    await dropdown.selectByIndex(0)
    await browser.pause(3000)

    // Check by default correct text is selected
    console.log(await dropdown.getValue()) // Can use getText function to check selected text

    // Chai assertions
    await expectChai(await dropdown.getValue()).to.equal("stud")

    




  })
 
  
})
