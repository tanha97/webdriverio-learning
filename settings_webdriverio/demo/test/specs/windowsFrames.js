describe("Windows and Frames Miscellanous", async()=>
{
   it("Parent and child windows switch",async()=>
   {

      browser.url("https://rahulshettyacademy.com/loginpagePractise/")
      $(".blinkingText").click()
      let handles= browser.getWindowHandle() // 2 windows handles
      browser.switchToWindow(handles[1])
      $("h1").getText()



   })





})