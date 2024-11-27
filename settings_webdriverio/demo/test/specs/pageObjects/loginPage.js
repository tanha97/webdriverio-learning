class loginPage
{

get userName()
{
    return $('input[name=username]')
}

get password()
{
    return $('#password')
}
get signIn()
{
    return $('#signInBtn')
}

async Login(userName,password)
{
    await this.userName.setValue(userName)
    await this.password.setValue(password)
    await this.signIn.click()
}


}

module.exports= new loginPage()

