class BulkEntries {
  get bulkEntriesTab() {
    return $('#tour_transactions_tab_bulk-entries')
  }
  get amountField1() {
    return $(
      'body > div:nth-child(1) > main:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(3) > tr:nth-child(1) > td:nth-child(2) > div:nth-child(1) > div:nth-child(1) input[type="text"]'
    )
  }
  get typeField() {
    return $(
      "(//div[contains(@class,'mb-5 flex flex-col mb-2!')])[3]//div[@class='standard-select-dropdown__value-container css-1p7kgf6']"
    )
  }
  get typeOptionsForCashIn() {
    return $(
      "//div[@class='standard-select-dropdown__menu-list css-xui19z']//div[text()='Cash in']"
    )
  }
  get typeOptionsForCashOut() {
    return $(
      "//div[@class='standard-select-dropdown__menu-list css-xui19z']//div[text()='Cash out']"
    )
  }
  get contactField() {
    return $(
      "(//div[contains(@class,'mb-5 flex flex-col mb-2!')])[4]//div[@class='standard-select-dropdown__value-container css-1p7kgf6']"
    )
  }
  get contactOptions() {
    return $(
      '//div[contains(@class,"standard-select-dropdown__option")]//span[text()="Alina"]'
    )
  }
  get categoryField() {
    return $(
      '(//div[contains(@class,"mb-5 flex flex-col mb-2!")])[5]// div[@class="standard-select-dropdown__value-container css-1p7kgf6"]'
    )
  }
  get categoryOptions() {
    return $(
      '//div[contains(@class,"standard-select-dropdown__option")]//span[text()="Furniture"]'
    )
  }
  get paymentMode() {
    return $(
      '(//div[contains(@class,"mb-5 flex flex-col mb-2!")])[6]//div[@class="standard-select-dropdown__value-container css-1p7kgf6"]'
    )
  }
  get paymentModeOptions() {
    return $(
      '//div[contains(@class,"standard-select-dropdown__option")]//span[text()="Cash"]'
    )
  }
  get saveIcon() {
    return $("//*[name()='svg'][@class='w-3 h-3'])[1]")
  }
  get saveAndNewText() {
    return $("//button[normalize-space()='Save and print']")
  }
  get amountField2() {
    return $('(//tr)[3]//td[2]//input')
  }
  get typeField2() {
    return $(
      "(//tr)[3]//td[3]//div[contains(@class,'standard-select-dropdown__value-container css-1p7kgf6')]"
    )
  }
  get contactField2() {
    return $(
      "(//tr)[3]//td[4]//div[contains(@class,'standard-select-dropdown__value-container css-1p7kgf6')]"
    )
  }
  get categoryField2() {
    return $(
      "(//tr)[3]//td[5]//div[contains(@class,'standard-select-dropdown__value-container css-1p7kgf6')]"
    )
  }
  get paymentMode2() {
    return $(
      "(//tr)[3]//td[6]//div[contains(@class,'standard-select-dropdown__value-container css-1p7kgf6')]"
    )
  }
  get amountField3() {
    return $('(//tr)[4]//td[2]//input')
  }
  get typeField3() {
    return $(
      "(//tr)[4]//td[3]//div[contains(@class,'standard-select-dropdown__value-container css-1p7kgf6')]"
    )
  }
  get contactField3() {
    return $(
      "(//tr)[4]//td[4]//div[contains(@class,'standard-select-dropdown__value-container css-1p7kgf6')]"
    )
  }
  get categoryField3() {
    return $(
      "(//tr)[4]//td[5]//div[contains(@class,'standard-select-dropdown__value-container css-1p7kgf6')]"
    )
  }
  get paymentMode3() {
    return $(
      "(//tr)[4]//td[6]//div[contains(@class,'standard-select-dropdown__value-container css-1p7kgf6')]"
    )
  }
}
module.exports = new BulkEntries()
