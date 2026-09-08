# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: verifyerrorMessage.spec.js >> Verify Error Message
- Location: tests\verifyerrorMessage.spec.js:6:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Username')
    - waiting for "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

```

# Test source

```ts
  1  | 
  2  | const{test, expect} = require('@playwright/test');
  3  | 
  4  | test.use({viewport:{width:1920,height:1080}})
  5  | 
  6  | test('Verify Error Message', async({page})=>{
  7  |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
> 8  |     await page.getByPlaceholder('Username').fill('Admin')
     |                                             ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  9  |     await page.getByPlaceholder('Password').fill('admin')
  10 |     await page.locator('//button[@type="submit"]').click()
  11 |     const errorMessage = await page.locator('//p[@class="oxd-text oxd-text--p oxd-alert-content-text"]').textContent()
  12 |     await expect(errorMessage).toContain('Invalid credentials')
  13 |     console.log('Error Message:', errorMessage)
  14 |     expect(errorMessage.includes('Invalid credentials')).toBeTruthy()
  15 |     expect(errorMessage==='Invalid credentials').toBeTruthy()
  16 | })
```