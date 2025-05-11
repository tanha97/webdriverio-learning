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
}
module.exports = new AdvanceCashOut()
