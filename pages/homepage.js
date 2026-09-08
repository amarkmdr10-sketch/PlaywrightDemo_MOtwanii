const { expect } = require('@playwright/test')

class HomePage{

    //locators
    constructor(page){
        this.page=page
        this.menu="//img[@alt='menu']"
        this.cartOption="//button[text()='Cart']"
        this.signoutButton="//button[text()='Sign out']"
    }

    async verifyCartOption(){
        await expect(this.page.locator(this.cartOption)).toBeVisible()
    }

    //methods
    async logOut(){
  
         await this.page.click(this.menu)
         await this.page.click(this.signoutButton)
    }
}

module.exports=HomePage;