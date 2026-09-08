const{test,expect} = require('@playwright/test')

test('fileupload',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/upload')
    await page.locator("#file-upload").setInputFiles("./uploads/screenshot1.png")
    await page.locator("//input[@value='Upload']").click()
    await page.waitForTimeout(2000)
    await expect(page.locator("//h3[text()='File Uploaded!']")).toHaveText('File Uploaded!')
     











})