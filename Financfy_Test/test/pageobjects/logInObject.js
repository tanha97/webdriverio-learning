class LogIn {
  get stagingURL() {
    return 'http://invoice.staging.financfy.com:3052/auth/login?callbackUrl=%2Fdashboard'
  }
  get mobileNumber() {
    return $('input[name=mobileNumber]')
  }
  get password() {
    return $('input[name=password]')
  }
  get signinButton() {
    return $('.vs-btn.vs-btn-primary')
  }
  get toastText() {
    return $('.Toastify__toast-body')
  }
  get helloText() {
    return $('.text-black.font-semibold.text-sm.leading-none')
  }
}
module.exports = new LogIn()
//Toastify__toast-container Toastify__toast-container--top-right font-Metropolis simple-toast
