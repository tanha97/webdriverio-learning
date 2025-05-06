let expectChai = require ('chai').expect

describe('Functional Testing on Application', async () => 
    {
      xit('Scrolling & Mouse hover', async () =>
      {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $("#mousehover").scrollIntoView()
        browser.pause(3000)
        await $("#mousehover").moveTo()
        browser.pause(3000)
        await $("=Top").click()
        browser.pause(3000)
      })


      xit('Handle Browser pop up HTML modal', async () => // this part is failed for unknown reason
      {
        await browser.url("https://only-testing-blog.blogspot.com/2014/09/selectable.html")
        await $("button").doubleClick()
        console.log(await browser.isAlertOpen())
        expectChai(await browser.isAlertOpen()).to.be.true
        expectChai(await browser.getAlertText()).to.equal("You double clicked me.. Thank You..")
        await browser.acceptAlert()
        await browser.pause(3000)

      })

      
      xit('Web Tables Sorting Validation-Smoke Testing', async () =>
      {

        await browser.url("/seleniumPractise/#/offers")
        await $("tr th:nth-child(1)").click()
        await browser.pause(3000)
        // Retrive list of veg/fruit name into array A
        // Sort the array A -> Array B
        // Compare array A & array B

        let veggiesLocators= await $$("tr td:nth-child(1)") // collection of all veggies locators
        let originalVeggiesNames= await veggiesLocators.map(async veggies=>await veggies.getText()) // collect all the veggies name
        console.log(originalVeggiesNames)

        let veggies= originalVeggiesNames.slice()
        console.log(veggies) /// Understand to nahid later, why this function is applied

        let sortedVeggies= await veggies.sort()
        console.log(sortedVeggies)
        await expectChai(originalVeggiesNames).to.eql(sortedVeggies)

      })

      //When enter veggie name one item should be showed
     
      xit('Web Tables Search Filter Validation', async () =>
        {
          await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
          await $("input[type='search']").setValue("tomato")
          browser.pause(3000)
          let tableLocators= await $$("tr td:nth-child(1)")
          await expect(tableLocators).toBeElementsArrayOfSize({eq:1})
       //Should match the text what you input in the box
          console.log("\n\n\n********************************\n\n\n")
          console.log(await tableLocators[0].getText())
          browser.pause(3000)
          await expect(tableLocators[0]).toHaveText("Tomato")

        })


    })