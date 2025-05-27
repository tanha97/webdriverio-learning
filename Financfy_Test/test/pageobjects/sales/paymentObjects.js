class Payment{
    get paymentOption(){
        return $("//ul[@class='simple-list ']//div[text()='Payment']")
    }
    get paymentField(){
        return $("//div[@data-name='payment_method']//div[@class='standard-select-dropdown__value-container standard-select-dropdown__value-container--has-value css-1p7kgf6']")
    }
    get paymentModeOption(){
        return $("//div[@class='standard-select-dropdown__menu-list css-xui19z']//div[text()='Bank Transaction']")
    }
    get invoice1stRow(){
        return $('//table/tbody/tr[1]/td[1]//input[@type="checkbox"]')
    }
    
    get saveAndCloseButton(){
        return $("//button[normalize-space()='Save & close']")
    }
    get confirmButton(){
        return $("(//button[@type='button'])//span[text()='Confirm']")
    }
    get invoiceActionButton(){
        return  $('//td[text()="BOO93"]/ancestor::tr//button')
    }
    get receivePaymentOption(){
        return $("//div[contains(@class,'action-pop-up')]//button[span[text()='Receive payment']]")
    }
    get amountReceivedField(){
        return $("(//input[@name='payment_amount'])[1]")
    }
    get paymentActionButton(){
        return $('//td[text()="68"]/ancestor::tr//button')
    }
    get editText(){
        return $("//div[contains(@class,'action-pop-up')]//button[span[text()='Edit']]")
    }
    get deleteText(){
        return $("//div[contains(@class,'action-pop-up')]//button[span[text()='Delete']]")
    }
    get deleteModalButton(){
        return $("(//button[contains(@type,'button')])[6]")
    }

    


}
module.exports= new Payment()