
const{test,expect} = require('@playwright/test')
const LoginPage = require('../pages/loginpage')
const HomePage = require('../pages/homepage')


test('login to application using POM',async({page})=>{

await page.goto('https://freelance-learn-automation.vercel.app/login')

const loginPage = new LoginPage(page)

await loginPage.loginToApplication("amarkmdr1@gmail.com","amar@1234")

const homepage=new HomePage(page)

await  homepage.verifyCartOption()

await  homepage.logOut()

await loginPage.verifySigninHeader()

})
