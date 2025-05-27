class Transaction{
    get reportsMenu(){
        return $("(//a[@id='Reports'])")
    }
    get transactionTab(){
        return $("(//a[normalize-space()='Transaction'])")
    }
    get previewButton(){
        return $("//form[@class='grid grid-cols-2 md:flex justify-start items-end gap-2 text-primary flex-wrap mt-5 mb-3']//button[2]")
    }
    get transactionTypeFilter(){
        return $("(//div[contains(@class,'filter-input-select__control css-11zygfv-control')])[2]")
    }
    get transactionOptions(){
        return $("//div[@class='filter-input-select__menu-list filter-input-select__menu-list--is-multi css-xui19z']//div[text()='Cash in']")

    }
}
module.exports=new Transaction()
