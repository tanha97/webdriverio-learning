module.exports = async function logIn(){
require('dotenv').config()
await browser.url(process.env.BASE_URL)

//LogIn Steps
await $('input[name=mobileNumber]').setValue(process.env.MOBILE_NUMBER)
await $('input[name=password]').setValue(process.env.PASSWORD)
await $("//button[@type='submit']").click()
}


