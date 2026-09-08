
const{test, expect} = require('@playwright/test');

test.use({viewport:{width:1920,height:1080}})

test('Verify Error Message', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByRole('textbox', {name: 'Username'}).fill('Admin')
    await page.getByRole('textbox', {name: 'Password'}).fill('admin')
    await page.locator('//button[@type="submit"]').click()
    const errorMessage = await page.locator('//p[@class="oxd-text oxd-text--p oxd-alert-content-text"]').textContent()
    await expect(errorMessage).toContain('Invalid credentials')
    console.log('Error Message:', errorMessage)
    expect(errorMessage.includes('Invalid credentials')).toBeTruthy()
    expect(errorMessage==='Invalid credentials').toBeTruthy()
})