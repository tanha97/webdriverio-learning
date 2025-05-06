class LoginPage
{

get userName()
    {
        return $('input[name=username]')
    }

get password()
    {
        return $('#password')
    }
get alert()
    {
        return $('.alert-danger')
    }

get signIn()
    {
        return $('#signInBtn')
    }
get textInfo()
    {
        return $('p')
    }

async Login(userName,password)
{
    await this.userName.setValue(userName)
    await this.password.setValue(password)
    await this.alert.getText()
    await this.signIn.click()
}


}

module.exports= new LoginPage()

