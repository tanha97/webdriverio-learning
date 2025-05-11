class CashTransfer {
  get transferTab() {
    return $('#tour_transactions_tab_cash-transfer')
  }
  get cashTransferButton() {
    return $("//button[@id='tour_add_advance_requisition']")
  }
  get cashTransferTo() {
    return $(
      "(//div[@class='simple-selector__value-container simple-selector__value-container--has-value css-1iruww9'])[1]"
    )
  }
  get transferToOptions() {
    return $(
      "//div[@class='simple-selector__menu-list css-6qxrco']//div[contains(text(), \"bappy's cashbook\")]"
    )
  }
  get dateField() {
    return $("//input[@name='date']")
  }
  get dateOptions() {
    return $("(//div[@aria-label='Choose Saturday, May 10th, 2025'])[1]")
  }
  get transferViaField() {
    return $(
      "(//div[@data-name='payment_mode_id']//div[@class='simple-selector__value-container css-1iruww9'])"
    )
  }
  get remarksField() {
    return $("//textarea[@id='remarks_text_area']")
  }
  get saveButton() {
    return $("button[type='submit']")
  }
}

module.exports = new CashTransfer()
