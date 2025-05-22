class AllSales {
  get overdueInvoicesCard() {
    return $(
      '//body[1]/div[1]/main[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]'
    )
  }
  get overdueStatusElement() {
    return $("//td[contains(@class,'')]//div[contains(text(),'Overdue')]")
  }
  get openInvoicesCard() {
    return $(
      "//body/div[@id='__next']/main[@class='flex h-full overflow-y-hidden text-xs admin font-Metropolis']/div[@id='main_content']/div[@class='w-full h-full bg-page overflow-hidden flex flex-col']/div[@id='scroller_content']/div[@id='scrollable_contents']/div/div/div[@class='flex md:grid md:grid-cols-2 lg:grid-cols-4 mb-4 gap-5 pt-2 pr-2 overflow-x-auto']/div[2]/div[1]"
    )
  }
  get openInvoicesStatusElement() {
    return $(
      "//td//div[normalize-space(text())='Partial paid' or normalize-space(text())='Payment pending']"
    )
  }
  get receivePaymentStatusCard() {
    return $("//div[@id='cash_card_default'][3]")
  }
  get receivePaymentStatusElement() {
    return $(
      "//td//div[normalize-space(text())='Unapplied' or normalize-space(text())='Closed' or normalize-space(text())='Paid' or normalize-space(text())='Partial applied']"
    )
  }
  get customerFilter() {
    return $(
      "//div[@data-name='customerId']//div[@class='filter-input-select__value-container filter-input-select__value-container--has-value css-1txcz3u']"
    )
  }
  get customerOptions() {
    return $(
      "//div[@class='filter-input-select__menu-list css-9ddmhi']//div[text()='Tanvir']"
    )
  }
  get filterButton() {
    return $("//button[@type='submit'][1]")
  }
  get customerNameElement() {
    return $$("//tr//span[text()='Tanvir']")
  }
}
module.exports = new AllSales()
