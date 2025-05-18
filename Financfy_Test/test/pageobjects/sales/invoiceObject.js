class Invoice {
  get salesMenu() {
    return $("//a[@id='Sales']")
  }
  get newTransactionButton() {
    return $("//div[@class='flex justify-end gap-2 items-end']//button[1]")
  }
  get transactionOptions() {
    return $("//ul[@class='simple-list ']//div[text()='Invoice']")
  }
  get customerField() {
    return $(
      "//div[@id='popover_container']//div[contains(@class,'standard-select-dropdown__value-container css-1p7kgf6')]"
    )
  }
  get customerOptions() {
    return $(
      "//div[@class='select-size-small standard-select-dropdown__menu css-1xrkbpt-menu']//span[text()='Tanvir']"
    )
  }
  get termsField() {
    return $(
      "//div[@id='terms_container']//div[contains(@class, 'standard-select-dropdown__value-container')]"
    )
  }
  get expiredDateField() {
    return $("(//input[@name='due_date'])[1]")
  }
  get dateOptions() {
    return $("(//div[@aria-label='Choose Saturday, May 24th, 2025'])")
  }
  get productRow1() {
    return $('//*[@id="parent_container_lineitem_table"]/details/div/div[1]/div[1]/table/tbody/tr[1]/td[3]/div[1]/div[1]')
  }

  get productOptions1() {
    return $("//div[contains(@class, 'standard-select-dropdown__menu-list css-xui19z')]//div[text()='lereve']")
  }
  get qtyRow1() {
    return $("//table//tbody/tr[1]/td[5]//input")
  }
  get productRow2(){
    return $('//*[@id="parent_container_lineitem_table"]/details/div/div[1]/div[1]/table/tbody/tr[2]/td[3]/div[1]/div[1]')
  }
  get productOptions2(){
    return $("//div[contains(@class, 'standard-select-dropdown__menu-list css-xui19z')]//div[text()='Tanha Baby']")
  }
  get qtyRow2(){
    return $("//table//tbody/tr[2]/td[5]//input")
  }
  get addLineButton() {
    return $("//div[contains(@class,'flex gap-4')]//button[1]")
  }
  get shippingCostField(){
    return $("//input[contains(@name,'shipping_cost')]")
  }
  get saveAndCloseButton(){
    return $("//button[normalize-space()='Save & close']")
  }
  get toastMsg(){
    return $("//div[contains(@class,'Toastify')]")
  }
}
module.exports = new Invoice()
