class AdvanceCashOut {
  get advanceCashOutTab() {
    return $("//div[@id='Advance cash out']")
  }
  get advanceCashOutButton() {
    return $("//button[@id='tour_add_advance']")
  }
  get contactField() {
    return $(
      "//div[@id='tour_advance_contact@advanceForm']//div[@class='simple-selector__value-container css-1iruww9']"
    )
  }
  get paymentModeField() {
    return $(
      "//div[@id='tour_advance_payment_mode@advanceForm']//div[@class='simple-selector__value-container css-1iruww9']"
    )
  }
  get amountField() {
    return $("input[name='advance']")
  }
  get saveButton() {
    return $("//button[@id='tour_advance_save']")
  }
  get EditActionButton(){
    return $("//tr[contains(@class, 'table-data-rowhover')][1]//td[last()]//button")
  }
  get addCashOutText(){
    return $("//button[normalize-space()='Add cash out']")
  }
  get dateField(){
    return $("input[name='transaction_at']")
  }
  get dateOptions(){
    return $("(//div[@aria-label='Choose Sunday, May 31th, 2025'])")
  }
  
  get taxField(){
    return $("//div[contains(@class,'mb-5 flex flex-col mb-0!')]//div[contains(@class,'css-157a2eo-container')]//div[@class='simple-selector__value-container css-1iruww9']")
  }
  get taxOptions(){
    return $(
      "//div[@class='simple-selector__menu-list css-6qxrco']//div[text()='VAT (4%)']")
  }
  get toastMsg(){
    return $("//div[contains(@class,'Toastify')]") 
    // $("//div[@class='Toastify__toast-body']//div[@text()='Cash in successful']")
  }
  get actionButton(){
    return $("(//tr[contains(@class, 'table-data-rowhover')])[1]//td[last()]//button")
    //$("//tr[.//td[text()='Anu']]//td[last()]//button")
  }
  get advanceReturnText(){
    return $("//button[normalize-space()='Advance return']")
  }
  get advancePaymentMode(){
    return $(
      "//div[@id='tour_advance_payment_mode@advanceForm']//div[@class='simple-selector__value-container css-1iruww9']"
    )
  }
  get contactFilterField(){
    return $("//div[@data-name='contact_id']//div[@class='flex css-1p7kgf6']")
  }
  get contactOptions() {
    return $(
      "//div[@class=' css-1gnzukr-option']//div[text()='Alina']")
  }
  get statusElements(){
    return $("(//td[contains(@class,'')])")
  }
  get deleteActionButton(){
    return $("(//tr[contains(@class, 'table-data-rowhover')])[2]//td[last()]//button")
  }
  get paymentModeFilterField(){
    return $("//div[@data-name='payment_mode_id']//div[@class='flex css-1p7kgf6']")
  }
  get paymentOptions(){
    return $("//div[@class=' css-1gnzukr-option']//div[text()='Bank Transaction']")
  }
  get filterButton(){
    return $("//button[@type='button']//span[text()='Filter']")
  }

  
}
module.exports = new AdvanceCashOut()
