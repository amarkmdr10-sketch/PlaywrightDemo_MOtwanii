 const{test,expect} = require('@playwright/test')

 test('handle auto suggestions', async({page})=>{
 
    await page.goto('https://www.google.com/')
    await page.locator("textarea[name='q']").type('Mukesh Otwani')
    await page.waitForSelector("//li[@role='presentation']")
    await page.waitForTimeout(2000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(2000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(2000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000)
})


test.only('handle auto suggestions1', async({page})=>{
 
    await page.goto('https://www.google.com/')
    await page.locator("textarea[name='q']").type('Mukesh Otwani')
    await page.waitForSelector("//li[@role='presentation']") 

    const elements = await page.$$("li[role='presentation']")

    for(let i=0;i<elements.length;i++){
        const text = await elements[i].textContent()
         if(text.includes('playwright'))
         {
            await elements[i].click()
            break 
         }

    }
})