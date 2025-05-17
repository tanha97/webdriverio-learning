class Member{
    get membersMenu(){
        return $("//a[@id='Members']")
    }
    get searchField(){
        return $("//input[@placeholder='Search']")
    }
    get nameElement(){
        return $("td div.flex-wrap span")
    }
    get addMemberButton(){
        return $("//button[@id='tour_add_member']")
    }
    get mobileNumberField(){
        return $("//input[@name='mobile']")
    }
    get memberRoleField(){
        return $("//div[@class=' css-1p7kgf6']")
    }
    get roleOptions(){
        return $("//div[@class=' css-1xrkbpt-menu']//div[text()='Cash Officer']")
    }
    get actionButton(){
        return $("(//tr[contains(@class, 'table-data-rowhover')])[1]//td[last()]//button")
    }


}
module.exports= new Member()