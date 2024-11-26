describe("Windows and Frames Miscellanous", async()=>
{
   xit("Parent and child windows switch",async()=>
   {

      await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
      await $(".blinkingText").click()
      let handles= await browser.getWindowHandles() // 2 windows handles
      await browser.switchToWindow(handles[1])
      console.log(await $("h1").getText())
      console.log(await browser.getTitle())
      await browser.closeWindow()
      await browser.switchToWindow(handles[0])
      console.log(await browser.getTitle())

      // Switch to a new window
       await browser.newWindow("https:google.com")
       console.log(await browser.getTitle())
       await browser.pause(3000)
       await browser.switchWindow("https://rahulshettyacademy.com/loginpagePractise/")
       await $("#username").setValue("tanhatahity")
       await browser.pause(3000)

   })

   xit("Frames switches", async()=>
    {
      await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
      await $("#mousehover").scrollIntoView()
      console.log(await $$("a").length)//27
      browser.switchFrame(await $$("[id='courses-iframe']"))
      console.log(await $("=Courses").getTagName())
      console.log(await $$("a").length)// 118
      await browser.switchFrame(null)
      console.log(await $$("a").length)//27

    })

   
})