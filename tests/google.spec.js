const{test,expect} = require('@playwright/test')

test('Verify Page Title', async({page})=>{

    await page.goto('https://www.google.com/')

    const url = await page.url()
    console.log("The page title is: "+url) 

    const title = await page.title()
    console.log("The page title is: "+title)

    await expect(title).toHaveTitle("Google")

})
