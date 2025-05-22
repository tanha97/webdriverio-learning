class Products{
    get productsMenu(){
        return $("//a[@id='Products/services']")
    }
    get newProductButton(){
        return $("//div[@class='flex gap-2']//button[@type='button']")
    }
    get nameField(){
        return $("//input[@name='name']")
    }
    get categoryField(){
        return $("//div[@data-name='category_id']//div[@class='standard-select-dropdown__value-container css-1p7kgf6']")
    }
    get categoryOptions(){
        return $("//div[@class='standard-select-dropdown__menu-list css-xui19z']//div[text()='Product category@@']")
    }
    get primaryUnitField(){
        return $("//div[@data-name='unit_id']//div[@class='standard-select-dropdown__input-container css-k3q8tf']")
    }
    get unitOptions(){
        return $("//div[@class='standard-select-dropdown__menu-list css-xui19z']//div[text()='Piece']")
    }
    get salesPriceField(){
        return $("//input[@name='selling_price']")
    }
    get purchaseInformationText(){
        return $("//label[normalize-space()='Purchase information']")
    }
    get costPriceField(){
        return $("//input[@name='purchase_price']")
    }
    get saveButton(){
        return $("//button[@form='product_form']")
    }

}
module.exports=new Products()