class Customer{
    get customerMenu(){
        return $("//a[@id='Customers']")
    }
    get addCustomer(){
        return $("//button[normalize-space()='New customer']")
    }
    
    get displayNameField(){
        return $("//input[@name='display_name']")
    }
    get currencyTab(){
        return $("//li[@id='tour_customer_tab_currency']")
    }
    get currencyField(){
        return $("//div[@class=' css-67xe0v']")
    }
    get currencyOptions(){
        return $('div.css-1mjuh8s-option:nth-child(2)')
    }
    get customerActionButton(){
        return $("//tr[.//span[text()='Tanvir']]//td[last()]//button")
    }
    get emailField(){
        return $("//input[@name='email']")
    }
    get createInvoiceText(){
        return $("//button[normalize-space()='Create invoice']")
    }
    
}
module.exports= new Customer()