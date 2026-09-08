const {test, expect} = require('@playwright/test')

test('My first Test', async ({ page }) => {

    expect(1).toBe(1)
})

test.skip('My second Test', async ({ page }) => {

    expect(2).toBe(20)
})

test('My third Test', async ({ page }) => {

   expect(3).toBe(3)
})

test('My fourth Test', async ({ page }) => {

   expect("Amar").toContain("Amar")
})
