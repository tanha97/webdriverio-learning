/*describe('Ecommerce Testing', async () => 
{
  it('Login failed page', async () => 
  {
    //webdriverio Async (Sync)
    await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
    console.log(await browser.getTitle())

    await $('input[name=username]').setValue('rahulshettyacademy')
    await browser.pause(3000)
    await $('#username').setValue('rahulshettyacademy two')
    //await browser.pause(3000)
    await $('#password').setValue('learning')
    await $('#signInBtn').click()

    let text = await $('.alert-danger').getText()
    
    console.log(`\n\n----------- \n${text}\n---------------\n\n`)

    await expect(browser).toHaveTitle('Rahul Shetty Academy')

    // waitUntil

    await browser.waitUntil(async()=> await $('#signInBtn').getAttribute('value') == 'Sign In',
    {
        timeout: 5000,
        timeoutMsg: 'Error message is not showing up'
    })           
  
    console.log(`\n\n----------- \n${text}\n---------------\n\n`)

    // textContaining

    await expect($('p')).toHaveText('(username is rahulshettyacademy and Password is learning)')

  })
})*/
