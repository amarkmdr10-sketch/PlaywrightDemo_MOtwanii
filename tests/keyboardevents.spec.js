const {test,expect} = require('@playwright/test')

test('keyboard event',async({page})=>{
 
    await page.goto('https://www.google.com/')
    await page.locator("textarea[name='q']").focus()
    await page.keyboard.type('Amaranath Komanduru!')
    await page.keyboard.press("ArrowLeft")
    await page.keyboard.down("Shift")
    

    for(let i=0;i<9;i++){
        await page.keyboard.press("ArrowLeft")
    }
    await page.keyboard.up("Shift")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Backspace") 




   /* await page.locator("textarea[name='q']").fill('Amaranath Komanduru')

    await page.keyboard.press("Control+A")
    await page.waitForTimeout(2000)

    await page.keyboard.press("Control+C")
    await page.waitForTimeout(2000)

    await page.keyboard.press("Backspace")
    await page.waitForTimeout(2000)

    await page.keyboard.press("Control+V")
    await page.waitForTimeout(2000) */


})