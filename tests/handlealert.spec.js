const{test,expect} = require('@playwright/test')

test.skip('Handlingalerts',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog',async(d)=>{
        expect(d.message()).toContain('I am a JS Alert')
        await d.accept()
    })
    await page.locator("//button[text()='Click for JS Alert']").click()

})

test.skip('Handle confirm box',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog',async(dialogwindow)=>{
        expect(dialogwindow.message()).toContain("Confirm")
        expect(dialogwindow.message()).toContain("I am a JS Confirm")
        await dialogwindow.accept()
    })
    await page.locator("//button[text()='Click for JS Confirm']").click()

})

test("Handle prompt box",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog',async(dialogWindow)=>{
        expect(dialogWindow.type()).toContain("prompt")
        expect(dialogWindow.message()).toContain("I am a JS prompt")
        await dialogWindow.accept("Amar")
    })
    await page.locator("//button[text()='Click for JS Prompt']").click()
    await page.waitForTimeout(2000)

})