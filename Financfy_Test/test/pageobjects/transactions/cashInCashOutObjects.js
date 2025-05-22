class Transactions {
  get transactionMenu() {
    return $('#Transactions')
  }
  get cashInTab() {
    return $('#tour_transactions_tab_Cashin')
  }
  get amountField() {
    return $('input[name=amount]')
  }
  get taxField() {
    return $(
      "//div[@data-name='tax_id']//div[@class='simple-selector__value-container css-1iruww9']"
    )
  }
  get taxOptions() {
    return $(
      "//div[@class='simple-selector__menu-list css-6qxrco']//div[text()='Tax agency@@ (3%)']"
    )
  }
  get contactField() {
    return $(
      "//div[@id='tour_cashout_contact@cash-in']//div[@class='simple-selector__value-container css-1iruww9']"
    )
  }
  get contactOptions() {
    return $(
      "//div[@class='simple-selector__menu-list css-6qxrco']//div[text()='Alina']"
    )
  }
  get receiveModeField() {
    return $(
      "//div[@id='tour_cashin_paymentmode@cash-in']//div[@class='simple-selector__value-container css-1iruww9']"
    )
  }
  get receiveModeOptions() {
    return $(
      "//div[@class='simple-selector__menu-list css-6qxrco']//div[text()='Cash']"
    )
  }
  get categoryField() {
    return $(
      "//div[@id='tour_cashin_category@cash-in']//div[@class='simple-selector__value-container css-1iruww9']"
    )
  }
  get categoryOptions() {
    return $(
      "//div[@class='simple-selector__menu-list css-6qxrco']//div[text()='Bonus']"
    )
  }
  get referenceNoField() {
    return $('input[name=reference_no]')
  }
  get voucherImageField() {
    return '#list_file_elm'
  }
  get imageSizeError() {
    return $(
      "div[class='absolute left-1 -bottom-3.5 text-2xs text-error-500 font-medium']"
    )
  }
  get saveButton() {
    return $("button[id='tour_save@cash-in']")
  }
  get cashOutTab() {
    return $('#tour_transactions_tab_Cashout')
  }
  get cashOutContactField() {
    return $(
      "//div[@id='tour_cashout_contact@cash-out']//div[@class='simple-selector__value-container css-1iruww9']"
    )
  }
  get paymentModeField() {
    return $(
      "//div[@id='tour_cashin_paymentmode@cash-out']//div[@class='simple-selector__value-container css-1iruww9']"
    )
  }
  get cashOutCategoryField() {
    return $(
      "//div[@id='tour_cashin_category@cash-out']//div[@class='simple-selector__value-container css-1iruww9']"
    )
  }
  get cashOutSaveButton() {
    return $("button[id='tour_save@cash-out']")
  }
}
module.exports = new Transactions()
