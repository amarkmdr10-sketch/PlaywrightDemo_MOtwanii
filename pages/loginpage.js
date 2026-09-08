const { expect } = require('@playwright/test')

class loginPage{

    //locators
    constructor(page){
        this.page=page
        this.username = "//input[@name='email1']"
        this.password = "//input[@name='password1']"
        this.loginButton = "//button[text()='Sign in']" 
        this.header="//h2[text()='Sign In']"
    }

    //methods
    async loginToApplication(username,password){       
        await this.page.fill(this.username,username)
        await this.page.fill(this.password,password)
        await this.page.click(this.loginButton)  
    }

    async verifySigninHeader(){
        await expect(this.page.locator(this.header)).toBeVisible()
    }

}
module.exports = loginPage;


