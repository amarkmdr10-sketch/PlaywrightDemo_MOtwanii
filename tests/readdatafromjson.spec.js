

const{test,expect} = require('@playwright/test')

const testData = JSON.parse(JSON.stringify(require('../testdata.json')))

test('read data from json', async({page})=>{

    await page.goto('https://freelance-learn-automation.vercel.app/login')
    await page.locator("//input[@id='email1']").fill(testData.username)
    await page.locator("//input[@id='password1']").fill(testData.password)

})