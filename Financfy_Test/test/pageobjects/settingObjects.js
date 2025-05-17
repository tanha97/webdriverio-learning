class Settings{
    get settingsMenu(){
        return $("//a[@id='Settings']")
    }
    get contactTab(){
        return $("//li[@id='tour_settings_tab_contact']")
    }
    get addContactButton(){
        return $("//button[normalize-space()='Add contact']")
    }
    get nameField(){
        return $("//input[@name='name']")
    }
    get contactType(){
        return $("//div[@class=' css-1iruww9']")
    }
    get contactTypeOptions(){
        return $("//div[@class=' css-1yo0bqv-menu']//div[text()='Others']")
    }
    get contactFilterOptions(){
        return $("//div[@class='filter-select__menu-list css-xui19z']//div[text()='Others']")
    }
    get typeStatusElement(){
        return $("(//table[contains(@class,'table-fixed w-full action-btn-table')])//div[@title='Others']")
    }
    get contactActionButton(){
        return $("//tr[.//div[text()='Arishaaaaa']]//td[last()]//button")
    }
    get categoryTab(){
        return $("//li[@id='tour_settings_tab_category']")
    }
    get addCategoryButton(){
        return $("//button[normalize-space()='Add category']")
    }
    get categoryActionButton(){
        return $("//tr[.//div[text()='Home Expenses']]//td[last()]//button")
    }
    get paymentModeTab(){
        return $("//li[@id='tour_settings_tab_payment-modes']")
    }
    get addPaymentModeButton(){
        return $("//button[normalize-space()='Add payment mode']")
    }
    get paymentActionButton(){
        return $("//tr[.//div[text()='Cashless']]//td[last()]//button")
    }



}
module.exports = new Settings()