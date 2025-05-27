class Services{
    get serviceTab(){
        return $("//li[@id='tour_products_tab_service']")
    }
    get newServiceButton(){
        return $("(//button[@type='button'])[2]")
    }
    get categoryOptions(){
        return $("//div[@class='standard-select-dropdown__menu-list css-xui19z']//div[text()='Food']")
    }
    get searchFilter(){
        return $("(//input[@placeholder='Search'])")
    }
    get paginationText(){
        return $("//div[@class='pageinfo']")
    }

}
module.exports=new Services()