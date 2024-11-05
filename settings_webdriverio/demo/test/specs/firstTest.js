// describe('Ecommerce Testing', async () => 
// {
//   xit('Login failed page', async () => 
//   {
//     //webdriverio Async (Sync)
//     await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
//     console.log(await browser.getTitle())

//     await $('input[name=username]').setValue('rahulshettyacademy')
//     await browser.pause(3000)
//     await $('#username').setValue('rahulshettyacademy two')
//     //await browser.pause(3000)
//     await $('#password').setValue('learning')
//     await $('#signInBtn').click()

//     let text = await $('.alert-danger').getText()
    
//     console.log(`\n\n----------- \n${text}\n---------------\n\n`)

//     await expect(browser).toHaveTitle('Rahul Shetty Academy')

//     // waitUntil

//     await browser.waitUntil(async()=> await $('#signInBtn').getAttribute('value') == 'Sign In',
//     {
//         timeout: 5000,
//         timeoutMsg: 'Error message is not showing up'
//     })           
  
//     console.log(`\n\n----------- \n${text}\n---------------\n\n`)

//     // textContaining

   
//     await expect($('p')).toHaveText('(username is rahulshettyacademy and Password is learning)')

//   })

//   it('Login success page title', async () =>
//   {
//     await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
//     await $('#username').setValue('rahulshettyacademy')
//     await $('#password').setValue('learning')
//     await $('#signInBtn').click()
//     // Wait until checkout button is displayed
//     await $(".btn-primary").waitForExist()
//     await expect(browser).toHaveUrl(expect.stringContaining('shop'))
//     await expect(browser).toHaveTitle('ProtoCommerce')
//   })

  
// })
