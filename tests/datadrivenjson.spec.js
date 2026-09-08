
const{test,expect} = require('@playwright/test')

const testData = JSON.parse(JSON.stringify(require('../testlogin.json')))

for (const data of testData) {
   test.describe(`Login with user ${data.id}`, function () {
      test(`Login to application for user ${data.id}`, async ({ page }) => {
         await page.goto("https://freelance-learn-automation.vercel.app/login")
         await page.locator("//input[@id='email1']").fill(data.username)
         await page.locator("//input[@id='password1']").fill(data.password)
      })
   })
}

