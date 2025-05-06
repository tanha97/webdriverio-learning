class CashBook{

    get addCashbook(){
        return $('#tour_add_cashbook')
    }
    get mainCashbookField(){
        return $('.form-selector__control')
    }
    get cashbookOptions(){
        return $('.form-selector__option')
    }
    get cashbookName(){
        return $("input[name='name']")
    }
    get saveButton(){
        return $("button[name='Save']")
    }
    get toastMsg(){
        return $('.Toastify__toast-body')
    }

}
module.exports=new CashBook()