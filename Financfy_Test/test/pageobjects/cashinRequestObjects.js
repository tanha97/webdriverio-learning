class CashInRequest {
  get cashbookSelectionField() {
    return $(
      "//div[@class='simple-selector__value-container simple-selector__value-container--has-value css-1wrsky8']"
    )
  }
  get cashbookList() {
    return $(
      "//div[@class='simple-selector__menu-list css-hh161']//div[contains(text(), \"bappy's cashbook\")]"
    )
  }
  get cashInRequestTab() {
    return $("//div[@id='Cash in request']")
  }
  get cashInRequestDropdown() {
    return $("//div[@id='tour_requisition_dropdown']")
  }
  get cashInRequestButton() {
    return $("//button[@id='tour_add_advance_requisition']")
  }
  get amountField() {
    return $("input[name='requested_amount']")
  }
  get categoryField() {
    return $(
      "//div[@data-name='category_id']//div[@class='simple-selector__value-container css-1iruww9']"
    )
  }
  get paymentModeField() {
    return $(
      "//div[@data-name='payment_mode_id']//div[@class='simple-selector__value-container css-1iruww9']"
    )
  }
  get remarksField() {
    return $("//textarea[@name='remarks']")
  }
  get saveButton() {
    return $("//button[@id='tour_save@sent']")
  }
}
module.exports = new CashInRequest()
