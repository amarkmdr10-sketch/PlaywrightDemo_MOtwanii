const{test,expect}=require('@playwright/test')

test('Handle multi tabs',async({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const [newPage] = await Promise.all
      (
        [

           context.waitForEvent('page'),
           page.locator("(//a[contains(@href, 'facebook')])[1]").click()

        ]
      )
    await page.waitForTimeout(5000)  
    await newPage.locator("(//input[@name='email'])[2]").fill("test@example.com")
    await newPage.close()
    await page.waitForTimeout(5000)
    await page.locator("//input[@id='email1']").fill("admin@email.com") 
    await page.waitForTimeout(5000)

})