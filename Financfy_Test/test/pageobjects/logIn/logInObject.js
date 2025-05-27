class LogIn {
  get stagingURL() {
    return 'http://invoice.staging.financfy.com:3052'
  }
  get mobileNumber() {
    return $('input[name=mobileNumber]')
  }
  get password() {
    return $('input[name=password]')
  }
  get signinButton() {
    return $("//button[@type='submit']")
  }
  
  get helloText() {
    return $('.text-black.font-semibold.text-sm.leading-none')
  }
}
module.exports = new LogIn()

